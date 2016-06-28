//models
var board = ['x','','o','','','','','',''];
var turn = 'x';

function drawBoard() {
	var htmlBoard = document.getElementsByClassName('square');
	for (var i=0; i<board.length; i++) {
		htmlBoard[i].innerHTML = board[i];
	}
}

drawBoard();