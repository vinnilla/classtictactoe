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
			//check winner
			checkWin();
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

function checkWin() {
	var winCombos = [
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,4,8],
		[2,4,6]
	];
	for (var i=0; i<winCombos.length; i++) {
		var winCombo = winCombos[i];
		if (board[winCombo[0]] == board[winCombo[1]] && board[winCombo[1]] == board[winCombo[2]] && board[winCombo[0]] !== '') {
			window.alert(turn + ' Wins!');
		}
	}
}

function refreshPage() {
	location.reload();
}

drawBoard();