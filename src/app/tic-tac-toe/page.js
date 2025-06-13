'use client'

import Head from 'next/head';
import styles from '../styles/GameBoard.module.scss';
import GameBoard from "../components/GameBoard";
import {useEffect} from "react";

/**
 * component Page is a react function which displays main UI
 * imports GameBoard component for the game board
 * GameBoard element renders the game board inside a styled container
 * @returns {JSX.Element}
 * @constructor
 */
export default function Page() {
    useEffect(() => {
        document.title = "Tic-Tac-Toe";
    }, []);
    return (
        <>
            <Head>
                <title>Tic Tac Toe | First Next App</title>
                <meta name="description" content="Spiele Tic Tac Toe auf der First Next App" />
            </Head>
            <div className={styles.wrapper}>
                <h1>Tic Tac Toe</h1>
                <div className={styles.board} id="board">
                    <GameBoard />
                </div>
            </div>
        </>
    )
}