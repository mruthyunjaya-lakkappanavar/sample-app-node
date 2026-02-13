/**
 * Simple Express application demonstrating shared CI/CD workflows.
 */

import express, { Request, Response } from "express";

const app = express();

const VERSION = process.env.APP_VERSION || "0.1.0";
const PORT = parseInt(process.env.PORT || "3000", 10);

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", version: VERSION });
});

// Greeting endpoint
app.get("/api/greet", (req: Request, res: Response) => {
  const name = (req.query.name as string) || "World";
  res.json({ message: `Hello, ${name}!` });
});

// Only start server if run directly (not imported for tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
