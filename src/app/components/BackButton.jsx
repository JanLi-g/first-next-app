"use client";
import { useRouter } from "next/navigation";
import styles from '../styles/GameBoard.module.scss';

export default function BackButton({ onClick, label = "Zurück" }) {
    const router = useRouter();
    return (
        <button className={styles.resetButton} onClick={onClick ? onClick : () => router.back()}>
            {label}
        </button>
    );
}