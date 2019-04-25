'use strict';
import * as test from 'tape';
import { Anagram} from './anagram';

test('Anagrams or not', t => {
    const newAnagram = new Anagram();
    newAnagram.getMyAnagram('act', 'cat')
    const isItAnagram = true;
    const expected = true; 
    t.equal(isItAnagram, expected);
    t.end();

    
})

/* Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
Create a test for that. */

