var player;

$(document).ready(function() {

  audiojs.events.ready(function() {
    player = audiojs.create($('audio')[0]);
  });

});


function play() {
	player.play();
}