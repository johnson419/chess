// scripts/main.js
const chess = new Chess();
const board = document.getElementById('chessboard');
 // Initialize the chess game

// TODO: Implement your chessboard rendering and interaction code here

// Example: Render the initial chessboard
function renderChessboard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = row;
            square.dataset.col = col;
            chessboardContainer.appendChild(square);
        }
    }
}

// Add event listener to squares
chessboardContainer.addEventListener('click', handleSquareClick);

// Handle square click event
function handleSquareClick(event) {
    const square = event.target;
    const row = square.dataset.row;
    const col = square.dataset.col;
    console.log(`Clicked on square at row ${row} and col ${col}`);
}

// Call the function to render the initial chessboard
renderChessboard();
