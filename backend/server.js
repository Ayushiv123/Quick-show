import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import { inngest, functions } from "./inngest/index.js";
import { serve } from "inngest/express";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get("/", (req, res) => res.send("server is Live"));


app.use("/api/inngest", serve({ client: inngest, functions }));

// Serve React frontend build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "client/build")));

// Fallback route for React Router
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
  });
};

startServer();
