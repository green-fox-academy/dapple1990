'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
canvas.height = 600;
canvas.width = 600;

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(0, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(canvas.width, 0);
ctx.lineTo(0, canvas.height);
ctx.stroke();
ctx.closePath();
