'use strict';

export class Animal {
    ownerName: string;
    isHealthy: boolean;
    healCost: number;
    name: string;

    constructor(ownerName: string, isHealthy: boolean, healCost: number, name: string) {
        this.ownerName = ownerName;
        this.isHealthy = isHealthy
        this.healCost = healCost;
        this.name = name;
    }

    heal() {
        this.isHealthy = true;
    }

    isAdoptable(): boolean {
        if (this.isHealthy === true) {
            return true;
        } else {
            return false;
        }
    }
    toString(): string {
        if (this.isHealthy === true) {
            return `${this.name} is not healthy ${this.healCost}, and not adoptable;`
        } else {
            return `${this.name} is healthy, and adoptable`
        }
    }
}


export class Cat extends Animal {
    constructor(ownerName: string, isHealthy: boolean, name: string = 'cat') {
        super(ownerName, isHealthy, Math.floor(Math.random() * 10), name)
    }
}

export class Dog extends Animal {
    constructor(ownerName: string, isHealthy: boolean, name: string = 'dog') {
        super(ownerName, isHealthy, Math.floor(Math.random() * 10), name)
    }
}

export class Parrot extends Animal {
    constructor(ownerName: string, isHealthy: boolean) {
        super(ownerName, isHealthy, Math.floor(Math.random() * 10), name)
    }
}



