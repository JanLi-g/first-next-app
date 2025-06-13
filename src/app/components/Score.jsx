import styles from '../styles/GameBoard.module.scss';
import { useSelector } from "react-redux";

export default function Score({ player, isActive }) {
    const score = useSelector(state => state.counter[player]);
    return (
        <div className={`${styles.score} ${isActive ? styles.active : ''}`}>
            Player {player}: {score}
        </div>
    );
}