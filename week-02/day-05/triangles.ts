'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



function triangle(a: any, b: any, c: any) {
    ctx.beginPath();
    ctx.strokeStyle = 'green'
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.lineTo(c.x, c.y);
    ctx.closePath();
    ctx.stroke();
} //triangle({ x: 0, y: 0 }, { x: 0, y: canvas.height }, { x: canvas.width, y: canvas.height });

function drawATriangle(a: any, b: any, c: any, level: any) {
    if (level <= 0) {
        return triangle(a, b, c);
    }
    else {
        let a2: any = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
        let b2: any = { x: (b.x + c.x) / 2, y: (b.y + c.y) / 2 };
        let c2: any = { x: (c.x + a.x) / 2, y: (c.y + a.y) / 2 };

        drawATriangle(a, a2, c2, level - 1);
        drawATriangle(b, b2, a2, level - 1);
        drawATriangle(c, c2, b2, level - 1);
    }
} drawATriangle({ x: 0, y: 0 }, { x: 600 / 2, y: 400}, { x: canvas.width, y: 0 }, 6);
