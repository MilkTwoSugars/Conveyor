function drawConveyor() {
    noStroke();
    rectMode(CENTER);
    // Top Conveyor
    fill("darkgrey");
    rect(canvasWidth / 2, middle + 25, canvasWidth, conveyorHeight);
    fill("gainsboro");
    rect(canvasWidth / 2, middle, canvasWidth, conveyorHeight);
    // Bottom Conveyor
    fill("darkgrey");
    rect(canvasWidth / 2, middle + secondConveyorOffSet + 25, canvasWidth, conveyorHeight);
    fill("gainsboro");
    rect(canvasWidth / 2, middle + secondConveyorOffSet, canvasWidth, conveyorHeight);
}

function drawEntrance() {
    noStroke();
    fill("darkGrey");
    // Top Entrance
    rect(0, middle - ((conveyorHeight) / 2), 200, 200);
    // Bottom Entrance
    rect(0, middle - ((conveyorHeight / 2) - secondConveyorOffSet), 200, 200);
}

function drawExit() {
    noStroke();
    fill("darkGrey");
    // Top Exit
    rect(canvasWidth, middle - (conveyorHeight / 2), 200, 200);
    // Bottom Exit
    rect(canvasWidth, middle - ((conveyorHeight / 2) - secondConveyorOffSet), 200, 200);
}