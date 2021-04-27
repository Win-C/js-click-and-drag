"use strict";

const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;


// TODO: create functions with names for event listeners
// TODO: implement own drag and drop

slider.addEventListener('mousedown', (evt) => {
  isDown = true;
  slider.classList.add('active');
  startX = evt.pageX - slider.offsetLeft; // adjust for margin on item
  scrollLeft = slider.scrollLeft; // need initial state for first click down
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (evt) => {
  if(!isDown) return; // stop function from running
  evt.preventDefault(); // stop selecting of text in item, or other actions
  const x = evt.pageX - slider.offsetLeft; // recalculate cursor when mousemoves
  const walk = (x - startX) * 3; // how far deviated from initial space
  slider.scrollLeft = scrollLeft - walk; 
});

