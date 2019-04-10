'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0,0);
ctx.fillStyle = "green";
ctx.fillRect(250, 200, 10, 10);
ctx.stroke();
