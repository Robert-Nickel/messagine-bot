const serverlessExpress = require('aws-serverless-express');
const { server } = require("./server");

const expressServer = serverlessExpress.createServer(server);

module.exports.handle = (event, context) => {
  serverlessExpress.proxy(expressServer, event, context);
};