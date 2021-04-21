require('dotenv').config();
const http = require('http');
const fs = require('fs');
const { PORT } = process.env;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<body><form action="/message" method="POST"><input type="text" /><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
  } 
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body><h1>Hey</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(PORT);