const serverlessExpress = require('aws-serverless-express');

import { app } from "./app";

const server = serverlessExpress.createServer(app);

export const handle = (event, context) => {
  serverlessExpress.proxy(server, event, context);
};