const express = require('express');
const fs = require('fs');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const resultsFile = 'src/karma-result.json';

let connection;

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
  connection = res;
  const results = fs.readFileSync(resultsFile, 'utf8');
  connection.sseSend(results);
});

app.listen(7000, () => {
  console.log('Listening on port 7000...');
});

fs.watchFile(resultsFile, () => {
  console.log('File changed... pushing changes');
  const results = fs.readFileSync(resultsFile, 'utf8');
  connection.sseSend(results);
});