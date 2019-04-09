'use strict';

function createMatrix(size: number)  {
    const matrix: number[][] = [];

    for(let i: number = 0; i < size;i++) {
        matrix[i] = [];
        
        for(let j : number = 0; j < size; j++) {
            matrix[i][j] = j === (size - i - 1) ? 1 : 0;
            matrix[i][j] = 0;

        }
        console.log(matrix[i]);
    }
    
}


createMatrix(4);
