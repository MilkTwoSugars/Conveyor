var counter = 0;
var cylinderFreqency = 100;
var cylinderSpeed = 3;

var cylinders = [];
var machines = [];

var canvasHeight = 1000;
var canvasWidth = 1920;

var machineMargin = canvasWidth / 5;
var middle = canvasHeight / 2;

var cylinderSize = 40;
var conveyorHeight = 100;

var secondConveyorOffSet = 250;

function start() {
    let c = new Colour(0, 0, 0, 1);
    let c2 = new Colour(0, 0, 0, 1);
    let c3 = new Colour(0, 0, 0, 1);
    let m = new Machine(machineMargin, c, "red");
    let m2 = new Machine(machineMargin * 2, c2, "green");
    let m3 = new Machine(machineMargin * 3, c3, "blue");
    machines.push(m);
    machines.push(m2);
    machines.push(m3);
}

function step(){
    counter++;
    if (counter % cylinderFreqency == 0) {
        let col = new Colour(0, 0, 0, 1);
        let c = new Cylinder(0, middle, cylinderSize, col, cylinderSpeed);
        cylinders.push(c);
    }
}

function drawCylinders() {
    for (var i = 0; i < cylinders.length; i++) {
        if (cylinders[i].active) {
            cylinders[i].move();
            cylinders[i].draw();
        }
    }
}

function drawMachines(){
    for (var i = 0; i < machines.length; i++) {
        if (machines[i].active) {
            machines[i].draw();
        }
    }
}

function getDistance(element) {
    return float(dist(mouseX, mouseY, element.x, element.y));
}