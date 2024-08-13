import { FC, useState } from "react";
import { Opac } from "../atoms/Opac";
import { RxCross1 } from "react-icons/rx";
import { Parallax } from "react-scroll-parallax";
import Image, { StaticImageData } from "next/image";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "../atoms/Typography";


interface ArtistsCardProps {
    imgSrc: StaticImageData;
    title: string;
    renderSubtitle: () => JSX.Element;
    renderDescription: () => JSX.Element;
    renderStaticDescription?: () => JSX.Element;
}

const ArtistCard: FC<ArtistsCardProps> = ({ imgSrc, title, renderSubtitle, renderDescription, renderStaticDescription }) => {

    const [readDetails, setReadDetails] = useState<boolean>(false);

    return (
        <Box position="relative" height={"50rem"} overflow="hidden" style={{ transition: 'height 0.24s ease-in' }}>
            <Parallax shouldAlwaysCompleteAnimation speed={10} style={{ width: "100vw", height: "60rem", position: "absolute", left: "-rem", transition: 'height 0.24s ease-in' }}>
                <Image
                    src={imgSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="100% 100%"
                />
                <Opac />
            </Parallax>
            <Stack direction={{ xs: "column", md: "row" }} position="absolute" bottom={0} p={{ xs: "2rem", md: "3rem" }} alignItems={{ xs: "start", md: "end" }} spacing={4}>
                <Stack spacing={2}>
                    <Typography variant="h3" fontWeight={400} color="white">
                        {title}
                    </Typography>
                    {renderSubtitle()}
                    <Box overflow="auto" width={{ xs: "100%", md: "85%", lg: "75%" }} className="noscroll">
                        {renderStaticDescription && renderStaticDescription()}
                    </Box>
                    <Box overflow="auto" width={{ xs: "100%", md: "85%", lg: "75%" }} maxHeight={readDetails ? "30rem" : "0rem"} style={{ transition: 'max-height 0.4s ease-in-out' }} className="noscroll">
                        {renderDescription()}
                    </Box>
                </Stack>
                <Stack direction="row" spacing={4} onClick={() => setReadDetails(!readDetails)} alignItems="center" sx={{ cursor: "pointer" }} >
                    <Typography fontSize="12px" fontWeight={300} color="white">
                        DETAILS
                    </Typography>
                    <RxCross1 style={{ color: "white", paddingBottom: "0.1rem", height: '0.8em', transition: 'transform 0.2s ease-in-out', transform: readDetails ? "rotate(0deg)" : "rotate(45deg)" }} />
                </Stack>
            </Stack>
        </Box >

    )
}

export default ArtistCard;