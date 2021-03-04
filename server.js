const { initializeServer } = require('bottender');

const port = Number(process.env.PORT) || 5000;
const server = initializeServer();

if (server) {
  server.listen(port, () => {
    console.log(`server is running on ${port} port...`);
  });
}

module.exports = { server };