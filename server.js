const express = require('express');
const fs = require('fs');

const app = express();

const connections = [];

app.use((req, res, next) => {
  res.sseSetup = () => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'     
    });
  };

  res.sseSend = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  next();
});

app.get('/connect', (req, res) => {
  res.sseSetup();
  connections.push(res);
});

app.listen(7000, () => {
  console.log('Listening on port 7000...');
});

fs.watchFile('src/karma-result.json', () => {
  connections.forEach(connection => connection.sseSend('boo'));
});