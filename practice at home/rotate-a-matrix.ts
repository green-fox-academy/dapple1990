'use strict';

let myMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function rotateMatrix(matrix: number[][]) {
  let newMatrix: number[][] = [];
  for (let i: number = 0; i < matrix.length; i++) {
    let newRow: number[] = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  } return newMatrix;
}
console.log(rotateMatrix(myMatrix));