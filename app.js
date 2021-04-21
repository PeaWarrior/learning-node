require('dotenv').config();
const http = require('http');
const { PORT } = process.env;

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    res.write('<html>');
    res.write('<body><form action="/message" method="POST"><input type="text" /><button type="submit">Submit</button></form></body>');
    res.write('</html>');
  } else {
    res.write('<html>');
    res.write('<body><h1>Hey</h1></body>');
    res.write('</html>');
  };
  res.end();
});

server.listen(PORT);