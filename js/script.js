var play = document.querySelector("#play");
var audio = document.querySelector("#audio");
var songTwo = document.querySelector("#SongSource");

function donePlaying() {
  alert("Play Next Song!");
  audio.src = 'sounds/Another_story.m4a';// At the end of the first song it atomaticly plays this next song
  audio.play();
}

play.addEventListener('click', function() {
  audio.play();
});

audio.addEventListener('ended', function() {
  donePlaying();
});

// Need to figure out how to wirte the rest of the song into an Array so they play one after the other.
// Then loop it back to the first song.
