/**
 *
 * @param children takes children-prop which contains secondary components
 * @returns {JSX.Element}
 * @constructor
 * RootLayout function renders inside the html framework
 * everything passed as children, is shown in <body>
 */
export default function RootLayout({ children }) {
    return (
        <html lang="de">
        <body>
        {children}
        </body>
        </html>
    );
}