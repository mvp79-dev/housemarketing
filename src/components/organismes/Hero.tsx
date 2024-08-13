import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '../atoms/Typography';
import useHeight from '../../hooks/useHeight';

import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useMediaQuery } from '@mui/material'
import { styled } from '@mui/material/styles'
import { isMobile } from 'react-device-detect'
import { FC, useState, useEffect } from 'react'
import { debounce } from 'lodash'
import { Opac } from '../atoms/Opac';
import ApplicationForm from './ApplicationForm';

interface HeroProps {
    bgSrcs: any[]
    selectedSrc?: number
    titles?: string[][]
    selectedTitle?: string[]
    children?: any
}

const ParallaxContainer = styled('div')<{ height?: number }>(({ height }) => ({
    height: height ? `${height}px` : '100vh',
    width: '100%',
    overflow: 'hidden'
}))

const ParallaxImage = styled('div')<{ height?: number }>(({ height }) => ({
    width: '100%',
    height: height ? `${height}px` : '100%',
    position: 'relative'
}))

const Hero: FC<HeroProps> = ({ ...props }) => {

    const height = useHeight()

    const isMobileQuery = useMediaQuery('(max-width: 650px)')

    const router = useRouter()

    const [selectedTab, setSelectedTab] = useState(router.pathname)
    const [openForm, setOpenForm] = useState<boolean>(false)

    useEffect(() => {
        setSelectedTab(router.pathname.slice(1))
    }, [router.pathname])

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = debounce(() => {
        setScrollY(window.scrollY);
    }, isMobile ? 6 : 2);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Stack
            height={isMobile ? `${height}px` : "100vh"}
            minHeight={isMobile ? `${height}px` : `25rem !important`}
            alignItems="center"
            position="relative"
        >
            <ParallaxContainer height={isMobile ? height : undefined}>
                <ParallaxImage height={isMobile ? height : undefined} style={{ position: isMobile ? 'absolute' : 'relative', transform: `translateY(${isMobile ? 0 : scrollY * 0.5}px)` }}>
                    {
                        props.bgSrcs?.map((src: any, index: number) =>
                            <Image
                                alt="background"
                                src={src}
                                priority
                                objectFit='cover'
                                placeholder='blur'
                                fill
                                style={{
                                    opacity: index === props.selectedSrc ? 1 : 0,
                                    transform: 'translate3d(0, 0, 0)',
                                    willChange: 'opacity',
                                    transition: 'opacity 0.5s ease',
                                    top: 0,
                                    objectPosition: index === 2 ? '100% 50%' : index === 0 ? '50% 25%' : ''
                                }}
                            />
                        )
                    }
                    <Opac />
                </ParallaxImage>
            </ParallaxContainer>
            {
                props.titles?.map((title: string[]) =>
                    <Stack position="absolute" bottom="3rem" right={isMobileQuery ? "" : "3rem"} alignItems={{xs: 'center', md: "flex-end"}}>
                      
                        {
                            (["architecture", 'visiting school'].includes(title[0]) && selectedTab === "architecture") ?
                            <Box border="1px solid" onClick={() => setOpenForm(true)} borderColor="white" p="1rem" px={"4rem"} width="fit-content" marginTop="2rem" style={{ cursor: 'pointer' }}>
                                <Typography variant="body2" color="white" lineHeight={1} fontWeight={300}>
                                    Apply Now
                                </Typography>
                            </Box>
                            :
                            title.map((t: string) =>
                                <Box key={t} style={{ overflow: "hidden" }}>
                                    <motion.div
                                        initial={{ y: '100%' }}
                                        animate={{ y: selectedTab === t || (['neuendorf', "house"].includes(t) && selectedTab === "") || (["architecture", 'visiting school'].includes(t) && selectedTab === "architecture") ? '0%' : "100%" }}
                                        transition={{ type: "spring", stiffness: 500, damping: 50 }}
                                    >
                                        <Typography color="white" variant={"h1"} fontWeight={100} align={isMobileQuery ? "center" : "right"} lineHeight={1} sx={{ fontVariant: 'all-small-caps', zIndex: 1 }}>
                                            {t}
                                        </Typography>
                                    </motion.div>
                                </Box>
                            )
                        }
                    </Stack>
                )
            }
            <ApplicationForm
                topic="Architecture Visiting School"
                open={openForm}
                setOpen={setOpenForm}
                bottomText={`Following
                    information: CV - Max 10 page portfolio with personal work (architectural, furniture and
                    product design, photography, landscape design) - 300 word cover letter`
                }
            />
        </Stack >
    )
}

export default Hero