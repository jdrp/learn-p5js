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
        const r = random(1);

        if (r < 0.5) {
            this.x += (mouseX - this.x) / 150;
            this.y += (mouseY - this.y) / 150;
        }

        else {
            this.x += random(-1, 1);
            this.y += random(-1, 1);
        }
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