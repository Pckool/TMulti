var redirectURI = 'http://multi.multi.localhost:8008/login';
var scope = 'chat:read+chat:edit+channel:moderate';
var client = 'zu9oogpw8m51xccq8g0nuwkpln4c5f';
$("#loginTwitch").on('click', () => {
  window.location = `https://id.twitch.tv/oauth2/authorize?client_id=${client}&redirect_uri=${redirectURI}&response_type=code&scope=${scope}&force_verify=true`;

});

$("#startMulti").on('click', () => {
  var streamer_1 = $("#streamer-1").val().toLowerCase();
  var streamer_2 = $("#streamer-2").val().toLowerCase();

  $('<div>', {
    class: "channel-1"
  }).appendTo('.streams-find');
  $('<div>', {
    class: "channel-2"
  }).appendTo('.streams-find');

  $('<iframe>', {
    src: `https://player.twitch.tv/?volume=1&muted&channel=${streamer_1}`,
    id:  'streamer-1-player',
    class: "stream-player",
    frameborder: 0,
    scrolling: 'no'
  }).appendTo('.channel-1');
  $('<iframe>', {
    src: `https://www.twitch.tv/embed/${streamer_1}/chat?darkpopout`,
    id:  'streamer-1-chat',
    frameborder: 0,
    scrolling: 'no'
  }).appendTo('.channel-1');

  $('<iframe>', {
    src: `https://player.twitch.tv/?volume=1&muted&channel=${streamer_2}`,
    id:  'streamer-2-player',
    class: "stream-player",
    frameborder: 0,
    scrolling: 'no'
    }).appendTo('.channel-2');
    $('<iframe>', {
      src: `https://www.twitch.tv/embed/${streamer_2}/chat?darkpopout`,
      id:  'streamer-2-chat',
      frameborder: 0,
      scrolling: 'no'
    }).appendTo('.channel-2');
});
// `https://player.twitch.tv/?volume=1&muted&channel=${streamer_1}`
// `https://www.twitch.tv/popout/${streamer_2}/chat?popout=`
