import serverless from 'serverless-http';
import { initializeServer } from 'bottender';

const isConsole = process.env.NODE_ENV !== 'production';
const server = initializeServer({ isConsole });

if (server) {
  module.exports.handler = serverless(server);
} else {
  console.error('unable to initialize server');
}
