function acceptReject(fun = x => x) {
    while (true) {
        let r1 = random(1);
        let p = fun(r1);

        if (random(1) < p) {
            return r1;
        }
    }
}

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
        const step = acceptReject(x => x * x) * 5;

        console.log(step);

        const r = random(1);
        if (random(1) < 0.25) this.x += step;
        else if (random(1) < 0.5) this.x -= step;
        else if (random(1) < 0.75) this.y += step;
        else this.y -= step;
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