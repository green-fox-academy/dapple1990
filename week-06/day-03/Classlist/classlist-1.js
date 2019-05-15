let replaceElement = document.querySelectorAll('p')
if(replaceElement[3].classList.contains('dolphin')){
  replaceElement[0].innerHTML = 'pear';
}
if(replaceElement[0].classList.contains('apple')) {
  replaceElement[2].innerHTML = 'dog';
}

let changeColor = document.querySelector('.apple')
changeColor.classList.add('red');

let balloon = document.getElementsByClassName('balloon')
balloon[0].setAttribute('style', 'border-radius : 0%')
