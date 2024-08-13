import Image from "next/image"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "../atoms/Typography"

import { Divider } from "@mui/material"
import { styled } from "@mui/material/styles"
import { useState } from "react"
import { RxCross1 } from "react-icons/rx"
import { motion } from "framer-motion"

const Wrapper = styled(motion.div)(() => ({
    top: 0,
    left: 0,
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    transition: 'backdrop-filter 0.24s ease-in-out, -webkit-backdrop-filter 0.24s ease-in-out',
    backgroundColor: '#0e0e0e30',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 11
}))

const Content = styled(motion.div)(() => ({
    display: 'flex',
    maxHeight: '80%',
    maxWidth: '80%',
    height: '100%',
    width: '100%',
    position: 'relative'
}))

const GalleryCount = styled(Stack)(() => ({
    position: 'absolute',
    alignItems: 'center',
    bottom: '2rem'
}))

const ImageSelectorLeft = styled(Box)(() => ({
    position: 'absolute',
    height: '100vh',
    width: '50%',
    top: 0,
    left: 0
}))

const ImageSelectorRight = styled(Box)(() => ({
    position: 'absolute',
    height: '100vh',
    width: '50%',
    top: 0,
    right: 0
}))

const CloseWrapper = styled(Box)(() => ({
    position: 'absolute',
    top: '2rem',
    right: '2rem',
    cursor: 'pointer',
    alignItems: 'end',
    display: 'flex'
}))

const Gallery = ({ pSelectedMedia, mediaList, closeGallery }: { pSelectedMedia: string, mediaList: string[], closeGallery: () => void }) => {

    const [selectedIndex, setSelectedIndex] = useState<number>(1)
    const [selectedMedia, setSelectedMedia] = useState<any>(pSelectedMedia)
    const [newSelectedMedia, setNewSelectedMedia] = useState<any>(pSelectedMedia)

    const [willClose, setWillClose] = useState<boolean>(false)

    const handleSelectMedia = (index: number) => {
        setSelectedIndex(selectedIndex + 1)
        setSelectedMedia(newSelectedMedia)
        if (index < 0) return setNewSelectedMedia(mediaList[mediaList.length - 1])
        if (index >= mediaList.length) return setNewSelectedMedia(mediaList[0])
        setNewSelectedMedia(mediaList[index])
    }

    const handleClose = () => {
        setWillClose(true)
        setTimeout(() => {
            closeGallery()
        }, 680)
    }

    return (
        <Wrapper className={'blur'}
            initial={{ opacity: 0 }}
            animate={{ opacity: willClose ? 0 : 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
        >
            <Content
                initial={{ opacity: 1 }}
                animate={{ opacity: willClose ? 0 : 1 }}
                transition={{ duration: 0.34 }}
            >
                <Image
                    alt={selectedMedia?.title}
                    src={selectedIndex % 2 === 0 ? newSelectedMedia : selectedMedia}
                    fill
                    style={{ objectFit: 'contain', opacity: selectedIndex % 2 === 0 ? 1 : 0, transition: 'opacity 0.34s ease-in-out' }}
                />
                <Image
                    alt={selectedMedia?.title}
                    src={selectedIndex % 2 === 0 ? selectedMedia : newSelectedMedia}
                    fill
                    style={{ objectFit: 'contain', opacity: selectedIndex % 2 === 0 ? 0 : 1, transition: 'opacity 0.34s ease-in-out' }}
                />
            </Content>
            <GalleryCount direction="row" spacing={1.5}>
                <Typography variant="body1" color="white" fontWeight={400}>
                    {mediaList.indexOf(newSelectedMedia) + 1}
                </Typography>
                <Divider orientation="vertical" style={{ height: '1.5rem', border: '0.5px solid white' }} />
                <Typography variant="body1" color="white" fontWeight={400}>
                    {mediaList.length}
                </Typography>
            </GalleryCount>
            {!willClose && <ImageSelectorLeft onClick={() => handleSelectMedia(mediaList.indexOf(newSelectedMedia) - 1)} className="cursor-l-arrow" />}
            {!willClose && <ImageSelectorRight onClick={() => handleSelectMedia(mediaList.indexOf(newSelectedMedia) + 1)} className="cursor-r-arrow" />}
            <CloseWrapper onClick={() => handleClose()}>
                <RxCross1 color="white" style={{ fontSize: '1.5rem' }} />
            </CloseWrapper>
        </Wrapper>
    )
}

export default Gallery