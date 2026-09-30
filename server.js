// server.ts
import express from "express";
import path from "path";
import fs from "fs";
var app = express();
var PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3e3;
app.use(express.json());
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "Precision Talent Network (PTN)",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
async function startServer() {
  const distPath = path.resolve(process.cwd(), "dist");
  const isProduction = process.env.NODE_ENV === "production" || fs.existsSync(distPath);
  if (isProduction && fs.existsSync(distPath)) {
    console.log(`[PTN] Production mode: Serving static build from ${distPath}`);
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  } else {
    console.log("[PTN] Development mode: Loading Vite middleware");
    const { createServer } = await import("vite");
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[PTN] Precision Talent Network server running on http://0.0.0.0:${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("[PTN] Server startup failure:", err);
  process.exit(1);
});
