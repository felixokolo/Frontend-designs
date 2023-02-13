window.onload = () => {
console.log("im here")
hide = document.getElementById('hider');
nav = document.getElementById('nav');
show = document.getElementById('show');
console.log(nav)
hide.addEventListener('click', () => {
  nav.classList.add('hidest');
  hide.classList.add('hidest')
  show.classList.add('unvailblock')
});
return false
};