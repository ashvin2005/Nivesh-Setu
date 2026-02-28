import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyze.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", analyzeRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});