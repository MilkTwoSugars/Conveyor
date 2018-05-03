function mousePressed() {
    for (var i = 0; i < cylinders.length; i++) {
        let c = cylinders[i];
        c.click(getDistance(c));
    }
    for (var i = 0; i < machines.length; i++) {
        let m = machines[i];
        m.slider.click(getDistance(m.slider));
    }
}

function mouseReleased() {
    for (var i = 0; i < machines.length; i++) {
        let m = machines[i];
        m.slider.release();
    }
}

function windowResized() {
    canvasHeight = windowHeight;
    canvasWidth = windowWidth;
    resizeCanvas(windowWidth, windowHeight);
}