import styles from '../styles/GameBoard.module.scss';

export default function Score({ player, score, isActive }) {
    return (
        <div className={`${styles.score} ${isActive ? styles.active : ''}`}>
            Player {player}: {score}
        </div>
    );
}