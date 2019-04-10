'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawASquare (x : number, y : number) {
    ctx.beginPath();
    ctx.moveTo(0 ,0);
    ctx.rect(200, 150, x, y);
    ctx.stroke();
} drawASquare(30, 30);

for( let i : number = 0; i <= 3; i++) {
    drawASquare(i * 30, i * 30);

}


// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.
