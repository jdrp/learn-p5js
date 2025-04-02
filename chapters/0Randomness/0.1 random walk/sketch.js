class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    show() {
        stroke(0);
        point(this.x, this.y);
    }

    step() {
        const xstep = random(-1, 1);
        const ystep = random(-1, 1);

        this.x += xstep;
        this.y += ystep;
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