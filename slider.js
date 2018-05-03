function Slider(x, y, colourObject, colourControl) {
    this.topOffset = 100;
    this.slideHeight = 100;
    this.x = x;
    this.y = this.topOffset;
    this.size = 50;
    this.colour = colourObject;
    this.colourControl = colourControl;
    this.dragging = false;

    this.draw = function () {
        this.updateColour();
        if (this.dragging) {
            this.y = mouseY;
            if (this.y > this.topOffset + this.slideHeight) {
                this.y = this.topOffset + this.slideHeight;
            } else if (this.y < this.topOffset) {
                this.y = this.topOffset;
            }
        }

        // Panel
        fill("gainsboro");
        ellipse(this.x, this.topOffset, this.size, this.size);
        rect(this.x, this.topOffset + (this.slideHeight / 2), this.size, this.slideHeight)
        ellipse(this.x, this.topOffset + this.slideHeight, this.size, this.size);

        // Indicator
        fill(this.colour.getColour());
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.click = function (distance) {
        if (distance < 25) {
            this.dragging = true;
        }
    }

    this.release = function () {
        this.dragging = false;
    }

    this.updateColour = function () {

        let value = round(map(this.y, 100, this.topOffset + this.slideHeight, 0, 255));

        if (this.colourControl == "red") {
            this.colour.r = value;
        }
        if (this.colourControl == "green") {
            this.colour.g = value;
        }
        if (this.colourControl == "blue") {
            this.colour.b = value;
        }
    }
}