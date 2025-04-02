let randomCounts = [];
let maxNumber = 20;
let total = 0;

function setup() {
    createCanvas(640, 240);
    for (let i = 0; i < maxNumber; i++) {
        randomCounts[i] = 0;
    }
}

function draw() {
    background(255);

    let id = floor(random(maxNumber));
    randomCounts[id]++;
    total++;

    stroke(0);
    fill(127);
    let w = width / maxNumber;

    for (let x = 0; x < maxNumber; x++) {
        let h = height * (randomCounts[x] / total);
        rect(x * w, height - h, w - 1, h);
    }
}