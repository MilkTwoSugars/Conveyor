function Colour(red, green, blue, alpha) {
    this.r = red;
    this.g = green;
    this.b = blue;
    this.a = alpha;

    this.getColour = function(){
        let s = 'rgba(' + this.r + ', ' + this.g + ',' + this.b + ', ' + this.a + ')'
        let c = color(s);
        return c;
    }

    this.getLightColour = function(){
        let s = 'rgba(' + (this.r + 50) + ', ' + (this.g + 50) + ',' + (this.b + 50) + ', ' + this.a + ')'
        let c = color(s);
        return c;
    }

    this.getRayColour = function(){
        let s = 'rgba(' + this.r + ', ' + this.g + ',' + this.b + ', 0.25)'
        let c = color(s);
        return c;
    }
}