
const display = () => {
  document.getElementById('pID').innerHTML += ' Jordy';  
};

const showTooltip = () => {
  document.querySelector('input').setAttribute('title', 'Tooltip');
};

const changePs = () => {
  
  // // HTMLcollection
  // let paras = document.getElementsByTagName('p');
  // for(let para of paras) {
  //   para.setAttribute('class', 'pClass');
  // }
  // NodeList
  let paras = document.querySelectorAll('p');
  paras.forEach(para => {
    para.setAttribute('class', 'pClass');
  });
}


// highlight focused element
const body = document.body;

// add event listener
body.addEventListener("mouseover", e => {
  if (e.target !== body) {
    e.target.style.backgroundColor = 'lightblue';
  }
});
body.addEventListener("mouseout", e => {
  e.target.style.backgroundColor = '';
});


// CREATING A NEW DOCUMENT ELEMENT
// constructing the new element
let newPara = document.createElement('p');
// adding text to the paragraph element
newPara.textContent = "DINGUS FIVE!";
// appending the element to the document body
document.body.appendChild(newPara);


// select list itemt

const listItems = document.querySelectorAll('ul .item');

console.log(listItems);

listItems.forEach((item, index) => {
  item.innerHTML = `<span>List Item ${index} </span>`;
  console.log(item.innerHTML);
})

for(let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontWeight = 800;
  listItems[i].style.textDecoration = "underline";
}

// query selector for buttons
const btnList = document.querySelectorAll('.btn');

btnList.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});

// form validation button
const checkInputButton = document.querySelector('#checkName');

checkInputButton.addEventListener('click', () => {
  const inputField = document.querySelector('#firstName');
  const inputVal = inputField.value.trim();
  if(inputVal === '') {
    alert('Please enter a valid name!');
  } else {
    alert(`Success ${inputVal} accepted!`);
  }
})