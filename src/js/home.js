var redirectURI = 'http://multi.multi.localhost:8008/login';
var scope = 'chat:read+chat:edit+channel:moderate';
var client = 'zu9oogpw8m51xccq8g0nuwkpln4c5f';
$(".butn-twitch").on('click', () => {
  window.open(`https://id.twitch.tv/oauth2/authorize?client_id=${client}&redirect_uri=${redirectURI}&response_type=token&scope=${scope}&force_verify=true`);

});
