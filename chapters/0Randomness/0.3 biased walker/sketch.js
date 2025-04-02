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

        if (r < 0.2) this.y--;
        else if (r < 0.4) this.y++;
        else if (r < 0.6) this.x--;
        else this.x++;
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