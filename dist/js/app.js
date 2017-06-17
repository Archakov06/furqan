var player, audio, curIndex = 0;
var isPlaying = $('#play').is('.hide');
var mp3 = [
'https://verses.quran.com/Alafasy/mp3/001001.mp3',
'https://verses.quran.com/Alafasy/mp3/001002.mp3',
'https://verses.quran.com/Alafasy/mp3/001003.mp3',
'https://verses.quran.com/Alafasy/mp3/001004.mp3',
'https://verses.quran.com/Alafasy/mp3/001005.mp3',
'https://verses.quran.com/Alafasy/mp3/001006.mp3',
'https://verses.quran.com/Alafasy/mp3/001007.mp3',
];
var lastVolume = 70;

$(document).ready(function() {

	audio = $('audio')[0];

	audio.src = mp3[0];

	audiojs.events.ready(function() {
		player = audiojs.create(audio);
		player.trackEnded = function() {
			alert('1')
		}
	});

	$('#range').on('mousemove', function() {
		var vol = this.value/100;
		lastVolume = vol; 
		player.setVolume(vol);
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
	if (curIndex >= mp3.length-1) {
	   return; 
	}
	curIndex++;
	player.load(mp3[curIndex]);
	player.play();
	if (!isPlaying){
		$('#pause').removeClass('hide');
		$('#play').addClass('hide');
	}
}

function back() {
	if (curIndex < 0) {
		return;
	}
	player.load(mp3[curIndex]);
	player.play();
	if (!isPlaying){
		$('#pause').removeClass('hide');
		$('#play').addClass('hide');
	}
}

function mute() {
	if (!player.element.volume) {
		player.setVolume(lastVolume);
		$('#range').val(lastVolume*100);
	} else {
		player.setVolume(0);
		$('#range').val(0);
	}
}