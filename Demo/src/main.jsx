import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({ value, onClick }) {
  return (
    <div className="square" style={squareStyle} onClick={onClick}>
      {value}
    </div>
  );
}

function Board() {
  const[board,setBoard] = useState(Array(9).fill(null));
  const[nextPlayer,setNextPlayer] = useState('X');
  const[winner,setWinner] = useState(null);
  const[isGameOver,setIsGameOver] = useState(false);

  function handleClick(index){
    if(isGameOver || board[index]){
      return;
    }

    const newBoard = [...board];
    newBoard[index] = nextPlayer;

    setBoard(newBoard);
    setNextPlayer(nextPlayer==='X' ? '0' : 'X');

    const newWinner = calculateWinner(newBoard);
    if(newWinner){
      setWinner(newWinner);
      setIsGameOver(true);
    }else{
      if(newBoard.every((square)=>square !== null)) {
        setWinner('Draw');
        setIsGameOver(true);
      }
    }
  }
  function resetBoard(){
    setBoard(Array(9).fill(null));
    setNextPlayer('X');
    setWinner(null);
    setIsGameOver(false);
  }

  function calculateWinner(board){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i=0; i<lines.length; i++){
      const[a,b,c] = lines[i];
      if(board[a] && board[a] === board[b] && board[a]===board[c]){
        return board[a];
      }
    }
    return null;
  }

  const renderSquare = (index) =>{
    return <Square value={board[index]} onClick={()=>handleClick(index)} />
  };


  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>X</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>None</span></div>
      <button style={buttonStyle} onClick={resetBoard}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Game />);