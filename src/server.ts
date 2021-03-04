import bodyParser from 'body-parser';
import express from 'express';
import { bottender } from 'bottender';

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

const handle = app.getRequestHandler();

const server = express();
server.use(
  bodyParser.json({
    verify: (req, _, buf) => {
      (req as any).rawBody = buf.toString();
    },
  })
);

server.all('*', (req, res) => {
  app.prepare().then(() => {
    return handle(req, res);
  });
});

server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});

export {
  server
}
