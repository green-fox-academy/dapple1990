'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(30, 40, 200, 100);
ctx.stroke();

for(let i: number = 0; i <= 4; i++) {
    let colorAndSize: string[] = [];
    colorAndSize.push{size: 10, color: "green"};
    colorAndSize.push{size: 30, color: "blue"};
    colorAndSize.push{size: 20, color: "grey"};
    colorAndSize.push{size: 40, color: "brown"};
    colorAndSize.forEach(function(item) {
        colorAndSize[i] + color;
        colorAndSize[i] + colorAndSize;
    }
}
