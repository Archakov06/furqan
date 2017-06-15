var player, audio, curIndex = 0;
var isPlaying = $('#play').is('.hide');
var mp3 = [
'https://verses.quran.com/Alafasy/mp3/001006.mp3',
'https://verses.quran.com/Alafasy/mp3/001007.mp3',
'https://verses.quran.com/Alafasy/mp3/001008.mp3',
'https://verses.quran.com/Alafasy/mp3/001009.mp3',
];

$(document).ready(function() {

	audio = $('audio')[0];

	audiojs.events.ready(function() {
		player = audiojs.create(audio);
	});

});

function playPause() {

	if (isPlaying) {
		$('#play').removeClass('hide');
		$('#pause').addClass('hide');
		player.pause();
		isPlaying = false;
	}
	else {
		$('#pause').removeClass('hide');
		$('#play').addClass('hide');
		player.play();
		isPlaying = true;
	}
}


function next() {
	curIndex++;
	player.load(mp3[curIndex]);
	player.play();
	if (!isPlaying){
		$('#pause').removeClass('hide');
		$('#play').addClass('hide');
	}
}

function down() {
	curIndex--;
	player.load(mp3[curIndex]);
	player.play();
	if (!isPlaying){
		$('#pause').removeClass('hide');
		$('#play').addClass('hide');
	}
}

function mute() {
	audio.muted = false;
}