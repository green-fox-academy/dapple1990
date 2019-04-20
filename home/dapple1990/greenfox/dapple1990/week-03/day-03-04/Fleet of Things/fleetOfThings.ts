import { Thing } from './thing';
import { Fleet } from './fleet';

class FleetOfThings {

    main() {


        let fleet = new Fleet();

        /* Crete a fleet of things to have this output:
        1. [ ] Get milk
        2. [ ] Remove the obstacles
        3. [x] Stand up
        4. [x] Eat lunch
        // Hint: You have to create a `print()` method as well */



        fleet.add(new Thing('Get milk'));
        fleet.add(new Thing('Remove the obstacles'));

        let standUp = new Thing('Stand up');
        standUp.complete();
        fleet.add(standUp);

        let eatLunch = new Thing('Eat lunch');
        eatLunch.complete();
        fleet.add(eatLunch);

        for (let i: number = 0; i < fleet.getThings().length; i++) {
            console.log(`${i + 1}. [${fleet.getThings()[i].getCompleted() ? 'X' : ' '}] ${fleet.getThings()[i].getName()}`)
        }

        //console.log(fleet)
    }

}

let newList = new FleetOfThings();
newList.main();