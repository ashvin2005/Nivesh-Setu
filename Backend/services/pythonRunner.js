import { spawn } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default function runPython(data) {
  return new Promise((resolve, reject) => {
    const pythonPath = join(__dirname, "../../venv/bin/python3");
    const scriptPath = join(__dirname, "../../LLM/riskengine.py");

    const pythonProcess = spawn(pythonPath, [scriptPath]);

    let output = "";

    pythonProcess.stdin.write(JSON.stringify(data));
    pythonProcess.stdin.end();

    pythonProcess.stdout.on("data", (chunk) => {
      output += chunk.toString();
    });

    pythonProcess.stderr.on("data", (chunk) => {
      console.warn("PYTHON STDERR:", chunk.toString()); 
    });

    pythonProcess.on("close", () => {
      try {
        const parsed = JSON.parse(output);
        resolve(parsed);
      } catch (err) {
        reject("Invalid JSON from Python: " + output);
      }
    });
  });
}