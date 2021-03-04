import serverless from 'serverless-http';
import { server } from "./server";

module.exports.handle = serverless(server);