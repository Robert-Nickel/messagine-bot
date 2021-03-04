const serverless = require('serverless-http');
const { server } = require("./server");

module.exports.handle = serverless(server);