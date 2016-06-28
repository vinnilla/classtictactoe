//models
var board = ['','','','','','','','',''];
var turn = 'x';

//selectors
var htmlBoard = document.getElementsByClassName('square');

//set up click listeners
for (var i=0; i<board.length; i++) {
	htmlBoard[i].addEventListener('click', function(e) {
		var index = getSquareIndex(e.target);
		if (board[index] == '') {
			board[index] = turn;
			//update board
			drawBoard();
			//switch turn
			switchTurn();	
		}
	});
}

function getSquareIndex(target) {
	//loop through squares to check which node was clicked
	for (var j=0; j<board.length; j++){
		//check if the current iterated square is the square that was clicked
		if (htmlBoard[j] === target) {
			return j;//return index
		}
	}
}

//drawing model to screen
function drawBoard() {
	for (var i=0; i<board.length; i++) {
		htmlBoard[i].innerHTML = board[i];
	}
}

//switch turn
function switchTurn() {
	if (turn == 'x'){
		turn = 'o';
	}
	else {
		turn = 'x';
	}
}

function refreshPage() {
	location.reload();
}

drawBoard();