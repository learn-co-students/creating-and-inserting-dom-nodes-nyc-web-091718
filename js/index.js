//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
// create a div element
let element = document.createElement('div');

// style the div element
element.innerHTML = 'Hello, DOM!';
element.style.backgroundColor = '#f9f9f9';
element.style.textAlign = 'center';

// add the div element to the body so it'll show up on the webpage.
document.body.appendChild(element);

// created an ul element
let ul = document.createElement('ul');

// loop to create 3 li elements inside the ul
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

// add the ul element inside the div element so it'll show up on the webpage.
element.appendChild(ul);

// moving the text to left-align
ul.style.textAlign = 'left';

// removes the 2nd li in the ul
ul.removeChild(ul.querySelector('li:nth-child(2)'))

// removes the whole ul element
ul.remove();
