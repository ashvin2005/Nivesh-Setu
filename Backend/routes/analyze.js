import express from "express";
import { analyzePortfolio } from "../controllers/analyzeController.js";

const router = express.Router();

router.post("/analyze", analyzePortfolio);

export default router;