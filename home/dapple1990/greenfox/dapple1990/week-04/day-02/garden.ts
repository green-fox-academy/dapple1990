'use strict';

import { Flower } from "./flower";
import { Tree } from "./tree";

class Garden {
    flowersInTheGarden: Flower[] = [];
    treesInTheGarden: Tree[] = [];

    addFlower(Flower) {
        this.flowersInTheGarden.push(Flower);
    }

    addTree(Tree) {
        this.treesInTheGarden.push(Tree);
    }

    waterAll(amount: number) : void {
        console.log(`\n Watering with ${amount}`);
        let toWater: number = 0;

        this.treesInTheGarden.forEach(tree => {
            if(tree.shouldIwaterTheTrees(false) === true) {
                toWater += 1;
            }
        });

        this.flowersInTheGarden.forEach(flower => {
            if(flower.shouldIwaterTheFlowers(false) === true) {
                toWater += 1;
            }
        });

        let portionOfWater = amount / toWater;

        this.treesInTheGarden.forEach(tree => {
            if(tree.shouldIwaterTheTrees(false) === true) {
                tree.wateringTrees(portionOfWater);
            }
        });

        this.flowersInTheGarden.forEach(flower => {
            if(flower.shouldIwaterTheFlowers(false) === true) {
                flower.wateringFlowers(portionOfWater);
            }
        })
    }

    printAll() {
        for (let i: number = 0; i < this.treesInTheGarden.length; i++) {
            this.treesInTheGarden[i].shouldIwaterTheTrees(true);
        }

        for (let i: number = 0; i < this.flowersInTheGarden.length; i++) {
            this.flowersInTheGarden[i].shouldIwaterTheFlowers(true);
        }
    }
}

let myGarden = new Garden();
let tulip = new Flower('yellow', 3);
let tuli2 = new Flower('blue', 4);
let platan = new Tree('purple', 8);
let platan2 = new Tree('orange', 7);

myGarden.addFlower(tulip);
myGarden.addFlower(tuli2);
myGarden.addTree(platan);
myGarden.addTree(platan2)
myGarden.printAll();
myGarden.waterAll(40);
myGarden.printAll();
myGarden.waterAll(70);
myGarden.printAll();
