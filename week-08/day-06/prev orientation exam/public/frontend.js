const form = document.querySelector('.my-form');

function resetInput() {
  form.reset();
}


function errorMessage() {
  let message = document.querySelector('.message')
  message.innerHTML = '<span class="error-message">Your alias is already in use!</span>';
}

function succesMessage(alias, code) {
  let succes = document.querySelector('.message')
  succes.innerHTML = `Your URL is aliased to <span class="incoming-value">${alias}</span> 
  and your secret code is <span class="incoming-value"> ${code}</span>.`
} 