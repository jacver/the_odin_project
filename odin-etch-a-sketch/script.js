'use strict';

// Implementation needs
// button to create the grid
// mouse hover through grid changes grid color to black
// clear the grid when button is pressed

// Selectors

const btnNewGrid = document.querySelector('.btn-new-grid');
const gridContainer = document.querySelector('.grid-container');

// Creating Grid

const createGrid = function (rows, columns) {
  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-columns', columns);

  for (let i = 0; i < rows * columns; i++) {
    let cell = document.createElement('div');
    gridContainer.appendChild(cell).className = 'grid-item';
  }
};
createGrid(16, 16);

// Trailing effect

const cells = document.querySelectorAll('.grid-item');

cells.forEach((cell) => {
  cell.addEventListener('mouseenter', () => {
    cell.classList.add('hover');
  });
});

// Clearing Grid

// /// /// WORKING ON: deleting entire grid to make a new one with measurements from prompt

const clearGrid = btnNewGrid.addEventListener('click', function () {
  // clear cells
  cells.forEach((cell) => {
    cell.classList.remove('hover');
  });

  // Delete existing grid
  cells.forEach((cell) => {
    cell.remove();
  });

  // prompt user for new grid size and collect input
  const howManyRows = prompt(
    'How many squares per side should your new grid be?'
  );
  let rows = Number(howManyRows);
  let columns = rows;

  // create new grid with user specs
  gridContainer.style.gridTemplateRows = `repeat(${rows}, 25px)`;
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 25px)`;

  createGrid(rows, columns);
});

let placeHolder = function (x) {
  //new grid
};
