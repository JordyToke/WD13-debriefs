// Exercise 3: Save the first element with class "para" to a variable
let para = document.querySelector('.para');

function changeStyle(element) {
  element.style.color = 'red';
  element.style.fontWeight = 800;
}

changeStyle(para);

// Exercise 4: Use document.getElementsByTagName() to change the text of all paragraphs on the page.
const allParas = document.getElementsByTagName('p');

// 
for(let i = 0; i < allParas.length; i++) {
  allParas[i].innerHTML = 'Man I Love Frogs! ' + i;
};

// Exercise 5: Create a new element (like a <div>) using JavaScript and append it to the body of the document.

const newDiv = document.createElement('div');
newDiv.innerHTML = 'I am a new Div!';

document.body.appendChild(newDiv);

// 3. MANIPULATING THE DOM WITH JAVASCRIPT
// Exercise 1: Practice changing text, colors, and styles on the page. (we already did this above?)


// Exercise 2: Add a button to change the color of the heading when clicked.

// Save button from DOM to variable using id
const submitBtn = document.getElementById('submitBtn');

// save our DOM Object with class pageTitle to a variable 
const pageTitle = document.querySelector('.pageTitle');

submitBtn.addEventListener('click', () => {
  pageTitle.style.backgroundColor = 'purple';
  pageTitle.style.color = 'green';
});

// Exercise 3: Add another button that changes the text of a paragraph

// save changePara button to variable
const changeParaBtn = document.getElementById('otherBtn');

// change paras styles on click
changeParaBtn.addEventListener('click', () => {
  for(let para of allParas) {
    if (para.style.fontFamily === 'times') {
      para.style.fontFamily = 'arial';
    } else {
      para.style.fontFamily = 'times';
    }
    console.log(para.style.fontFamily);
  }
});

// Exercise 4: Create a button that removes an element from the DOM when clicked.

const removeBtn = document.getElementById('removeBtn');

removeBtn.addEventListener('click', () => {
  const mainElements = document.querySelector('main').children;
  mainElements[mainElements.length - 1].remove();
});

// Exercise 5: Write a script that toggles the visibility of a specific element on the page when a button is clicked.