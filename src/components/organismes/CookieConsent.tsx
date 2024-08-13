import { styled } from '@mui/material/styles';
import { FC, useState, useEffect } from 'react';
import { useMediaQuery } from "@mui/material";

import Link from 'next/link'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '../atoms/Typography';
import CustomButtom from '../atoms/CustomButton';
import Spacer from "../atoms/Spacer";

const Wrapper = styled(Paper)<{ open: boolean }>(({ open, theme }) => ({
    opacity: open ? 1 : 0,
    width: '38rem',
    position: 'fixed',
    bottom: '2rem',
    left: '2rem',
    padding: '1.5rem',
    pointerEvents: open ? undefined : 'none',
    zIndex: open ? 200 : -1,
    '-webkit-appearance': 'none',
    boxShadow: 'none',
    backdropFilter: 'blur(5px)',
    '-webkit-backdrop-filter': 'blur(5px)',
    transform: open ? 'translateX(0)' : 'translateX(1rem)',
    transition: theme.transitions.create(['opacity', 'transform']),
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    background: '#0d0d0d91',
    color: 'white',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        maxWidth: '20rem',
        padding: '2rem',
        bottom: '1rem',
        right: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        maxWidth: '18rem',
        padding: '1.5rem',
        bottom: '1rem',
        right: '1rem',
    },

}))

const CookieConsent: FC<{ trackingId: string }> = ({ trackingId }) => {

    const isTablette = useMediaQuery('(max-width: 950px')

    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        const cookieConsent = document.cookie.includes('cookieConsent=true');
        setShowDialog(!cookieConsent);
    }, []);

    const handleAcceptCookies = () => {
        document.cookie = 'cookieConsent=true; max-age=31536000'; // Set the cookie to expire after 1 year
        (window as any).gtag('config', trackingId, {
            page_path: location.pathname,
            anonymize_ip: true,
        });
        setShowDialog(false);
    };

    const handleReject = () => {
        document.cookie = 'cookieConsent=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
        setShowDialog(false);
    };

    return showDialog ? (
        <Wrapper open square>
            <Typography fontWeight={300} mb={isTablette ? "1rem" : ""} color="white">
                This website uses cookies to ensure you get the best experience.{' '}
                <Link href="/cookie" style={{ color: 'white' }}>Cookie policy</Link>
            </Typography>
            <Stack direction={{ xs: 'row', md: "row" }} gap="8px" width={{ xs: '100%', md: 'auto' }}>
                <CustomButtom size="small" onClick={handleReject} sx={{ border: '1px solid white', background: 'transparent', color: 'white', ':hover': { color: 'white' } }}>
                    Reject
                </CustomButtom>
                <Spacer />
                <CustomButtom size="small" onClick={handleAcceptCookies} sx={{ border: '1px solid white', background: 'white', color: 'black', ':hover': { color: 'black', background: 'white' } }}>
                    Accept
                </CustomButtom>
            </Stack>
        </Wrapper>
    ) : null;
};

export default CookieConsent;