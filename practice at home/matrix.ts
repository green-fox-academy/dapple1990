'use strict';

let firstMatrix: number[][] = [
    [1, 0, 1],
    [0, 2, 2],
    [1, 2, 5]
];

let secondMatrix: number[][] = [
    [7, 7, 7],
    [6, 5, 7],
    [1, 2, 1]
];

function isSymetric(matrix: number[][]): boolean {
    for (let i: number = 0; i < matrix.length; i++) {
        for (let j: number = 0; j < matrix.length; j++) {
            if (matrix[j][i] !== matrix[i][j]) {
                return false;
            }
        } return true;
    } 
    
}

console.log(isSymetric(secondMatrix));