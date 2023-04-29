import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response, next: NextFunction) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const render = (await vite.ssrLoadModule('entry-server.tsx')).render;
      const [start, end] = template.split(`<!--ssr-outlet-->`);

      const { pipe } = render(url, {
        onShellReady() {
          res.write(start);
          pipe(res);
        },
        onAllReady() {
          res.write(end);
          res.end();
        },
      });
    } catch (e: unknown) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(5173, () => {
    console.log(`Server is listening on port: http://localhost:5173/`);
  });
}

createServer();
