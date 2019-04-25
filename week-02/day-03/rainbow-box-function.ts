'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawASquare (size: number, color : string) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.rect(100, 100, size, size)
    ctx.stroke();
}

let colorsAndSizes = [];
colorsAndSizes.push({ color: 'yellow', size: 20   });
colorsAndSizes.push({ color: 'purple', size: 10   });
colorsAndSizes.push({ color: 'red', size: 30   });
colorsAndSizes.push({ color: 'green', size: 40   });
colorsAndSizes.push({ color: 'orange', size: 50   });
colorsAndSizes.push({ color: 'yellblueow', size: 60   });



for (let i : number = 0; i < colorsAndSizes.length; i++) {
    drawASquare(colorsAndSizes[i].color, colorsAndSizes[i].size);

}

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
