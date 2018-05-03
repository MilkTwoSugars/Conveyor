function setup() {
    createCanvas(canvasWidth, canvasHeight);
    //createCanvas(windowWidth, windowHeight)
    start();
}

function draw() {
    background("white");
    drawConveyor();
    drawCylinders();
    drawMachines();
    drawEntrance();
    drawExit();
    step();
}