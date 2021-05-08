var audio = document.createElement("audio");
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
audio.play();

// var v=1;
function show(){
    console.log('working')
    document.getElementById('btn').innerHTML = 'Off';
}