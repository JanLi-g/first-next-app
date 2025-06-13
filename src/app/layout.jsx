import ReduxProvider from './reduxProvider';

/**
 *
 * @param children takes children-prop which contains secondary components
 * @returns {JSX.Element}
 * @constructor
 * RootLayout function renders inside the html framework
 * everything passed as children, is shown in <body>
 */
export const metadata = {
    title: "Tic-Tac-Toe",
    description: "Tic-Tac-Toe with next.js",
    icons: {
        icon: "/favicon.ico",

    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <body>
        <ReduxProvider>
            {children}
        </ReduxProvider>
        </body>
        </html>
    );
}
