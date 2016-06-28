//models
var board = ['','','','','','','','',''];
var turn = 'x';

//selectors
var htmlBoard = document.getElementsByClassName('square');

//set up click listeners
for (var i=0; i<board.length; i++) {
	htmlBoard[i].addEventListener('click', function(e) {
		console.log(e.target);
		//loop through squares to check which node was clicked
		for (var j=0; j<board.length; j++){
			if (htmlBoard[j] === e.target) {
				//check if board index already has something; 
				if (board[j] == '') {
					board[j] = turn;
					//update board
					drawBoard();
					//switch turn
					switchTurn();
				}
			}
		}
	});
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

drawBoard();