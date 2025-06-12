"use client";

import { useState } from "react";
import styles from '../styles/GameBoard.module.scss';

const GameBoard = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);

  const handleCellClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    if (checkWinner(newBoard, currentPlayer)) {
      alert(`Player ${currentPlayer} has won!`);
      if (currentPlayer === "X") setScoreX(scoreX + 1);
      else setScoreO(scoreO + 1);
      resetBoard();
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
  };

  const checkWinner = (board, player) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winningConditions.some((condition) =>
      condition.every((index) => board[index] === player)
    );
  };

  return (
    <div>
      <div className={styles.scores}>
        <div className={`${styles.score} ${currentPlayer === "X" ? styles.active : ""}`}>
          Player X: {scoreX}
        </div>
        <div className={`${styles.score} ${currentPlayer === "O" ? styles.active : ""}`}>
          Player O: {scoreO}
        </div>
      </div>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <div
            key={index}
            className={styles.cell}
            onClick={() => handleCellClick(index)}
          >
            {cell && <img src={`/${cell.toLowerCase()}-solid.svg`} alt={cell} />}
          </div>
        ))}
      </div>
      <button onClick={resetBoard} className={styles.resetButton}>
        Reset
      </button>
    </div>
  );
};

export default GameBoard;
