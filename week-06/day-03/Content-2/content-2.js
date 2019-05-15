 var items = ['apple', 'banana', 'cat', 'dog']
 var listItems = document.getElementsByTagName('li');

 for(let i = 0; listItems.length; i++) {
   for(let h = 0; h < items.length; h++){
    listItems[i].textContent = items[i];
   }
  }

  
  var ulColor = document.getElementsByTagName('ul');
  ulColor[0].setAttribute('color', 'coloredUL');
  
