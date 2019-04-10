'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.height = 600;
canvas.width = 600;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(0, 0);
ctx.lineTo(200, 200);
ctx.stroke();
ctx.closePath();
