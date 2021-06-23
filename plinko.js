class Plinko {
    constructor(x,y,radius) {

        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius * 2;
        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("white");

        for(var i = 0; i*75 < 10000; i++) {
            
            ellipse(37 + i*80, pos.y, this.radius);
        }

        for(var k = 0; k*75 < 10000; k++) {
            
            ellipse(58 + k*90, pos.y - 80, this.radius);
        }

        for(var k = 0; k*75 < 10000; k++) {
            
            ellipse(58 + k*90, pos.y + 80, this.radius);
        }
    }
}