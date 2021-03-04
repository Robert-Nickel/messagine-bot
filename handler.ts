import serverless from 'serverless-http';
import { server } from "./src/server";

module.exports.handle = serverless(server);