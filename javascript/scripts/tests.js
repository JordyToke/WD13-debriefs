// body variable set to out html body tag
let element = document.body;

// event listener for button
let button = document.getElementById("test");

console.log("test 1");

function toggleBG(elem) {
  let colour, backgroundColour;
  if (element.style.backgroundColor === 'white') {
    elem.style.backgroundColor = 'black';
    elem.style.color = 'white';
    colour = 'white'
    backgroundColour = 'black';
  } else {
    elem.style.backgroundColor = 'white';
    elem.style.color = 'black';
    colour = 'black';
    backgroundColour = 'white';
  }
  console.log('%cBackground Toggled!', `color:${colour};background-color:${backgroundColour}`);
}


button.addEventListener("click", () => {
  toggleBG(element);
});

// receives input from console to run a function
Object.defineProperty(window, 'a', {
  get: function () {
      console.log("Why a?")
  }
});