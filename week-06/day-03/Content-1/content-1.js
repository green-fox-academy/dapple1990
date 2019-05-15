/* 1)  Fill every paragraph with the last one's content.
2)  Do the same again, but you should keep the cat strong.
*/

var fillParagraph = document.getElementsByTagName('p')
for (let i = 1; i < fillParagraph.length; i++) {
  fillParagraph[i].innerHTML += fillParagraph[i-1].innerHTML;
} 

var fillParagraph = document.getElementsByTagName('p')
for (let i = 1; i < fillParagraph.length; i++) {
  fillParagraph[i].innerHTML += fillParagraph[i -1].innerHTML;
}