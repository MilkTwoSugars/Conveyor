function Machine(x, colourObject, colourControl) {
    this.x = x;
    this.y = 0;
    this.size = 100;
    this.rayWidth = 30;
    this.rayLength = 100;

    this.active = true;

    this.colour = colourObject;
    this.colourControl = colourControl;
    this.slider = new Slider(this.x, this.y, this.colour, this.colourControl);

    this.draw = function () {
        this.rayColour = this.colour.getRayColour();
        noStroke();
        // Ray
        fill(this.rayColour)
        rect(this.x, this.y + this.rayLength, this.rayWidth, this.size * 8);
        arc(this.x, this.y + (this.rayLength * 5), this.rayWidth, this.size / 4, 0, PI);
        // Spout
        fill("darkgrey")
        rect(this.x, this.y, this.size / 2, this.size * 8);
        fill("lightgrey")
        rect(this.x + (this.size / 10), this.y, (this.size / 2) - (this.size / 8), this.size * 8);
        // Body
        fill("grey");
        rect(this.x, this.y, this.size, this.size * 5);
        fill("darkgrey");
        rect(this.x + (this.size / 8), this.y, this.size - (this.size / 4), (this.size * 5));
        this.slider.draw();
    }

    this.click = function (distance) {
        if (distance < 50) {
        }
    }
}