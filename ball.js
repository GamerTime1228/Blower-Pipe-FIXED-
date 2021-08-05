class Ball {
    constructor(x, y, w, h) {
        var ball_options = {
            restitution: 0.5
        }
        this.body = Bodies.rectangle(x, y, w, h, ball_options);
        this.w = w;
        this.h = h;
        World.add(engine.world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, this.w, this.h);
        noStroke();
        pop();
        }
}