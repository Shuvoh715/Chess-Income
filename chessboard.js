function Chessboard(id, config) {
  const board = document.getElementById(id);
  board.innerHTML = "";

  const squares = [];

  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.style.width = "12.5%";
    square.style.height = "50px";
    square.style.float = "left";
    square.style.boxSizing = "border-box";

    if ((Math.floor(i / 8) + i) % 2 === 0) {
      square.style.background = "#f0d9b5";
    } else {
      square.style.background = "#b58863";
    }

    board.appendChild(square);
    squares.push(square);
  }

  return {};
}
