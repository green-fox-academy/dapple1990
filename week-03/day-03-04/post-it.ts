/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

'use strict';

class PostIt {
    backgroundColor : string;
    text: string;
    textColor: string;

    /*constructor(backgroundColor : string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor; 
}*/
}

let postIt = new PostIt();
postIt.backgroundColor = 'orange';
postIt.text = 'Idea 1';
postIt.textColor = 'blue';
console.log(postIt);

let postIt2 = new PostIt();
postIt2.backgroundColor = 'pink';
postIt2.text = 'Awesome';
postIt2.textColor = 'black';
console.log(postIt2);

let postIt3 = new PostIt();
postIt3.backgroundColor = 'yellow';
postIt3.text = 'Superb';
postIt3.textColor = 'green';
console.log(postIt3);
