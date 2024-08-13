import Link from 'next/link'
import Spacer from "../atoms/Spacer"
import Typography from '../atoms/Typography';
import Stack from '@mui/material/Stack';
import { FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

import { styled, useMediaQuery, useTheme } from '@mui/material'

const SocialLinks = styled('ul')`
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0rem;
`;

const SocialIcon = styled('div')<{ notReady?: boolean }>(({ theme, notReady }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    border: `1px solid ${notReady ? "#c4c4c4" : theme.palette.primary.main}`,
    color: notReady ? "#c4c4c4" : theme.palette.primary.main,
    transition: 'background-color 0.3s ease',
    '&:hover': {
        color: notReady ? "#c4c4c4" : 'white',
        backgroundColor: notReady ? 'white' : '#333333',
    }
}))

const Footer = ({ selectedTheme, handleSelectTheme }: { selectedTheme: 'light' | 'dark', handleSelectTheme: (input: 'dark' | 'light') => void }) => {

    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width: 650px)')

    return (
        <Stack spacing={8} paddingBottom="2rem" pl={{ xs: "1.5rem", sm: "2rem", md: "3rem" }} pr={{ xs: "1.5rem", sm: "2rem", md: "3rem" }} maxWidth={'1440px'} margin="0 auto" paddingTop={{ xs: "8rem", sm: "10rem", md: "14rem" }} sx={{ zIndex: 10, position: 'relative', backgroundColor: theme.palette.background.default }}>
            <Stack direction={{ xs: "column", md: 'row' }} justifyContent="space-between" spacing={8}>
                <Stack width={{ xs: "100%", md: "40%" }} spacing={3}>
                    <Typography variant="h5" fontWeight={600}>
                        About Neuendorf House
                    </Typography>
                    <Typography mb="1rem !important" variant="body2" color="text.secondary" fontWeight={300} align={isMobile ? "inherit" : "justify"}>
                        In the heart of Majorca's idyllic landscapes, the Neuendorf House emerges as a captivating architectural masterpiece, a symphony of precise minimalism and zen grandeur.
                        Designed by acclaimed architects Claudio Silvestrin and John Pawson, this dwelling stands as a testament to the transcendent fusion of art and functionality. Its clean lines, harmonious spaces, and meticulous attention to detail create an immersive experience, inviting inhabitants to embark on a mindful journey of contemplation and connection with nature. The Neuendorf House encapsulates a profound ode to simplicity, embodying the quintessence of modern living in harmony with the surrounding beauty of the Mediterranean landscape.
                    </Typography>
                    <SocialLinks>
                        <li>
                            {/* <a about="_blank" href="https://youtube.com/"> */}
                            <SocialIcon notReady>
                                <FaYoutube />
                            </SocialIcon>
                            {/* </a> */}
                        </li>
                        <li>
                            <a about="_blank" href="https://www.instagram.com/neuendorfhouse">
                                <SocialIcon>
                                    <FaInstagram />
                                </SocialIcon>
                            </a>
                        </li>
                        <li>
                            {/* <a about="_blank" href="https://www.pinterest.com/"> */}
                            <SocialIcon notReady>
                                <FaPinterest />
                            </SocialIcon>
                            {/* </a> */}
                        </li>
                    </SocialLinks>
                </Stack>
                <Stack width={{ xs: "100%", md: "40%" }} spacing={3}>
                    <Typography variant="h5" fontWeight={600}>
                        Location
                    </Typography>

                    <a about="_blank" href="https://www.google.de/maps/place/Lohm%C3%BChlenstra%C3%9Fe+65,+12435+Berlin/@52.4940393,13.4436947,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84facba3a056b:0xb25527b64dd504ba!8m2!3d52.4940361!4d13.4462696!16s%2Fg%2F11b8v40vb2?entry=ttu" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="body2" color="text.secondary" fontWeight={300}>
                            Santanyi Majorca | Spain
                        </Typography>
                    </a>
                </Stack>
            </Stack>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: 'start', md: 'end' }}>
                <Stack direction="row" spacing={2}>
                    <Link href="/impresum" style={{ textDecoration: 'none' }} >
                        <Typography fontWeight={300} color="text.secondary" variant="body2">
                            Privacy Policy
                        </Typography>
                    </Link>
                    <Link href="/impresum" style={{ textDecoration: 'none' }} >
                        <Typography fontWeight={300} color="text.secondary" variant="body2">
                            Imprint
                        </Typography>
                    </Link>
                    <Link href="/booking" style={{ textDecoration: 'none' }} >
                        <Typography fontWeight={300} color="text.secondary" variant="body2">
                            Contact
                        </Typography>
                    </Link>
                </Stack>
                <Spacer />
                <Stack alignItems={{ xs: 'start', md: 'end' }} spacing={1}>
                    <Stack direction="row" spacing={2}>
                        <Typography onClick={() => handleSelectTheme('dark')} fontWeight={selectedTheme === 'dark' ? 400 : 300} color={selectedTheme === 'dark' ? "text.primary" : "text.secondary"} variant="body2" sx={{ cursor: 'pointer' }}>
                            Dark
                        </Typography>
                        <Typography fontWeight={300} color="text.secondary" variant="body2">
                            |
                        </Typography>
                        <Typography onClick={() => handleSelectTheme('light')} fontWeight={selectedTheme === 'light' ? 400 : 300} color={selectedTheme === 'light' ? "text.primary" : "text.secondary"} variant="body2" sx={{ cursor: 'pointer' }}>
                            Light
                        </Typography>
                    </Stack>
                    <Typography color="text.secondary" variant="body2" fontWeight={300}>
                        ©2024 Neuendorf House
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Footer