'use strict';

abstract class Animal {
    name: string;
    age: number;
    constructor(nameOfAnimal: string, ageOfAnimal: number = 5) {
        this.name = nameOfAnimal;
        this.age = ageOfAnimal;
    }

    getName() {
        return this.name;
    };

    breed() {
    };

    feed() {
    };

    drink() {
    };

    play() {
    };


}

class Reptile extends Animal {
    thisIsHowIBreed: string = 'laying eggs'
    breed() {
        return this.thisIsHowIBreed;
    }
}

class Mammal extends Animal {
    thisIsHowIBreed : string = 'pushing miniature versions out.'
    breed() {
        return this.thisIsHowIBreed;
    }
}

class Bird extends Animal {
    thisIsHowIBreed : string = 'I also lay eggs bro'
    breed() {
        return this.thisIsHowIBreed;
    }
}

let reptile = new Reptile("Crocodile");
let mammal = new Mammal("Koala");
let bird = new Bird("Parrot");

console.log("How do you breed?");
console.log("A " + reptile.getName() + " is breeding by " + reptile.breed());
console.log("A " + mammal.getName() + " is breeding by " + mammal.breed());
console.log("A " + bird.getName() + " is breeding by " + bird.breed());