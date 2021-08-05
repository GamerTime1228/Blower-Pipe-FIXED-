class BlowerMouth {
    constructor(x, y, w, h) {
        var bm_options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, bm_options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(1);
        fill("black");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        noStroke();
        pop();
        }
}