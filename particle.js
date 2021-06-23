class Particle {
    constructor(x,y,radius) {

        var options = {
            isStatic: false,
            restitution: 0.4
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255), random(0,255), random(0,255));
        this.radius = radius * 2;
        World.add(world,this.body);

    }
    display() {
        var pos = this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);



    }
}