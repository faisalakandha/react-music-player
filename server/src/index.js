'use strict';

const express = require('express');
const path = require('path');
const helmet = require('helmet');
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();
app.use(helmet.frameguard());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// API
app.get('/api', (req, res) => {
  res.set('Content-Type', 'application/json');
  let data = {
    message: 'Hello world, Woooooeeeee!!!!'
  };
  res.send(JSON.stringify(data, null, 2));
});

// GET method for music

app.get("/music/:query/:pageNumber", async (req, res) => {
  const query = req.params.query;
  const pageNumber = req.params.pageNumber;

  const api_url = `https://itunes.apple.com/search?term=${query}&media=music&${pageNumber}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});


// Error Handling
app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500).send("Something broke!");
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
