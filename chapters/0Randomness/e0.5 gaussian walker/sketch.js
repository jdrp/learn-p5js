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
        const step = randomGaussian(0, 3);

        if (random(1) < 0.5) this.x += step;
        else this.y += step;
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