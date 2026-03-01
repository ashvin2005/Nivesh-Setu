import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function runPython(data) {
  return new Promise((resolve, reject) => {
    const venvPythonPath = join(__dirname, "../../venv/bin/python3");
    const scriptPath = join(__dirname, "../../LLM/riskengine.py");

    // Fallback to python3 if venv does not exist on Render or if overriden by env var
    const pythonPath = process.env.PYTHON_PATH || (existsSync(venvPythonPath) ? venvPythonPath : "python3");

    const pythonProcess = spawn(pythonPath, [scriptPath]);

    pythonProcess.on("error", (error) => {
      reject(`Failed to start subprocess: ${error.message}. Is Python installed and in the environment?`);
    });

    let output = "";

    pythonProcess.stdin.write(JSON.stringify(data));
    pythonProcess.stdin.end();

    pythonProcess.stdout.on("data", (chunk) => {
      output += chunk.toString();
    });

    pythonProcess.stderr.on("data", (chunk) => {
      console.warn("PYTHON STDERR:", chunk.toString()); 
    });

    pythonProcess.on("close", (code) => {
      if (code !== 0) {
        return reject(`Python process exited with code ${code}`);
      }
      try {
        const parsed = JSON.parse(output);
        resolve(parsed);
      } catch (err) {
        reject("Invalid JSON from Python: " + output);
      }
    });
  });
}