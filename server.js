import serverless from 'serverless-http';
import { bottender, initializeServer } from 'bottender';

await runServer();

async function runServer() {
  const app = bottender({
    dev: process.env.NODE_ENV !== 'production',
  });
  const handle = app.getRequestHandler();
  const server = initializeServer();

  if (server) {
    server.all('*', (req, res) => {
      await app.prepare();
      return handle(req, res);
    });
    // server.listen(port);
    module.exports.handler = serverless(server);
  } else {
    throw new Error('Server initialize failed.')
  }
}