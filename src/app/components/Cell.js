import styles from '../styles/GameBoard.module.scss';

export default function Cell({ value, onClick }) {
    return (
        <div className={styles.cell} onClick={onClick}>
            {value && <img src={`/${value.toLowerCase()}-solid.svg`} alt={value} />}
        </div>
    );
}