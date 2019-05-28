'use strict';


const counter = document.querySelector('button');
let clicks = 0;
counter.onclick = () => {
  clicks++
  console.log(clicks);
}