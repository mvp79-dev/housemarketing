import React from 'react'
import Box from '@mui/material/Box'
import Footer from '@/components/organismes/Footer'
import Navbar from '../components/organismes/NavBar'
import CookieConsent from '@/components/organismes/CookieConsent'
import GoogleAnalytics from '@/components/molecules/GoogleAnalytics'

import { useRouter } from "next/router"
import { useMediaQuery, useTheme } from '@mui/material'
import LoadingPage from '@/components/organismes/LoadingPage'

const GlobalLayout = ({ children, selectedTheme, handleSelectTheme }: { children: any, selectedTheme: 'light' | 'dark', handleSelectTheme: (input: 'dark' | 'light') => void }) => {

    const theme = useTheme()
    const router = useRouter()
    const isTablette = useMediaQuery('(max-width: 950px')

    const trackingId = 'G-77Q2T9GY85';

    const [remove, setRemove] = React.useState<boolean>(false)

    React.useEffect(() => {
        setTimeout(() => {
            setRemove(true)
        }, 6000)
    }, [])

    return (
        <>
            <Box display="flex" justifyContent="center" width="100%" >
                <CookieConsent trackingId={trackingId} />
                <GoogleAnalytics trackingId={trackingId} />
                <Box width="100%" style={{ backgroundColor: theme.palette.background.default }} >
                    <Navbar />
                    <Box mt={['/cookie', '/imprint', '/privacy'].includes(router.pathname) ? 0 : isTablette ? "-100px" : "-125px"} zIndex={11} position="relative">
                        {children}
                    </Box>
                    <Footer selectedTheme={selectedTheme} handleSelectTheme={handleSelectTheme} />
                </Box>
            </Box>

            <Box position="fixed" left="0" top="0" zIndex={200} height={remove ? "0vh" : "100vh"} sx={{ transition: 'height 0.2s ease' }}>
                <LoadingPage remove={remove} />
            </Box>
        </>
    );
};

export default GlobalLayout;