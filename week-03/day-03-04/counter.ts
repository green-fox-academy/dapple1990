/*Create a Counter class
which has an integer property
when creating it should have a default value 0 or we can specify it when creating
we can add(number) to increase the counter's value by a whole number
or we can add() without parameters just increasing the counter's value by one
and we can get() the current value as string
also we can reset() the value to the initial value */

'use strict';

class Counter{
    value : number;
    private initialValue : number;

    constructor(value = 0) {
        this.value = value;
        this.initialValue = value;
    }

    add(x : number = 1) : void {
        this.value = this.value + x;
    }

    get() : string {
        return this.value.toString();
    }

    reset() {
        this.value = this.initialValue;
    }

}


let counter = new Counter(50);
counter.add(5);
counter.add();
console.log(counter.get());
counter.reset();
console.log(counter);