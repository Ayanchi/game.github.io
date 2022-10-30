var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let bird = new Image;
let back = new Image;
let pipeUp = new Image;
let pipeButton = new Image; 
let road = new Image;

bird.src = 'diss/bird.png';
back.src = 'diss/bg.png';
pipeUp.src = 'https://itproger.com/img/news/flappy_bird_pipeUp.png';
pipeButton.src = 'https://itproger.com/img/news/flappy_bird_pipeBottom.png';
road.src = 'https://itproger.com/img/news/flappy_bird_fg.png';

let gap = 100;
let xPos = 0;
let yPos = 150;
let grov = 1.5;

document.addEventListener('keydown' , moveUp);

function moveUp(){
    yPos -= 30;
}

let pipe = [];

pipe[0] = {
    x : canvas.length,
    y : 0
}

function draw(){

    for(let i=0; pipe.length; i++){
        ctx.drawImage(back, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeButton, pipe[i].x, pipe[i].y + pipeUp.height + gap);

        pipe[i].x--;
    }

    
    ctx.drawImage(road, 0 , canvas.height - road.height);
    ctx.drawImage(bird, xPos, yPos);

    yPos += grov;


    requestAnimationFrame(draw);

}
pipeButton.onload = draw;