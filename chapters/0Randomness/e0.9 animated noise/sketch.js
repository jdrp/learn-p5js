let t = 0;


function fillPixelsWithNoise(scale, t) {
    loadPixels();
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            const idx = (i + j * width) * 4;

            const bright = noise((i + t) * scale, (j + t) * scale) * 255;
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
}

function draw() {
    fillPixelsWithNoise(0.01, t);
    t++;
}