var play = document.querySelector("#play");
var audio = document.querySelector("#audio");



//put all songs in array to loop through
var playlist = [
  'music/Waiting_Too_Long.mp3',
  'music/Id_Be_Waiting.mp3',
  'music/Innerbloom.m4a',
  'music/Show_Me_Love.m4a',
  'music/Another_Story.m4a'
];

//set incrementor to 0
var i = 0;

//var i will increment and choose the next item in the array
audio.addEventListener('ended', function () {
  i = ++i < playlist.length ? i : 0;
  audio.src = playlist[i];
  audio.play();
}, true);

play.addEventListener('click', function() {
  audio.play();
});
