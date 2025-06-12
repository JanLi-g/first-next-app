import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                <li>
                    <Link href="/tic-tac-toe">Tic Tac Toe</Link>
                </li>
                {/* Weitere Links zu anderen Unterseiten */}
            </ul>
        </div>
    );
}