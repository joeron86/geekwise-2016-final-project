// difine songs as array varibles
// var songs ['a, b, c, d, e'];

//create a function will play songs on after eachother

// create a function that will use a button to play next song or previous song

/*var audio;
var playlist;
var tracks;
var current;

init();
function init(){
    current = 0;
    audio = $('#audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .10;
    audio[0].play();
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}
*/

var play = document.querySelector("#play");
var audio = document.querySelector("#audio");
var songTwo = document.querySelector("#SongSource");

function donePlaying() {
  alert("Play Next Song!");
  document.getElementById('SongSource').src = 'sounds/Another_story.m4a';
  audio.play();
}

play.addEventListener('click', function() {
  audio.play();
});

audio.addEventListener('ended', function() {
  donePlaying();
});
