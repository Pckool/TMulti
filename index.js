const express = require('express');
var vue = require('vue');
const fs = require('fs');
var app = express();
const axios = require('axios');

var TEmitter = require(`${__dirname}/my_modules/TEmitter`);

var tmi = require('tmi.js');

app.use(express.static(`${__dirname}/src`));
const port = 8008;

var client_id = 'zu9oogpw8m51xccq8g0nuwkpln4c5f';
var redirectURI = 'http://multi.multi.localhost:8008/login';


const opts = {
  identity: {
    username: "",
    password: "",
  },
  channels: []
};










app.get('/', (req, res) => {
  console.log(`subdomains: ${req.subdomains}`);
  if (req.subdomains[0] === 'multi' && req.subdomains.length === 1){
    console.log('this is the multi subdomain...');
    res.sendFile(`${__dirname}/src/index.html`);
  }

});

app.get('/login', (req, res) => {
  let code = req.query.code;
  let client_secret="f56g35tnxhl89o6dr2x3tuq4e5zbyp";
  // let token = req.query.code;
  console.log(code);

  if(code){
    // OAuth Token
    axios({
      method: 'post',
      url: `https://id.twitch.tv/oauth2/token`,
      params: {
        "client_id": client_id,
        "client_secret": "f56g35tnxhl89o6dr2x3tuq4e5zbyp",
        "code": code,
        "grant_type": "authorization_code",
        "redirect_uri": redirectURI
      }
    })
    .then((response) => {
      // response.data
      res.sendFile(`${__dirname}/src/authed.html`);
    })
    .catch((err) => {
      res.send('There was a problem with the token. Please try again.\n' + err);
    });
  }
  else{

  }
});

app.get('/streams', (req, res) => {
  if (req.subdomains[0] === 'multi' && req.subdomains.length === 1){
    res.sendFile(`${__dirname}/src/streams.html`);
  }

});
app.listen(port, () => {console.log(`connected via port ${port}.`)})
