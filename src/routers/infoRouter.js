import { Router } from "express";

export const infoRouter = new Router()

infoRouter.get('/', (req, res) => {
    const info = {
      args: process.argv,
      OS: process.env.OS,
      nodeVersion: process.version,
      rss: process.memoryUsage.rss(),
      nodeExecutionPath: process.execPath,
      processId: process.pid,
      wordkingDirectory: process.cwd(),
    };
    res.json(info);
  })
