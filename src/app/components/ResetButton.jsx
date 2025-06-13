import styles from '../styles/GameBoard.module.scss';

export default function ResetButton({ onClick }) {
    return (
        <button onClick={onClick} className={styles.resetButton}>
            Reset
        </button>
    );
}