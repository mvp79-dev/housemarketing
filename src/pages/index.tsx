import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box'
import MainLayout from '@/layouts/main'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@/components/atoms/Typography';

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@mui/material'
import { Parallax } from 'react-scroll-parallax'
import { styled, useTheme } from '@mui/material/styles';
import { Accordion, AccordionDetails, AccordionSummary } from '@/components/organismes/Accordion';
import Gallery from '@/components/organismes/Gallery'


const BoxStyled = styled(Box)(() => ({
    overflow: 'hidden',
    cursor: 'pointer',
    'img': {
        transform: 'scale(1.1)',
        transition: 'transform 0.24s ease'
    },
    ':hover': {
        'img': {
            transform: 'scale(1.07)',
        }
    }
}))

const Home = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width: 650px)')

    const [openGallery, setOpenGallery] = useState<boolean>(false)
    const [preSelectedImg, setPreselectedImg] = useState<string>()
    const [expandHouseAndFeatures, setExpandeHouseAndFeatures] = useState<boolean>(false)

    const images = [
        '/img/ext1/1.jpg',
        '/img/ext1/2.jpg',
        '/img/ext1/3.png',
        '/img/ext1/4.jpg',
        '/img/ext1/5.jpg',
        '/img/ext2/1.png',
        '/img/ext2/2.png',
        '/img/ext2/3.png',
        '/img/ext2/4.png',
        '/img/ext2/5.png',
        '/img/int1/1.png',
        '/img/int1/2.png',
        '/img/int1/3.jpg',
        '/img/int1/4.jpeg',
        '/img/int1/5.png',
        '/img/int1/6.webp',
        '/img/int2/1.png',
        '/img/int2/2.png',
        '/img/int2/3.png',
        '/img/int2/4.png',
        '/img/int2/5.jpeg',
    ]

    const handleOpenGallery = (index: number) => {
        setPreselectedImg(images[index - 1])
        setOpenGallery(true)
        document.body.style.overflow = 'hidden'
    }

    const handleCloseGallery = () => {
        setOpenGallery(false)
        setPreselectedImg(undefined)
        document.body.style.overflow = 'auto'
    }

    return (
        <>
            <Head>
                <title>Neuendorf House | Home</title>
                <meta name="description" content="The Neuendorf House, designed by renowned architects John Pawson and Claudio Silvestrin, stands as a testament to the impact of simplicity and purity in architectural form." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack spacing={8}>
                <Typography fontWeight={300} color="text.secondary" align={isMobile ? "inherit" : "justify"}>
                    The Neuendorf House, designed by renowned architects John Pawson and Claudio Silvestrin, stands as a testament to the impact of simplicity and purity in architectural form. Situated on the island of Majorca, this distinctive residence embodies a minimalist aesthetic that allows the natural beauty of its surroundings to take center stage. With a focus on clean lines, precise proportions, and a restrained use of materials, the Neuendorf House achieves a sense of silent elegance that is both timeless and contemporary. Through the artful manipulation of light, space, and texture, Pawson and Silvestrin have created a harmonious and immersive environment that invites contemplation and introspection. The result is a masterpiece of architecture that inspires a deep appreciation for the inherent beauty and power of simplicity.
                </Typography>
                <Stack spacing={6} width="100%" marginBottom={"2rem !important"}>
                    <Accordion expanded={expandHouseAndFeatures} onChange={() => setExpandeHouseAndFeatures(!expandHouseAndFeatures)}>
                        <AccordionSummary aria-controls="house-features-content" id="house-features-content">
                            <Typography fontWeight={500} fontSize="30px" sx={{ fontVariant: 'all-small-caps' }}>
                                house features
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 8, md: 16 }} width="100%">
                                <Stack spacing={8} width={{ xs: '100%', md: "45%" }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Stack spacing={8}>
                                            <Stack spacing={2}>
                                                <Typography fontWeight={400} >
                                                    Bedrooms
                                                </Typography>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    5
                                                </Typography>
                                            </Stack>
                                            <Stack spacing={2}>
                                                <Typography fontWeight={400} >
                                                    Guests
                                                </Typography>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    11 max.
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack spacing={8} width="50%">
                                            <Stack spacing={2}>
                                                <Typography fontWeight={400}>
                                                    Bathrooms
                                                </Typography>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    4 + 1 Guest Bathroom
                                                </Typography>
                                            </Stack>
                                            <Stack spacing={2}>
                                                <Typography fontWeight={400}>
                                                    Air Condition
                                                </Typography>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    5 in all Bedrooms
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Typography fontWeight={400}>
                                            Kitchen
                                        </Typography>
                                        <ul style={{ paddingLeft: '1rem' }}>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    State-of-the-art kitchen with Gaggenau and Miele appliances
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    [including wine cooler, dishwasher, washing machine and dryer]
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    Drinking water mineralization and purification
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    Napoleon barbecue
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Stack>
                                </Stack>
                                <Stack spacing={8} width={{ xs: '100%', md: "55%" }}>
                                    <Stack spacing={2}>
                                        <Typography fontWeight={400}>
                                            Technics
                                        </Typography>
                                        <Typography fontWeight={300} color="text.secondary">
                                            Wifi, TV, movie beamer and music system, underfloor heating
                                        </Typography>
                                    </Stack>
                                    <Stack spacing={2}>
                                        <Typography fontWeight={400}>
                                            High-Lights
                                        </Typography>
                                        <ul style={{ paddingLeft: '1rem' }}>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    Rooftop terrace with sea-view
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    Two salt-water pools, one with heatable jacuzzi
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    Clay tennis court
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    Cot, highchair, baby-changing station and mini sun-lounge available
                                                </Typography>
                                            </li>
                                            <li>
                                                <Typography fontWeight={300} color="text.secondary">
                                                    Organic vegetable garden
                                                </Typography>
                                            </li>
                                        </ul>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                </Stack>

                <Stack spacing={20}>
                    <Stack direction={{ xs: "column-reverse", md: "row" }} height={{ xs: '550px', sm: '700px', md: '480px', lg: '580px', xl: '600px' }} spacing={6}>
                        <Stack spacing={2} height="100%" width={{ xs: "100%", md: "65%" }}>
                            <Stack direction="row" spacing={2} height="65%">
                                <BoxStyled onClick={() => handleOpenGallery(1)} width="65%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-6} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext - 1"
                                            src={'/img/ext1/1.jpg'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(2)} width="35%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-3} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext - 2"
                                            src={'/img/ext1/2.jpg'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                            <Stack direction="row" spacing={2} height="35%">
                                <BoxStyled onClick={() => handleOpenGallery(3)} width="33%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-3} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext - 3"
                                            src={'/img/ext1/3.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(4)} width="20%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-2} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext - 4"
                                            src={'/img/ext1/4.jpg'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(5)} width="47%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-3} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext - 5"
                                            src={'/img/ext1/5.jpg'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                        </Stack>
                        <Box display='flex' alignItems='center' justifyContent={{ xs: 'start', md: 'center' }} width={{ xs: "100%", md: "35%" }}>
                            <Stack overflow="hidden">
                                <motion.div
                                    initial={{ y: "-100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                        the
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Stack direction="row" spacing={2} alignItems='center'>
                                        <Divider orientation="horizontal" sx={{ borderColor: theme.palette.secondary.light, width: { xs: '1.5rem', sm: '2.1rem', md: '2.4rem', lg: '3rem' } }} />
                                        <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                            exterior I
                                        </Typography>
                                    </Stack>
                                </motion.div>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack direction={{ xs: "column-reverse", md: "row" }} height={{ xs: '550px', sm: '700px', md: '480px', lg: '580px', xl: '600px' }} spacing={6}>
                        <Stack spacing={2} height="100%" width={{ xs: "100%", md: "65%" }}>
                            <Stack direction="row" spacing={2} height="65%">
                                <BoxStyled onClick={() => handleOpenGallery(6)} width="65%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-4} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext2 - 1"
                                            src={'/img/ext2/1.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(7)} width="35%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-5} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext2 - 2"
                                            key="ext2 - 2"
                                            src={'/img/ext2/2.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                            <Stack direction="row" spacing={2} height="35%">
                                <BoxStyled onClick={() => handleOpenGallery(8)} width="33%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-3} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext2 - 3"
                                            key="ext2 - 3"
                                            src={'/img/ext2/3.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(9)} width="20%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-2} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext2 - 4"
                                            key="ext2 - 4"
                                            src={'/img/ext2/4.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(10)} width="47%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-4} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="ext2 - 5"
                                            key="ext2 - 5"
                                            src={'/img/ext2/5.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                        </Stack>
                        <Box display='flex' alignItems='center' justifyContent={{ xs: 'start', md: 'center' }} width={{ xs: "100%", md: "35%" }}>
                            <Stack overflow="hidden">
                                <motion.div
                                    initial={{ y: "-100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                        the
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Stack direction="row" spacing={2} alignItems='center'>
                                        <Divider orientation="horizontal" sx={{ borderColor: theme.palette.secondary.light, width: { xs: '1.5rem', sm: '2.1rem', md: '2.4rem', lg: '3rem' } }} />
                                        <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                            exterior II
                                        </Typography>
                                    </Stack>
                                </motion.div>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack direction={{ xs: "column-reverse", md: "row" }} height={{ xs: '550px', sm: '700px', md: '480px', lg: '580px', xl: '600px' }} spacing={6}>
                        <Stack spacing={2} height="100%" width={{ xs: "100%", md: "65%" }}>
                            <Stack direction="row" spacing={2} height="65%">
                                <BoxStyled onClick={() => handleOpenGallery(11)} width="65%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-7} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int1 - 1"
                                            key="int1 - 1"
                                            src={'/img/int1/1.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(12)} width="35%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-4} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int1 - 2"
                                            key="int1 - 2"
                                            src={'/img/int1/2.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                            <Stack direction="row" spacing={2} height="35%">
                                <BoxStyled onClick={() => handleOpenGallery(13)} width="33%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-6} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int1 - 3"
                                            key="int1 - 3"
                                            src={'/img/int1/3.jpg'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(14)} width="15%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-3} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int1 - 4"
                                            key="int1 - 4"
                                            src={'/img/int1/4.jpeg'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(15)} width="15%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-2} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int1 - 5"
                                            key="int1 - 5"
                                            src={'/img/int1/5.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(16)} width="34%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-4} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int1 - 6"
                                            key="int1 - 6"
                                            src={'/img/int1/6.webp'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                        </Stack>
                        <Box display='flex' alignItems='center' justifyContent={{ xs: 'start', md: 'center' }} width={{ xs: "100%", md: "35%" }}>
                            <Stack overflow="hidden">
                                <motion.div
                                    initial={{ y: "-100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                        the
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Stack direction="row" spacing={2} alignItems='center'>
                                        <Divider orientation="horizontal" sx={{ borderColor: theme.palette.secondary.light, width: { xs: '1.5rem', sm: '2.1rem', md: '2.4rem', lg: '3rem' } }} />
                                        <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                            interior I
                                        </Typography>
                                    </Stack>
                                </motion.div>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack direction={{ xs: "column-reverse", md: "row" }} height={{ xs: '550px', sm: '700px', md: '480px', lg: '580px', xl: '600px' }} spacing={6}>
                        <Stack spacing={2} height="100%" width={{ xs: "100%", md: "65%" }}>
                            <Stack direction="row" spacing={2} height="65%">
                                <BoxStyled onClick={() => handleOpenGallery(17)} width="65%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-3} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int2 - 1"
                                            src={'/img/int2/1.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(18)} width="35%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-6} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int2 - 2"
                                            src={'/img/int2/2.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                            <Stack direction="row" spacing={2} height="35%">
                                <BoxStyled onClick={() => handleOpenGallery(19)} width="33%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-2} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int2 - 3"
                                            src={'/img/int2/3.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(20)} width="20%" position="relative">
                                    <Parallax shouldAlwaysCompleteAnimation speed={-5} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int2 - 4"
                                            src={'/img/int2/4.png'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                                <BoxStyled onClick={() => handleOpenGallery(21)} width="47%" position="relative" >
                                    <Parallax shouldAlwaysCompleteAnimation speed={-3} style={{ height: '100%', width: '100%' }}>
                                        <Image
                                            alt="int2 - 5"
                                            src={'/img/int2/5.jpeg'}
                                            priority
                                            objectFit='cover'
                                            fill
                                        />
                                    </Parallax>
                                </BoxStyled>
                            </Stack>
                        </Stack>
                        <Box display='flex' alignItems='center' justifyContent={{ xs: 'start', md: 'center' }} width={{ xs: "100%", md: "35%" }}>
                            <Stack overflow="hidden">
                                <motion.div
                                    initial={{ y: "-100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                        the
                                    </Typography>
                                </motion.div>
                                <motion.div
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ type: "spring", stiffness: 500, damping: 50, delay: 0.24 }}
                                >
                                    <Stack direction="row" spacing={2} alignItems='center'>
                                        <Divider orientation="horizontal" sx={{ borderColor: theme.palette.secondary.light, width: { xs: '1.5rem', sm: '2.1rem', md: '2.4rem', lg: '3rem' } }} />
                                        <Typography fontWeight={200} fontSize={{ xs: '42px', sm: '50px', md: '54px', lg: "64px" }} lineHeight={1} color="text.secondary" sx={{ fontVariant: 'all-small-caps' }}>
                                            Interior II
                                        </Typography>
                                    </Stack>
                                </motion.div>
                            </Stack>
                        </Box>
                    </Stack>

                </Stack >

            </Stack >
            {openGallery && <Gallery pSelectedMedia={preSelectedImg ?? ''} mediaList={images} closeGallery={() => handleCloseGallery()} />}
        </>
    )
}

Home.getLayout = (page: any) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Home