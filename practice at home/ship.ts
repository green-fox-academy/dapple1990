'use strict';

import { Pirate } from "./pirate2";

class Ship {
    team: Pirate[] = [];

    addPirates(newOne: Pirate) {
        if (newOne.isCaptain === true) {
            let shipHasACaptain: boolean = false;
            for (let i: number = 0; i < this.team.length; i++) {
                if (newOne.isCaptain === true) {
                    shipHasACaptain = true;
                }
            }
            if (shipHasACaptain === false) {
                this.team.push(newOne);

            }
            else {
                this.team.push(newOne);
            }
        }
    }
    getPoorPirates() {
        let result: string[] = [];
        this.team.forEach(pirate => {
            if (pirate.woodenLeg === true && pirate.gold < 15) {
                result.push(pirate.name);
            } return result;
        })
    }
    getGolds() {
        let result: number = 0;
        this.team.forEach((pirate) => {
            pirate.gold += result;
        }); return result;
    }
    lastDayOnTheShip() {
        this.team.forEach(pirate => {
            pirate.party();
        })

    }
    prepareForBattle() {
        this.team.forEach(pirate => {
            for(let i : number = 0; i < 5; i++) {
                pirate.work();
            }
            this.lastDayOnTheShip();
        })
    }
}




