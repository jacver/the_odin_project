"use strict";

// Implementation needs
// button to create the grid
// mouse hover through grid changes grid color to black
// clear the grid when button is pressed

// Selectors

const btnNewGrid = document.querySelector(".btn-new-grid");

const gridContainer = document.querySelector(".grid-container");
const cell = document.querySelector(".grid-item");

// Functions

const createGrid = function (rows, columns) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-columns", columns);

  for (let i = 0; i < rows * columns; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
};
createGrid(16, 16);

const mouseHover = function () {
  cell.style.backgroundColor = "orange";
};
// TO DO - Imeplement mouse hover feature. Make sure this is linked to the actual grid items, i dont think it is
mouseHover();

const clearGrid = function () {};
