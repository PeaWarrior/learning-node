require('dotenv').config();
const http = require('http');
const { PORT } = process.env;

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(PORT);