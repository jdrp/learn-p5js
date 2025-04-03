class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;

        this.tx = 0;
        this.ty = 10000;
    }

    show() {
        stroke(0);
        circle(this.x, this.y, 10);
    }

    step() {
        const vel = 5;
        this.x += (noise(this.tx) - 0.5) * vel;
        this.y += (noise(this.ty) - 0.5) * vel;

        this.tx += 0.01;
        this.ty += 0.01;
    }
}

let walker;

function setup() {
    createCanvas(640, 240);
    walker = new Walker();
    background(255);
}

function draw() {
    walker.step();
    walker.show();
}