'use client'

import Head from 'next/head';
import Link from 'next/link';
import {useEffect} from "react";

export default function Page() {
    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <div>
                <h1>Dashboard</h1>
                <ul>
                    <li>
                        <Link href="/tic-tac-toe">Tic Tac Toe</Link>
                    </li>
                    <li>
                        <Link href="/impressum">Impressum</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
