'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function square(x: number, y: number) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.rect(x, y, 50, 50);
    ctx.stroke();
} square(50, 50);

for (let i: number = 1; i <= 3; i++) {
    square(i * 50, i * 50);
}

// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.