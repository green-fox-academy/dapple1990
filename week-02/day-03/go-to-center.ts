'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
canvas.height = 600;
canvas.width = 600;
const ctx = canvas.getContext('2d');


function center(x: number, y: number) {
    ctx.moveTo(0,0);
    ctx.lineTo(300, 300);
    ctx.stroke();
    
} center(250,250);
 
for (let i: number = 0; i <= 3; i++) {  
    center(50 * i, 60 * i);
}