import React, { FC } from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box'
import loadingImg from '../../assets/loading.jpeg'
import useMediaQuery from '@mui/material/useMediaQuery'

import { styled } from '@mui/material/styles'

const Opac = styled('div')<{ remove: boolean }>(({ remove }) => ({
    background: 'black',
    opacity: remove ? 0.99 : 0.3,
    height: '100%',
    width: '50%',
    transition: 'opacity 0.64s ease-in, width 0.75s ease-in-out',
    transform: 'translate3d(0, 0, 0)',
    willChange: 'opacity, width',
}))

interface LoadingPageInterface {
    remove: boolean
}


const LoadingPage: FC<LoadingPageInterface> = ({ ...props }) => {

    const isMobileQuery = useMediaQuery('(max-width: 650px)')

    const [removeFullScreen, setRemoveFullScreen] = React.useState<boolean>(false)
    const [removeLogo, setRemoveLogo] = React.useState<boolean>(false)
    const [openDoors, setOpenDoors] = React.useState<boolean>(false)

    React.useEffect(() => {
        if (props.remove) {
            setTimeout(() => {
                setRemoveLogo(true)
            }, 750)
            setTimeout(() => {
                setOpenDoors(true)
            }, 950)
            setTimeout(() => {
                setRemoveFullScreen(true)
            }, 1650)
        }
    }, [props.remove])

    return (
        <Box
            height={removeFullScreen ? "0vh" : "100vh"}
            width="100vw"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            {!openDoors &&
                <Image
                    alt="bg"
                    priority
                    objectFit='cover'
                    fill
                    placeholder='blur'
                    src={loadingImg}
                    objectPosition='bottom'
                />
            }
            <Opac remove={props.remove} sx={{
                position: 'absolute', top: 0, left: 0,
                width: openDoors ? '0%' : '60%'
            }} />
            <Opac remove={props.remove} sx={{
                position: 'absolute', top: 0, right: 0,
                width: openDoors ? '0%' : '40%',
            }} />
            {/* <Opac remove={props.remove} /> */}
            {
                !removeFullScreen &&
                <Box height={removeFullScreen ? '0px' : isMobileQuery ? "300px" : "400px"}
                    width={isMobileQuery ? "300px" : "400px"}
                    position="absolute"
                    sx={{
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'opacity',
                        transition: 'opacity 0.2s ease',
                        opacity: removeLogo ? 0 : 1
                    }}
                >
                    <object style={{ filter: 'invert(1)' }} type="image/svg+xml" data='/img/animated_logo_2.svg' >animation</object>
                </Box>
            }
        </Box>
    )
}

export default LoadingPage