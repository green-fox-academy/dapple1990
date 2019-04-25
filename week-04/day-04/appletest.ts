import * as test from 'tape';
import { Apple } from './apple';
import { equal } from 'assert';



test('same value', t => {
    const idared = new Apple(); 
    const value = idared.getApple('apple');
    const expected = 'apple';
    t.equal(value, expected);
    t.end();
});




