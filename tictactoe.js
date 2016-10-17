var board= new Array(9);
function reset(){
  document.getElementById("player").value= 1;
  for(i=0; i<board.length;i++){
    document.getElementById("button"+i).value = "";
    board[i] = undefined;
  }
}

function chooseMarker(buttonNumber){
  var player = parseInt(document.getElementById("player").value);
  button = document.getElementById("button"+buttonNumber);
  if(player % 2 == 0 && board[buttonNumber] == undefined){
    button.value = ("O");
    board[buttonNumber] = player;
    if(checkWin(player)){
      reset();
    }
    player-=1;
  }
  else if(player % 2 == 1 && board[buttonNumber] == undefined){
    button.value = ("X");
    board[buttonNumber] = player;
    if(checkWin(player)){
      reset();
    }
    player+=1;
  }
  document.getElementById("player").value = player;
}

function checkWin(player){
  if(board[0] == board[1] && board[2] == board[1] && (board[1] == 1 || board[1] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else if(board[3] == board[4] && board[5] == board[4] && (board[4] == 1 || board[4] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else if(board[6] == board[7] && board[8] == board[7] && (board[7] == 1 || board[7] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else if(board[0] == board[3] && board[6] == board[3] && (board[3] == 1 || board[3] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else if(board[1] == board[4] && board[7] == board[4] && (board[4] == 1 || board[4] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else if(board[2] == board[5] && board[8] == board[5] && (board[5] == 1 || board[5] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else if(board[0] == board[4] && board[8] == board[4] && (board[4] == 1 || board[4] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else if(board[2] == board[4] && board[6] == board[4] && (board[4] == 1 || board[4] == 2)){
    window.alert("Player " + player + " wins!");
    return true;
  }
  else{
    return false;
  }
}
