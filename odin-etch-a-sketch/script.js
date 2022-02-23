'use strict';

// Implementation needs
// button to create the grid
// mouse hover through grid changes grid color to black
// clear the grid when button is pressed

// Selectors
let btnCreateGrid = document.querySelector('#new-grid');

// event listener
btnCreateGrid.addEventListener('click', createGrid);

// function
function createGrid() {
  let container = document.querySelector('#container');
  container.innerHTML = '';

  // player will input a number and the container will fill with that number of rows x columns
  let numberOfRows = prompt('How many rows do you want?');
  let i = 0;
  let x = numberOfRows * numberOfRows;

  document.documentElement.style.setProperty('--columns-row', numberOfRows);
  // loop through the container and create the cells (divs)
  for (i = 0; i < x; i++) {
    var div = document.createElement('div');
    document.querySelector('#container').appendChild(div);
    div.addEventListener('mouseenter', function () {
      // this.style.backgroundColor = 'black';

      // the function and style below will make random color trail. Comment it out and uncomment the black setting above for only a black trail
      function makeRandomNum(max) {
        let num;
        num = Math.floor(Math.random() * max);
        return num;
      }

      this.style.backgroundColor = `rgb(${makeRandomNum(255)}, ${makeRandomNum(
        255
      )}, ${makeRandomNum(255)})`;
    });
  }
}
