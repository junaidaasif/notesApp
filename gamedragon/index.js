var up = document.getElementById('up');
var lef = document.getElementById('lef');
var rig = document.getElementById('rig');

function upp() {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(() => {
        dino.classList.remove('animateDino')
    }, 700);

}


function leff() {
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX + 60 + "px"     //140

}

function rigg() {
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX - 60 + "px"
}


// var j = setInterval(() => {
//     var z = Math.floor(Math.random() * (10   - 1 + 1) ) + 1;
//       if(z>=5){
//         obstacle = document.querySelector('.obstacle')
//         console.log(z)
//             // obstacle.style.bottom =  150 + "px"
//             obstacle.classList.add('animateDino');  
//             // obstacle.classList.remove('obstacleAni');
//           setTimeout(() => {
//             // obstacle.style.bottom =  5 + "px" 
//             // obstacle.classList.add('obstacleAni');  
//             obstacle.classList.remove('animateDino');
//           }, 700);
//       }
//   }, 2000);




document.onkeydown = function (e) {
    // console.log('key code is -', e.keyCode)
    if (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 87) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);

    }
    if (e.keyCode == 39 || e.keyCode == 68) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 50 + "px"     //140

    }
    if (e.keyCode == 37 || e.keyCode == 65) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 50 + "px"

    }

}
var score = 0;
var cross = true;

var audio = new Audio('music.mp3');
var audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 100);


setInterval(() => {
    var dino = document.querySelector('.dino');
    var gameOver = document.querySelector('.gameOver');
    var obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 65 && offsetY < 52) {               // (offsetX < 100 && offsetY < 52) 
        gameOver.innerHTML = 'Game Over';
        obstacle.classList.remove('obstacleAni');
        audio.pause();
        audiogo.play();
        clearInterval(j)
        setTimeout(() => {
            audiogo.pause();
        }, 1000);   
        
        
    }
        
    
    else if (offsetX < 70 && cross) {           //145
    // console.log(offsetX)
    score += 1;
    update(score);
    cross = false;
    setTimeout(() => {
        cross = true
    }, 1000);
    setTimeout(() => {
        var aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        var newDur = aniDur
        console.log("dur", newDur)
        if (newDur > 2.8) {
            newDur = aniDur - 0.05;
            obstacle.style.animationDuration = newDur + 's';
            console.log('new animation duration', newDur)
        }
    }, 1000);

}


}, 10);
function update(score) {
    document.getElementById('score').innerHTML = "Your score is : " + score
}

//local
function local() {
    var obstacle = document.querySelector('.obstacle');
    var dino = document.querySelector('.dino');
    document.querySelector('.gameOver').innerHTML = "Welcome to Junaid game";
    obstacle.classList.add('obstacleAni');
    score = 0;
    update(score)
    audio.play();
    dino.style.left = '10px';
    
}    