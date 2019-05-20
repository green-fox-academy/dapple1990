'use strict';

const pictrures = [
  {
    src: 'https://www.balisafarimarinepark.com/wp-content/uploads/2018/05/siberian-tiger-bali-safari-park.jpg',
    title: '',
    desc: ''
  },
  {
    src: 'https://s.abcnews.com/images/International/polar-bear-stock-01-gty-jef-180706_hpMain_12x5_992.jpg',
    title: '',
    desc: ''
  },
  {
    src: 'https://theecologist.org/sites/default/files/styles/inline_l/public/2019-01/43025457472_9342369301_b.jpg?itok=0kO21Rik',
    title: '',
    desc: ''
  },
  {
    src: 'https://cdn.givingcompass.org/wp-content/uploads/2018/08/30102030/How-We-Protect-Endangered-Animals-800x450.jpg',
    title: '',
    desc: ''
  }
]

function generateThumbnails() {
  let loadPictures = document.getElementsByClassName('thumbnails')
  for (let i = 0; i < pictrures.length; i++) {
    let newImg = document.createElement('img');
    newImg.setAttribute('src', pictrures[i].src);
    loadPictures[0].appendChild(newImg);
  }
}
generateThumbnails();

function setPicture(index) {
  let foundPicture = document.getElementById('biggest-picture')
  foundPicture.setAttribute('src', pictrures[index].src);
}
setPicture(0);

let currentPicture = 0;

function next() {
  if (currentPicture < pictrures.length) {
    currentPicture++;
    setPicture(currentPicture);
  } else {
    currentPicture = 0;
    setPicture(currentPicture);
  }
}

function prev() {
  if (currentPicture > 0) {
    currentPicture--;
    setPicture(currentPicture);
  }
  else {
    currentPicture = pictrures.length - 1;
    setPicture(currentPicture);
  }
}

let nextButton = document.querySelector('.next')
nextButton.onclick = () => {
  next();
}

let prevButton = document.querySelector('.previous')
prevButton.onclick = () => {
  prev();
}