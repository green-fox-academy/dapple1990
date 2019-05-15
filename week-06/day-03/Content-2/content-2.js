 var items = ['apple', 'banana', 'cat', 'dog']
 var listItems = document.getElementsByTagName('li');

 for(let i = 0; i < listItems.length; i++) {
   
    listItems[i].textContent = items[i];
   }
  

  
  var ulColor = document.getElementsByTagName('ul');
  ulColor[0].setAttribute('class', 'coloredUL');
  
  /* 2) change the <ul> element's background color to 'limegreen'
  - use css class to change the color instead of the style property */