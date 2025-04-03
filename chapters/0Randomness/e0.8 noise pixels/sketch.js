
function fillPixelsWithNoise(scale) {
    loadPixels();
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const idx = (i + j * width) * 4;

            const bright = noise(i * scale, j * scale) * 255;
            pixels[idx + 0] = bright;
            pixels[idx + 1] = bright;
            pixels[idx + 2] = bright;
            pixels[idx + 3] = 255;
        }
    }
    updatePixels();
}

function setup() {
    createCanvas(640, 240);
    background(255);

    noiseDetail(7, 0.4)
    fillPixelsWithNoise(0.01);
}

function draw() {
}