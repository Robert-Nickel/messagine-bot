const serverlessExpress = require('aws-serverless-express');
const { app } = require("./app");

const server = serverlessExpress.createServer(app);

export const handle = (event, context) => {
  serverlessExpress.proxy(server, event, context);
};