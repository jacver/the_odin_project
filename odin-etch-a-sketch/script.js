'use strict';

// Implementation needs
// button to create the grid
// mouse hover through grid changes grid color to black
// clear the grid when button is pressed

// Selectors

let btnCreateGrid = document.querySelector('#new-grid');
btnCreateGrid.addEventListener('click', createGrid);

function createGrid() {
  console.log('test');
  let container = document.querySelector('#container');
  container.innerHTML = '';

  let numberOfRows = prompt('How many rows do you want?');
  let i = 0;
  let x = numberOfRows * numberOfRows;

  document.documentElement.style.setProperty('--columns-row', numberOfRows);
  for (i = 0; i < x; i++) {
    var div = document.createElement('div');
    document.querySelector('#container').appendChild(div);
    div.addEventListener('mouseenter', function () {
      this.style.backgroundColor = 'black';
    });
  }
}
