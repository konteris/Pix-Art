const DEFAULT_GRID_SIZE = 16;
const DEFAULT_GRID_COLOR = '#000000';

const gridContainer = document.querySelector('.grid-container');
const gridSizeSlider = document.querySelector('#grid-size');
const baseColorPicker = document.querySelector('#base');

let currentGridColor = DEFAULT_GRID_COLOR;

gridSizeSlider.value = DEFAULT_GRID_SIZE;

gridSizeSlider.addEventListener('input', handleGridSizeChange);
baseColorPicker.addEventListener('input', handleColorChange);

function handleGridSizeChange(event) {
    const newGridSize = event.target.value;
    updateGrid(newGridSize);
}

function handleColorChange() {
    currentGridColor = this.value;
}

function updateGrid(size) {
    clearGrid();
    createGrid(size);
}

function clearGrid() {
    gridContainer.textContent = '';
}

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < Math.pow(size, 2); i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-child');
        gridElement.addEventListener('mouseover', handleMouseOver);
        gridElement.addEventListener('mousedown', handleMouseDown);
        gridContainer.appendChild(gridElement);
    }
}

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

function handleMouseOver(event) {
    if (isMouseDown) {
        event.target.style.backgroundColor = currentGridColor;
    }
}

function handleMouseDown() {
    event.target.style.backgroundColor = currentGridColor;
}