function Cylinder(x, y, size, colourObject, speed) {
    this.x = x;
    this.y = y - size;
    this.size = size;
    this.speed = speed;
    this.active = true;
    this.fall = false;
    this.loopBack = false;

    this.colour = colourObject;

    this.bodyColour = this.colour.getColour();
    this.lidColour = this.colour.getLightColour();

    this.draw = function () {
        rectMode(CENTER);
        //noStroke();
        fill(this.bodyColour);
        // Body
        rect(this.x, this.y, this.size, this.size * 2);
        // Bottom
        ellipse(this.x, this.y + this.size, this.size, this.size / 2);
        // Lid
        fill(this.lidColour)
        ellipse(this.x, this.y - this.size, this.size, this.size / 2);
    }

    this.move = function () {
        if (!this.loopBack) {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }

        if (this.x > canvasWidth + 100) {
            this.y = this.y + secondConveyorOffSet;
            this.loopBack = true;
        }

        if (this.x < 0){
            this.active = false;
            console.log("Bye!");
        }

        for (var i = 0; i < machines.length; i++) {
            let m = machines[i];
            if (this.x == m.x && !this.loopBack) {

                this.colour.r += m.colour.r;
                this.colour.g += m.colour.g;
                this.colour.b += m.colour.b;

                this.bodyColour = this.colour.getColour();
                this.lidColour = this.colour.getLightColour();
            }
        }
    }

    this.click = function (distance) {
        if (distance < this.size) {
            //this.fall = true;
        }
    }
}