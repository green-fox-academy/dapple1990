'use strict';

export class Tree {
    color: string;
    currentWaterAmount: number;

    constructor(color: string, currentWaterAmount: number = 6) {
        this.color = color;
        this.currentWaterAmount = currentWaterAmount;
    }

    waterTrees(): boolean {
        if (this.currentWaterAmount < 10) {
            return true;
        }
        else {
            return false;
        }

    }
    absorbWater(y: number): void {
        this.currentWaterAmount += y * 0.4;
    }

    print() : void {
        console.log(`The ${this.color} Tree ${this.waterTrees() ? 'needs water' : 'doesnt need water'} `)
        //let akarmi = this.waterTrees() ? 'needs water' : 'doesnt need water'
    }
}

let fa = new Tree('blue', 8);
let fa2 = new Tree('red', 6);

fa.print();
fa2.print();


/* needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4 */