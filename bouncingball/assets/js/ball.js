console.log("ballin")

let roomwidth = 600;
let roomheight = 500;
let ballwidth = 150;
let ballheight = 150;

let room = document.getElementById('room');
room.style.width = roomwidth + 'px';
room.style.height = roomheight + 'px';

let ball = document.getElementById('ball');
ball.style.width = ballwidth + 'px';
ball.style.height = ballheight + 'px';

let ballX = 0;
let ballY = 0;
let ballXspeed = 10;
let ballYspeed = 0;
let gravity = 0.5;

function moveball(){
    ballYspeed += gravity;
    
    ballX += ballXspeed;
    ballY += ballYspeed;

    
        
     if (ballX < 0 || ballX + ballwidth > roomwidth) {
        if (ballX < 0) {
            ballX = 0;
        } else {
            ballX = roomwidth - ballwidth;
        }
        ballXspeed *= -1;
    }

    if (ballY + ballheight > roomheight) {
        if (ballY + ballheight > roomheight) {
            ballY = roomheight - ballheight;
        }
        ballXspeed *= 0.99;
        ballYspeed *= -0.85;
    }
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}
setInterval(moveball, 10);