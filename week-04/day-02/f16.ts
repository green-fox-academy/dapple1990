'use strict';

export class F16 {
    maxAmmo : number;
    baseDamage : number;

    constructor(maxAmmo : number = 8, baseDamage : number = 30) {
        this.maxAmmo = maxAmmo;
        this.baseDamage = baseDamage;
    }
}