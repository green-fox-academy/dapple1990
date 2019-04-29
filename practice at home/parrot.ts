'use strict';

import { Animal } from './animal-protection';

class Parrot extends Animal {
    constructor(ownerName: string, isHealthy: boolean, healCost: number = 5, name: string) {
        super(ownerName, isHealthy, healCost, name);
}