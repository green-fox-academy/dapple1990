'use strict';

export class Method {
    sum(value: number[]) {
        let result: number = 1;
        for (let i: number = 0; i < value.length; i++) {
            result = result + value[i];
        }
        return result;
    }

}