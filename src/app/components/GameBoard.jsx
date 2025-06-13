"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from '../styles/GameBoard.module.scss';
import Cell from './Cell';
import Score from './Score';
import ResetButton from './ResetButton';
import BackButton from './BackButton';
import { useDispatch } from "react-redux";
import { increment } from "../features/counterSlice";

/**
 * board: array with length=9; initial filled with null; saves if field is empty or contains "X"|"O"
 * useState manages values and refreshes ui automatically
 * @returns {JSX.Element}
 * @constructor
 */
const GameBoard = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const dispatch = useDispatch();
    const [isGameOver, setIsGameOver] = useState(false);
    const router = useRouter();

  /**
   * tests if field is used, if true --> nothing happens
   * @param index
   * creates board-array, copies the actual state and fills the field with "X" or "O"
   * refreshes the board with setBoard(newBoard)
   * @type {any[][]}
   *
   */
  const handleCellClick = (index) => {
    if (board[index] || isGameOver) return;

    const newBoard= [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    /**
     * checks if someone has won and throws alert if "X" has won; increments the score; then resets the board
     * if nobody has won it changes the currentPlayer to the other player
     */
    if (checkWinner(newBoard, currentPlayer)) {

      alert(`Player ${currentPlayer} has won!`);
      dispatch(increment(currentPlayer));
      setIsGameOver(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  /**
   * creates new empty Array with empty fields and sets the currentPlayer back to "X"
   */
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setIsGameOver(false);
  };

  const changePage = () => {
    router.push("/");
  }

  /**
   * checks for every condition, if all three fields are used from the current player
   * .some() returns true if one condition matches
   * .every() decides for one condition if all three fields in board are used
   * @param board
   * @param player
   * @returns {boolean}
   */
  const checkWinner = (board, player) => {
    const winningConditions = [
      [0, 1, 2], //top row
      [3, 4, 5], //middle row
      [6, 7, 8], //bottom row
      [0, 3, 6], //left column
      [1, 4, 7], //middle column
      [2, 5, 8], //right column
      [0, 4, 8], //diagonal left top to right bottom
      [2, 4, 6], //diagonal right top to left bottom
    ];

    return winningConditions.some((condition) =>
      condition.every((index) => board[index] === player)
    );
  };

  /**
   * jsx template for tictactoe board
   * active player is highlighted
   * board.map() creates board with 9 fields
   * every cell is clickable and calls handleCellCLick(index)
   * if field is used "X" or "O" is placed
   * reset-button resets game board
   */
  return (
      <div>
        <div className={styles.scores}>
          <Score player="X" isActive={currentPlayer === "X"} />
          <Score player="O" isActive={currentPlayer === "O"} />
        </div>
        <div className={styles.board}>
          {board.map((cell, index) => (
              <Cell
                  key={index}
                  value={cell}
                  onClick={() => handleCellClick(index)}
              />
          ))}
        </div>
        <ResetButton onClick={resetBoard} />
        <BackButton onClick={changePage} label="Zurück zum Dashboard"/>
      </div>
  );
}
export default GameBoard;
