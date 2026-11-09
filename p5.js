let x = 115;
let y = 300;
let randomx = 450;
let randomy = 450;
let ExitSize = 20;

function setup() {
    createCanvas(400, 400);
  
}
function mousePressed(){
    randomx = mouseX;
    randomy = mouseY;
}

function draw() {
    background(200);

    moveMrGreen();
    drawMouseCoordinates();
    bricks();
    drawExit();
    brickClick();
    drawMrGreen();
    exitDoor();
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

function bricks() {
    fill(50, 50, 150);
    square(30, 60, 150);

    fill(150, 65, 15);
    rect(250, 60, 70, 300);
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
    circle(x, y, 50);
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