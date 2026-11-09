let x = 115;
let y = 300;
let randomx = 450;
let randomy = 450;
let ExitSize = 20;
//brickmovements
let brick1X = 30, brick1Y = 60;
let brick2X = 250, brick2Y = 60;
let brick1DX = 0, brick1DY = 0;
let brick2DX = 0, brick2DY = 0;

function setup() {
    createCanvas(400, 400);
  
}
function mousePressed(){
    randomx = mouseX;
    randomy = mouseY;
    randomizeBrickDirections();
}
function randomizeBrickDirections() {
    brick1DX = random(-10, 5);
    brick1DY = random(-10, 5);
    brick2DX = random(-10, 5);
    brick2DY = random(-10, 5);
}

function draw() {
    background(200);

    moveMrGreen();
    keepMrGreenSealed();
    moveBricks();
    drawMouseCoordinates();
    bricks()
    drawExit();
    brickClick();
    drawMrGreen();
    exitDoor();
    drawBorder();
}

function moveMrGreen() {
    if (keyIsDown(RIGHT_ARROW)) x += 2;
    if (keyIsDown(LEFT_ARROW)) x -= 2;
    if (keyIsDown(DOWN_ARROW)) y += 2;
    if (keyIsDown(UP_ARROW)) y -= 2;
}

function drawMouseCoordinates() {
    fill(0);
    noStroke();
    textSize(12);
    text("x: " + round(mouseX) + ", y: " + round(mouseY), 10, 20);
}
function moveBricks() {
    brick1X += brick1DX;
    brick1Y += brick1DY;
    brick2X += brick2DX;
    brick2Y += brick2DY;

    if (brick1X < 0 || brick1X > width - 150) brick1DX *= -1;
    if (brick1Y < 0 || brick1Y > height - 150) brick1DY *= -1;
    if (brick2X < 0 || brick2X > width - 70) brick2DX *= -1;
    if (brick2Y < 0 || brick2Y > height - 300) brick2DY *= -1;
}
function bricks() {
    fill(50, 50, 150);
    square(brick1X, brick1Y, 150);

    fill(150, 65, 15);
    rect(brick2X, brick2Y, 70, 300);
}

function drawExit() {
    fill(500, 0, 0);
    stroke(200, 0, 0);
    strokeWeight(5);
    rect(335, 290, 50, 100);

    fill(500, 500, 500);
    stroke(100, 100, 100);
    strokeWeight(5);
    line(342, 335, 378, 335);

    fill(500, 500, 500);
    stroke(0);
    strokeWeight(0);
    textSize(ExitSize);
    text("EXIT", 338, 320);
}

function brickClick() {
    fill(150, 40, 200);
    square(randomx - 25, randomy - 25, 50);
}

function drawMrGreen() {
    strokeWeight(0);
    fill(0, 300, 0);
    circle(x, y, 50); //25radius
    fill(500, 500, 500);
    circle(x - 11, y, 20);
    circle(x + 11, y, 20);
    fill(0);
    stroke(5);
    strokeWeight(3);
    circle(x - 11, y, 16);
    circle(x + 11, y, 16);
    line(x + 5, y + 18, x - 5, y + 18);
    stroke(0);
    strokeWeight(0);
    fill(500, 500, 500);
    circle(x - 9, y - 3, 7);
    circle(x + 13, y - 3, 7);
    circle(x + 9, y + 3, 5);
    circle(x - 13, y + 3, 5);
}

function exitDoor() {
    if (x >= 335 && x <= 385 && y >= 290 && y <= 390) {
        stroke(0);
        strokeWeight(5);
        fill(500, 500, 500);
        textSize(50);
        text("congration", 100, 200);
        textSize(25);
        strokeWeight(3);
        text("you done it", 150, 250);
    }
}
function drawBorder() {
    noFill();
    stroke(0);
    strokeWeight(8); //
    rect(0, 0, 400, 400);
}
function keepMrGreenSealed() {
    const radius = 25; //mrgreenradius
    const borderPadding = 4; //borderstroke

    x = constrain(x, radius + borderPadding, width - radius - borderPadding);
    y = constrain(y, radius + borderPadding, height - radius - borderPadding);
}
