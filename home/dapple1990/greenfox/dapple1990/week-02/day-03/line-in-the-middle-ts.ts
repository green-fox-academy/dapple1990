'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.height = 600;
canvas.width = 600;


const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(300, 400);
ctx.lineTo(300, 300);
ctx.strokeStyle = 'green'
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 200);
ctx.lineTo(300, 400);
ctx.strokeStyle = 'red'
ctx.stroke();





