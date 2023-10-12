const container = document.querySelector("#container");
const newGridBtn = document.querySelector("#new-grid-btn");
const fixedContainerSize = 430; 
const defaultGridSize = 16; 
let gridSize = defaultGridSize; 

newGridBtn.addEventListener('click', () => {
  const newSizeInput = prompt('Enter the number of squares per side (maximum 100):');
  gridSize = Math.min(parseInt(newSizeInput, 10) || defaultGridSize, 64); 
  createGrid();
});

function createGrid() {
  const cellSize = fixedContainerSize / gridSize;
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cells");
    container.appendChild(newDiv);

    newDiv.addEventListener('mouseover', () => {
      newDiv.style.backgroundColor = 'lightseagreen';
    });
  }
}


createGrid();
