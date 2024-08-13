import '@/styles/app.css'
import Head from "next/head"
import NProgress from "nprogress"
import localFont from 'next/font/local'
import GlobalLayout from '@/layouts/global'
import CssBaseline from '@mui/material/CssBaseline';

import { AppProps } from 'next/app';
import { darkTheme, lightTheme } from '../styles/theme';
import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { ParallaxProvider } from 'react-scroll-parallax';
import Cookies from 'js-cookie';

const myFont = localFont({
    src: [
        {
            path: '../fonts/AvenirNext-UltraLight.woff2',
            weight: '200',
        },
        {
            path: '../fonts/AvenirNext-Regular.woff2',
            weight: '300',
        },
        {
            path: '../fonts/AvenirNext-Medium.woff2',
            weight: '400',
        },
        {
            path: '../fonts/Avenir-Condensed-Regular.woff2',
            weight: '500',
        },
    ],
})

export default function App({ Component, pageProps }: AppProps) {

    const router = useRouter()

    const [theme, setTheme] = useState<'light' | 'dark'>(
        (Cookies.get('theme') as ('dark' | 'light')) || 'light'
    )

    const handleSelectTheme = (themeName: 'dark' | 'light') => {
        setTheme(themeName)
        Cookies.set('theme', themeName, { expires: 365 });
    }

    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);

        return () => {
            // Make sure to remove the event handler on unmount!
            router.events.off("routeChangeStart", handleRouteStart);
            router.events.off("routeChangeComplete", handleRouteDone);
            router.events.off("routeChangeError", handleRouteDone);
        };
    }, [router]);

    const getLayout = (Component as any).getLayout || ((page: any) => page);

    return (
        <>
            <style jsx global>

                {`
        :root {
          --font-base: ${myFont.style.fontFamily};
        }
        body {
            font-family: var(--font-base);
          }
      `}</style>
            <Head>

            </Head>
            <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                <ParallaxProvider>
                    <GlobalLayout selectedTheme={theme} handleSelectTheme={handleSelectTheme}>
                        <CssBaseline />
                        {getLayout(<Component {...pageProps} />)}
                    </GlobalLayout>
                </ParallaxProvider>
            </ThemeProvider>
        </>
    );
}
