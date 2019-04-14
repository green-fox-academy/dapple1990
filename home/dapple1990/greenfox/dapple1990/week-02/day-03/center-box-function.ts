'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function mySquare(size: number) {

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.strokeRect(canvas.width / 2, canvas.height / 2, size, size);
    ctx.stroke();
}
for (let i : number = 0; i <= 3; i++) {
    mySquare(12 * i);
}

// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
