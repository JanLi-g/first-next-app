import styles from '../styles/GameBoard.module.scss';
import GameBoard from "../components/GameBoard";

/**
 * component Page is a react function which displays main UI
 * imports GameBoard component for the game board
 * GameBoard element renders the game board inside a styled container
 * @returns {JSX.Element}
 * @constructor
 */
export default function Page() {
    return (
        <div className={styles.wrapper}>
            <h1>Tic Tac Toe</h1>
            <div className={styles.score}>
                <div className={styles.scoreX}>
                    Player X: <span id="scoreXId">0</span>
                </div>
                <div className={styles.scoreO}>
                    Player O: <span id="scoreOId">0</span>
                </div>
            </div>

            <div className={styles.board} id="board">
                <GameBoard />
            </div>
        </div>
    )
}