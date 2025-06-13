'use client'

import Head from 'next/head';
import {useEffect} from "react";

export default function Impressum() {
    useEffect(() => {
        document.title = "Impressum";
    }, []);
    return (
        <>
            <Head>
                <title>Impressum | First Next App</title>
                <meta name="description" content="Impressum der First Next App" />
            </Head>
            <main style={{ padding: "2rem" }}>
                <h1>Impressum</h1>
                <p>
                    Max Mustermensch<br />
                    Musterstraße 1<br />
                    12345 Musterstadt<br />
                    Deutschland<br />
                    <br />
                    E-Mail: max@mustermensch.de<br />
                    Telefon: 01234 / 567890
                </p>
                <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Max Mustermensch
                </p>
            </main>
        </>
    );
}