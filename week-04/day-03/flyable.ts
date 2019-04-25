'use strict';

interface Flyable {
    land : string;
    fly : string;
    takeOff : string;
}

abstract class Vehicle {
    type : string;
    color : string;
    engineType: string;
    constructor(type: string, color : string, engineType : string) {
        this.type = type;
        this.color = color;
        this.engineType = engineType;
    }
}