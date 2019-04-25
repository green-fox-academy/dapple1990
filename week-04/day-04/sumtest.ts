import * as test from 'tape';
import { Method } from './sum';

test('sum the numbers', t => {
    const newList = new Method;
    const value = newList.sum([1, 2, 3]);
    const expected = 6;

    t.equal(value, expected);
    t.end();
});


/* Create different tests where you test your method with:
an empyt list
a list that has one element in it
a list that has multiple elements in it
Run them
Fix your code if needed */