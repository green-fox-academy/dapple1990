'use strict';

export class Flower {

    currentWaterAmount : number = 0;
    color : string;

    constructor(currentWaterAmount : number = 4, color : string) {
        this.currentWaterAmount = currentWaterAmount;
        this.color = color;

    }

    needWater() : boolean {
        if(this.currentWaterAmount < 5) {
            return true;
        }
        else {
            return false;
        }
        

    }

    absorbWater(x : number) : void {
        this.currentWaterAmount += x * 0.75;

    }

    print() : void {
        console.log(`The ${this.color} Flower ${this.needWater() ? 'needs water' : 'doesnt need water'} `);
    }

}

let tulip = new Flower(4, 'purple');
let tulip2 = new Flower(2, 'purple');
tulip.print();
tulip2.print();

/* needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5 */