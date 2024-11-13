const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModif")
lastModified.textContent = document.lastModified;

// nav button toggle
const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.navi');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('close');
  navList.classList.toggle('show')
}, false);

window.onresize = () => { if (window.innerWidth > 760) navList.classList.remove('show'); navButton.classList.remove('close');};
// const navButton = document.querySelector('.nav-button')
// const navList = document.querySelector('.navi');
// const navMenu = document.querySelectorAll('.navMenu');
// const logo = document.querySelector('.logo');

// navButton.addEventListener('click', () => {
//   navList.classList.toggle('show');
//   navButton.classList.toggle('close');
//   logo.classList.toggle('hide');
// }, false);

// navMenu.forEach((links) => links.addEventListener('click', () => {
//   navList.classList.remove('show');
//   navButton.classList.remove('close');
//   logo.classList.remove('hide');
// }));

// window.onresize = () => { if (window.innerWidth > 760) navList.classList.remove('show'); };
