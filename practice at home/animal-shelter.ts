'use strict';

import { Animal } from './animal-protection';

class Shelter {
    budget: number;
    animals: Animal[] = [];
    adoptersList: string[] = [];

    constructor(budget: number = 50, animals: Animal[], adopterList: string[]) {
        this.budget = budget;
        this.animals = animals;
        this.adoptersList = adopterList;
    }

    rescue(newOne: Animal) : number {
        this.animals.push(newOne);
        return this.animals.length;

    }
    heal(): number {
        for (let i: number = 0; i < this.animals.length; i++) {
            if (this.animals[i].isHealthy === false && this.animals[i].healCost < this.budget) {
                this.budget -= this.animals[i].healCost;
                return 1;
            }
            else {
                return 0;
            }
        }
    }
    addAdopter(name: string) {
        this.adoptersList.push(name);
    }
    findNewOwner(): void {
        let chosenOne = this.animals[Math.floor(Math.random()) * this.animals.length];
        let luckyOne = this.adoptersList[Math.floor(Math.random()) * this.adoptersList.length];
        if (chosenOne.isAdoptable()) {
            this.animals.splice(this.animals.indexOf(chosenOne), 1);
            this.adoptersList.splice(this.adoptersList.indexOf(luckyOne), 1);
        }
    }
    earnDonation(amount: number): number {
        this.budget += amount;
        return this.budget;

    }
    toString(): string {
        let result: string = '';
        result = `Budget : ${this.budget}
            There are ${this.animals.length} and ${this.adoptersList.length} potentional adopters`
        this.animals.forEach(animal => {
            result += animal.toString()
        });
        return result;

    }
}


/* It must have a method named toString that represents the shelter
and print all the informations about the shelter and the animals in the following format:
Budget: <budget>€, 
There are <animals.count> animal(s) and <potentionalAdopters.count> potential adopter(s)
<name> is not healthy (<heal cost>€), and not adoptable
<name> is healthy, and adoptable
*/
let mmm = new Shelter(50, [], ['lali', 'kata'])
console.log(mmm.toString());


