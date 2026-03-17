import express from "express";
import cors from "cors";
import { runAgent } from "./agent.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/agent", async (req, res) => {

  const { question, options } = req.body;

  try {

    const result = await runAgent(question, options);

    res.json(result);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});

app.listen(5000, () => {
  console.log("AI agent running on port 5000");
});