'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawASquare (x : number, y : number, color : string) {
    ctx.beginPath();
    ctx.rect(0, 0, x, y);
    ctx.fillStyle = "purple";
    ctx.stroke();
} drawASquare(10, 10, "purple");

for (let i : number = 0; i <= 8; i++) {
    drawASquare(40 * i, 60 * i);

}

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
