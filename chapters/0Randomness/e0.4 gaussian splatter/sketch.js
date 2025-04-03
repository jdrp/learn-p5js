let slider;

function setup() {
    createCanvas(640, 240);
    background(255);

    slider = createSlider(0, 100);
    slider.position(10, 10);
    slider.size(80);
}

function gaussianColor(stdPercent) {
    const mean = 255 / 2;

    const r = randomGaussian(mean, mean * stdPercent);
    const g = randomGaussian(mean, mean * stdPercent);
    const b = randomGaussian(mean, mean * stdPercent);

    return color(r, g, b);
}

function draw() {
    let stdPercent = slider.value() / 100;

    let x = randomGaussian(width / 2, width * stdPercent);
    let y = randomGaussian(height / 2, height * stdPercent);

    noStroke();
    fill(gaussianColor(stdPercent), 10);
    circle(x, y, 16);
}