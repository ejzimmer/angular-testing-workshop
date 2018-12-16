const express = require('express');
const fs = require('fs');
const compression = require('compression');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression());


const resultsFile = 'src/karma-result.json';

let connection;

app.use((req, res, next) => {
  res.sseSetup = () => {
    req.socket.setNoDelay(true);
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'  ,
    });
  };

  res.sseSend = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
    res.flush();
  };

  next();
});

app.get('/connect', (req, res) => {
  res.sseSetup();
  connection = res;
//  setInterval(() => connection.sseSend(JSON.stringify({ data: 'ping' })), 30000);
});

app.get('/results', (req, res) => {
  fs.readFile(resultsFile, 'utf8', (err, data) => {
    if (err) console.log(err);
    res.json(data);
  })
});

app.listen(7000, () => {
  console.log('Listening on port 7000...');
});

fs.watchFile(resultsFile, () => {
  console.log('File changed... notifying app');
  fs.readFile(resultsFile, 'utf8', (err, data) => {
    if (err) console.log(err);
    else connection.sseSend({ data: 'new-results'});
  });
});
