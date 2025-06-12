import './styles/GameBoard.module.scss'
import GameBoard from "./components/GameBoard";

export default function Page() {
    return (
        <div className="wrapper">
            <h1>Tic Tac Toe</h1>
            <div className="score">
                <div className="scoreX">
                    Player X: <span id="scoreXId">0</span>
                </div>
                <div className="scoreO">
                    Player O: <span id="scoreOId">0</span>
                </div>
            </div>

            <div className="board" id="board">
                <GameBoard />
            </div>

            <button className="reset-b">Reset</button>
        </div>
    )
}