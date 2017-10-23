/* Downloaded from https://www.codeseek.co/ */
var treasure = "You Found a Rupee";
tresString = treasure.split("");
document.getElementById('top-checkbox').addEventListener('change', function(e){
  if(e.currentTarget.checked === true){
    var audio = document.getElementById("treasure-sound");
audio.play(); 
  } else {
    curLet = 0; 
    var audio = document.getElementById("treasure-sound");
audio.pause();
    audio.currentTime = 0;
  }
});