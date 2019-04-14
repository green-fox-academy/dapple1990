'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(canvas.width / 2, canvas.height / 2, 10, 10);
ctx.stroke();
