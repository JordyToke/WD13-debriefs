// get root element
const root = document.documentElement;
smoothMove /= 100;

document.addEventListener('mousemove', (event) => {
  // calculate transform
  const rotatey = (event.clientx - window.innerHeight / 2) * smoothMove;
  const rotateX = (event.clientY - window.innerHeight / 2) * -smoothMove / 2;

  // set CSS vars
  root.style.setProperty('--rotate-x', `${rotateX}deg`);
  root.style.setProperty('--rotate-y', `${rotateY}deg`);
});

module.exports = parallax;