console.log('this is snake game')

//grabing btn for dice random

let btn = document.getElementById('btn');
let dino1 = document.getElementById('p1')
let dino2 = document.getElementById('p2')
var dice = 0;
var play1 = 0;
var play2 = 0;
var count = 0;
var dinoR1 = 400;
var dinoB1 = 5;
var dinoL1 = 200;
var dinoR2 = 400;
var dinoB2 = 5;
var count = 0;      //for chances
var tount1 = 0;
var sount = 0
var tount2 = 0;
btn.addEventListener('click', function (e) {

    dice = Drandom();
    btn.innerHTML = dice;
   
     sount += dice;
   
    if (count % 2 == 0) {
        if (play1 == 0) {
            Right();
            // count++;
        }
        else if (play1 == 1) {
            Left();
            // count++;
        }
    }
    // else if(count % 2 != 0){

    //     tount2 += dice;
    //     if (play2 == 0) {
    //         Right();
    //         count++;
    //     }
    //     else if(play2 == 1){
    //         Left();
    //         count++;
    //     }
    // }

// console.log(tount1)
console.log("sount", sount)
})

function Right() {
    for (i = 1; i <= dice; i++) {
        dinoR1 += 80;
        dino1.style.right = dinoR1 + "px";
        tount1 ++;
        if(tount1>=8){
            dinoB1 = 80;
            dinoR1 = dinoR1 - 40;
            dinoR1-= 80
            dino1.style.bottom = dinoB1 + "px";
            dino1.style.right = dinoR1 + "px";
           
            // Left();
            console.log(dinoR1)
            break;

        }
    }
}

// function Left(){
//     play1 = 1;
//     for (i = 1; i <= dice; i++) {
//         // tount1++;
//         dinoR1 -= 80;
//         dino1.style.right = dinoR1 + "px";
//     }
// }

//random dice
function Drandom() {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;

}

function myFunction(event) {
    var x = event.offsetX;
    document.getElementById("demo").innerHTML = x;
}//80 15

// for (i = 1; i <= dice; i++) {
//     dinoR1 += 80;
//     dino1.style.right = dinoR1 + "px";
//     if (tount1 == 3) {
//         dinoB1 = 160
//         dino1.style.bottom = dinoB1 + "px";
//     }
//   else if(tount1 > 7){
//         dinoB1 = 70;
//         dino1.style.bottom = dinoB1 + "px";

//         dino1.style.right = dinoR1 + "px";
//     }





 // else if (count % 2 != 0) {
    //     tount2 += dice;
    //     console.log("2", tount2)
    //     for (i = 1; i <= dice; i++) {
    //         dinoR2 += 80;
    //         dino2.style.right = dinoR2 + "px";

    //     }
    //     count++;
    // }