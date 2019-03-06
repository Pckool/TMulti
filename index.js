const express = require('express');
var vue = require('vue');
const fs = require('fs');
var app = express();
const axios = require('axios');

var TEmitter = require(`${__diename}/my_modules/TEmitter`);


app.use(express.static(`${__dirname}/src`));
const port = 8008;

var client_id = 'zu9oogpw8m51xccq8g0nuwkpln4c5f';

app.get('/', (req, res) => {
  console.log(`subdomains: ${req.subdomains}`);
  if (req.subdomains[0] === 'multi' && req.subdomains.length === 1){
    console.log('this is the multi subdomain...');
    var streamer = req.params.streamer;
    res.sendFile(`${__dirname}/src/index.html`);
  }

});

app.get('/login', (req, res) => {
  var access_token = req.query.access_token;
  axios.post('https://api.twitch.tv/helix/validate', {
    Authorization: `Bearer ${access_token}`,
    "Client-ID": client_id
  })
  .then((response) => {
    response
  })
  .catch((err) => {
    res.send('There was a problem with the token. Please try again.')
  });
});

app.listen(port, () => {console.log(`connected via port ${port}.`)})
