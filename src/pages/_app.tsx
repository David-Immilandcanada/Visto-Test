// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { CountryProvider } from '../context/CountryContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CountryProvider>
            <Component {...pageProps} />
        </CountryProvider>
    );
}

export default MyApp;
