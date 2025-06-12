import styles from './styles/GameBoard.module.scss';
import GameBoard from "./components/GameBoard";

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