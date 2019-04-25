'use strict';

export class Anagram {

    getMyAnagram(wordA: string, wordB: string) {
        let resultOfA = wordA.split('').sort().join();
        let resultOfB = wordB.split('').sort().join();
        let isItAnagram = resultOfA === resultOfB;

        return isItAnagram;
        
    }

    
}

