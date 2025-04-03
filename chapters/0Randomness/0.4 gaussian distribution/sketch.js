function setup() {
    createCanvas(640, 240);
    background(255);
}

function draw() {
    let x = randomGaussian(width / 2, 60);
    noStroke();
    fill(0, 10);
    circle(x, height / 2, 16);
}