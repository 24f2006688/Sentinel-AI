import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { 
  currentUser, 
  incidentsData, 
  privacyReportsData, 
  auditLogsData, 
  aiAnalysesData,
  threatTrendChartData,
  privacyScoreTrendData,
  incidentDistributionData
} from "./src/data/mockData.js";

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || "3000", 10);

  app.use(express.json());

  // === API ROUTES ===
  
  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "system_online", version: "v4.2" });
  });

  // User details
  app.get("/api/user", (req, res) => {
    res.json(currentUser);
  });

  // Incidents
  app.get("/api/incidents", (req, res) => {
    res.json(incidentsData);
  });

  // Privacy reports
  app.get("/api/privacy-reports", (req, res) => {
    res.json(privacyReportsData);
  });

  // Audit Logs
  app.get("/api/audit-logs", (req, res) => {
    res.json(auditLogsData);
  });

  // AI Analyses
  app.get("/api/ai-analyses/:incident_id", (req, res) => {
    const analysis = aiAnalysesData.find(a => a.incident_id === req.params.incident_id);
    if (analysis) {
      res.json(analysis);
    } else {
      res.status(404).json({ error: "Analysis not found" });
    }
  });

  // Analytics & Charts Data
  app.get("/api/analytics", (req, res) => {
    res.json({
      threat: threatTrendChartData,
      privacy: privacyScoreTrendData,
      distribution: incidentDistributionData
    });
  });

  // === UI MIDDLEWARE ===
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve the built static files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
