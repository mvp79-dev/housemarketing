import React from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Hero from '@/components/organismes/Hero'

import { useRouter } from "next/router"
import { useEffect, useState } from 'react'
import { Divider, Stack, styled, useTheme, useMediaQuery } from '@mui/material'

import theHouse from '../assets/the-house.png'
import booking from '../assets/booking.png'
import location from '../assets/location.jpg'
import architecture from '../assets/architecture.jpg'

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabsCenter = styled(Tabs)(({ theme }) => ({
    "& .indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
        "& > span": {
            maxWidth: '15rem',
            width: "100%",
            backgroundColor: theme.palette.secondary.main
        }
    },
    "& .flexContainer": {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
}))

const StyledTab = styled(Tab)(({ theme }) => ({
    textTransform: 'none',
    fontWeight: 200,
    fontVariant: 'all-small-caps',
    fontSize: '32px',
    paddingBottom: '1.25rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        paddingBottom: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
        paddingBottom: '1rem',
    }
}))

const MainLayout = ({ children }: { children: any }) => {

    const theme = useTheme()
    const router = useRouter()

    const isMobile = useMediaQuery('(max-width: 650px)')
    const [title, setTitle] = useState<string[]>()

    const [value, setValue] = React.useState(router.pathname === '/' ? 0 : router.pathname === '/location' ? 1 : router.pathname === '/booking' ? 2 : 3);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        router.push({ pathname: newValue === 0 ? '/' : newValue === 1 ? '/location' : newValue === 2 ? '/booking' : '/architecture' }, undefined, { scroll: false })
        setValue(newValue);
    };

    useEffect(() => {
        if (router.pathname === '/the_house' || router.pathname === '/') {
            setTitle(["neuendorf", "house"])
            return setValue(0)
        }
        if (router.pathname === '/location') {
            setTitle(["location"])
            return setValue(1)
        }
        if (router.pathname === '/booking') {
            setTitle(["booking"])
            return setValue(2)
        }
        if (router.pathname === '/architecture') {
            setTitle(["architecture", 'visiting school'])
            return setValue(3)
        }
    }, [router.pathname])

    return (
        <>
            <Hero bgSrcs={[theHouse, location, booking, architecture]} selectedSrc={value} titles={[["neuendorf", "house"], ["location"], ["booking"], ["architecture", 'visiting school']]} selectedTitle={title} />
            <Box width="100%" sx={{ backgroundColor: theme.palette.background.default }} zIndex={10} position="relative">
                <Stack maxWidth={'1440px'} margin="0 auto"
                    pl={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                    pr={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                    pt={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                >
                    {
                        value !== 3 &&
                        <Box width={isMobile ? "100vw" : "100%"} alignSelf="center" mb={{ xs: "3rem", sm: "4rem", md: "6rem" }}>
                            <TabsCenter value={value} onChange={handleChange} classes={{
                                flexContainer: "flexContainer",
                                indicator: "indicator"
                            }} variant="fullWidth" aria-label="presentation tabs" TabIndicatorProps={{ children: <span /> }} centered>
                                <StyledTab label="the house" {...a11yProps(0)} disableRipple />
                                <StyledTab label="location" {...a11yProps(1)} disableRipple />
                                <StyledTab label="booking" {...a11yProps(2)} disableRipple />
                            </TabsCenter>
                            <Divider sx={{ borderColor: theme.palette.secondary.light, transform: 'translateY(-150%)' }} />
                        </Box>
                    }
                    {children}
                </Stack>
            </Box>
        </>
    );
};

export default MainLayout;

