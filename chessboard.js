var board = null;
var game = new Chess();

function initBoard() {
  var config = {
    draggable: true,
    position: 'start',
    onDrop: onDrop
  };

  board = Chessboard('board', config);
}

function onDrop(source, target) {
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  });

  if (move === null) return 'snapback';
}

window.onload = function () {
  initBoard();
};
