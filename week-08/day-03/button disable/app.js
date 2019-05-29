let selectedItems = document.querySelector('form');
let yesRadio = document.querySelector('#yes');
let noRadio = document.querySelector('#no');
let buttonSignUp = document.querySelector('.button-signup');
let catsLover = document.querySelector('.button-love');
let loveCat = document.querySelector('#cat');
let dogPerson = document.querySelector('#dog');
let theFish = document.querySelector('#Viktor');

selectedItems.addEventListener('click', () => {
  if (loveCat.checked || dogPerson.checked) {
    buttonSignUp.disabled = false
  }
  if (yesRadio.checked) {
    catsLover.disabled = false;
  }
  if(noRadio.checked) {
    catsLover.disabled = true;
  }
  if(theFish.checked && noRadio.checked) {
    buttonSignUp.disabled = false;  
    window.alert(`Sigh, we still added you to the cat facts list`)
  }

});

catsLover.addEventListener('click', () => {
  if (yesRadio.checked) {
    window.alert(`Thank you, you've successfully signed up for cat fact`)
  }
});