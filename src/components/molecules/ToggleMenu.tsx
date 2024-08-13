import { FC, useRef } from "react"
import { useRouter } from 'next/router'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from "../atoms/Typography"

interface ToggleMenuProps {
    open: boolean;
    setOpenMenu: (input: boolean) => void;
    isStatic?: boolean;
    isMobileBlurred?: boolean;
}

const ToggleMenu: FC<ToggleMenuProps> = ({ isStatic = false, isMobileBlurred = false, ...props }) => {

    const theme = useTheme()
    const router = useRouter()

    const isMobile = useMediaQuery('(max-width: 650px)')
    const isTablette = useMediaQuery('(max-width: 950px)')

    const rectRefLeft = useRef<SVGRectElement | null>(null);
    const rectRefMiddle = useRef<SVGRectElement | null>(null);
    const rectRefRight = useRef<SVGRectElement | null>(null);

    const triggerAnimation = (input: boolean) => {
        if (isStatic) return router.push('/')

        if (rectRefLeft.current && rectRefRight.current && rectRefMiddle.current) {
            if (!input) {
                const leftCloseAnimation = rectRefLeft.current.querySelector('#globalnav-anim-menutrigger-left-close');
                const middleCloseAnimation = rectRefMiddle.current.querySelector('#globalnav-anim-menutrigger-middle-close');
                const middleCloseRotateAnimation = rectRefMiddle.current.querySelector('#globalnav-anim-menutrigger-middle-close-rotate');
                const rightCloseAnimation = rectRefRight.current.querySelector('#globalnav-anim-menutrigger-right-close');
                (leftCloseAnimation as any)?.beginElement();
                (middleCloseAnimation as any)?.beginElement();
                (middleCloseRotateAnimation as any)?.beginElement();
                (rightCloseAnimation as any)?.beginElement();
            } else {
                const leftOpenAnimation = rectRefLeft.current.querySelector('#globalnav-anim-menutrigger-left-open');
                const middleOpenAnimation = rectRefMiddle.current.querySelector('#globalnav-anim-menutrigger-middle-open');
                const middleOpenRotateAnimation = rectRefMiddle.current.querySelector('#globalnav-anim-menutrigger-middle-open-rotate');
                const rightOpenAnimation = rectRefRight.current.querySelector('#globalnav-anim-menutrigger-right-open');
                (leftOpenAnimation as any)?.beginElement();
                (middleOpenAnimation as any)?.beginElement();
                (middleOpenRotateAnimation as any)?.beginElement();
                (rightOpenAnimation as any)?.beginElement();

            }
        }
        props.setOpenMenu(!props.open)
    }

    const navigateTo = (input: string) => {
        router.push(input)
        props.setOpenMenu(!props.open)
        triggerAnimation(!props.open)
    }

    return (
        <>
            <Box
                sx={{
                    height: '100vh',
                    width: props.open ? '35rem' : '0rem',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.49) 100%)',
                    zIndex: 0,
                    transition: props.open ? theme.transitions.create('width') : '',
                    overflow: 'hidden'
                }}
                className={isMobileBlurred && isMobile ? 'light-blur' : ''}
            >
                <Stack spacing={4} position="absolute" top={{ xs: "8rem", md: "9rem", lg: "10rem" }} right={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}>
                    <Box onClick={() => navigateTo("/booking")} sx={{ cursor: 'pointer', opacity: props.open ? '1' : '0', transition: props.open ? theme.transitions.create('opacity', { duration: 400, delay: 200 }) : '' }}>
                        <Typography color="white" variant="h4" fontWeight={router.pathname === '/booking' ? 300 : 200} lineHeight={1} align="right" sx={{ fontVariant: 'all-small-caps', zIndex: 1, whiteSpace: 'nowrap' }}>
                            booking
                        </Typography>
                    </Box>
                    <Box onClick={() => navigateTo("/location")} sx={{ cursor: 'pointer', opacity: props.open ? '1' : '0', transition: props.open ? theme.transitions.create('opacity', { duration: 400, delay: 250 }) : '' }}>
                        <Typography color="white" variant="h4" fontWeight={router.pathname === '/location' ? 300 : 200} lineHeight={1} align="right" sx={{ fontVariant: 'all-small-caps', zIndex: 1, whiteSpace: 'nowrap' }}>
                            location
                        </Typography>
                    </Box>
                    <Box onClick={() => navigateTo("/")} sx={{ cursor: 'pointer', opacity: props.open ? '1' : '0', transition: props.open ? theme.transitions.create('opacity', { duration: 400, delay: 300 }) : '' }}>
                        <Typography color="white" variant="h4" fontWeight={router.pathname === '/' ? 300 : 200} lineHeight={1} align="right" sx={{ fontVariant: 'all-small-caps', zIndex: 1, whiteSpace: 'nowrap' }}>
                            the house
                        </Typography>
                    </Box>
                    <Box onClick={() => navigateTo("/residency")} sx={{ cursor: 'pointer', opacity: props.open ? '1' : '0', transition: props.open ? theme.transitions.create('opacity', { duration: 400, delay: 350 }) : '' }}>
                        <Typography color="white" variant="h4" fontWeight={router.pathname === '/residency' ? 300 : 200} lineHeight={1} align="right" sx={{ fontVariant: 'all-small-caps', zIndex: 1, whiteSpace: 'nowrap' }}>
                            artist residency
                        </Typography>
                    </Box>
                    <Box onClick={() => navigateTo("/architecture")} sx={{ cursor: 'pointer', opacity: props.open ? '1' : '0', transition: props.open ? theme.transitions.create('opacity', { duration: 400, delay: 350 }) : '' }}>
                        <Typography color="white" variant="h4" fontWeight={router.pathname === '/architecture' ? 300 : 200} lineHeight={1} align="right" sx={{ fontVariant: 'all-small-caps', zIndex: 1, whiteSpace: 'nowrap' }}>
                            architecture visiting school
                        </Typography>
                    </Box>
                </Stack>
            </Box>
            <Box onClick={() => triggerAnimation(!props.open)} sx={{ cursor: 'pointer' }} zIndex={1}>
                <svg width={isMobile ? "97.7" : "122.2"} height={isMobile ? "100" : "125"} viewBox={"15 0 100 200"}>
                    <rect ref={rectRefLeft} id="globalnav-anim-menutrigger-left" width="53.96" height="100" x="26.28" fill={isStatic || isMobileBlurred ? "#3c3c3c" : "white"} y="60">
                        <animate
                            id="globalnav-anim-menutrigger-left-open"
                            attributeName="x"
                            keyTimes="0;1"
                            dur="0.24s"
                            begin="indefinite"
                            fill="freeze"
                            values="26.28;0"
                        />
                        <animate
                            id="globalnav-anim-menutrigger-left-close"
                            attributeName="x"
                            keyTimes="0;1"
                            dur="0.24s"
                            begin="indefinite"
                            fill="freeze"
                            values="0;26.28"
                        />
                    </rect>
                    {/* transform={props.open ? "matrix(0.877 -.354 0.3744 0.927 -52 44.57)" : "matrix(1 0 0 1 0 0)"} className="transition-mobile" */}
                    <g ref={rectRefMiddle}>
                        <rect id="globalnav-anim-menutrigger-middle" height="100" width="13.886" x="96.92" y="60" fill={isStatic || isMobileBlurred ? "#3c3c3c" : "white"} >
                            <animateTransform
                                attributeName="transform"
                                id="globalnav-anim-menutrigger-middle-open"
                                type="translate"
                                from="0 0"
                                dur="0.24s"
                                to="-65 -7"
                                begin="indefinite"
                                fill="freeze"
                            />
                            <animateTransform
                                attributeName="transform"
                                id="globalnav-anim-menutrigger-middle-close"
                                type="translate"
                                from="-65 -7"
                                dur="0.24s"
                                to="0 0"
                                begin="indefinite"
                                fill="freeze"
                            />
                        </rect>
                        <animateTransform
                            attributeName="transform"
                            id="globalnav-anim-menutrigger-middle-open-rotate"
                            type="rotate"
                            from="0 100 30"
                            to="-22 80 0"
                            dur="0.24s"
                            begin="indefinite"
                            fill="freeze"
                        />


                        <animateTransform
                            attributeName="transform"
                            id="globalnav-anim-menutrigger-middle-close-rotate"
                            type="rotate"
                            from="-22 80 0"
                            to="0 100 30"
                            dur="0.24s"
                            begin="indefinite"
                            fill="freeze"
                        />
                    </g>
                    <rect ref={rectRefRight} id="globalnav-anim-menutrigger-right" width="29.36" height="100" fill={isStatic || isMobileBlurred ? "#3c3c3c" : "white"} x="96.92" y="60">
                        <animate
                            id="globalnav-anim-menutrigger-right-open"
                            attributeName="x"
                            keyTimes="0;1"
                            dur="0.24s"
                            begin="indefinite"
                            fill="freeze"
                            values="96.92;106.045"
                        />
                        <animate
                            id="globalnav-anim-menutrigger-right-close"
                            attributeName="x"
                            keyTimes="0;1"
                            dur="0.24s"
                            begin="indefinite"
                            fill="freeze"
                            values="106.045;96.92"
                        />
                    </rect>
                </svg>
                {/* <svg width={isTablette ? "26" : "32"} height={isTablette ? "24" : "28"} viewBox="0 0 18 18">
                    <polyline ref={polyLineRefBottom} id="globalnav-menutrigger-bread-bottom" fill="none" stroke={['/imprint', '/privacy','/cookie'].includes(router.pathname) ? "black" : "white"} stroke-width="1" stroke-linecap="square" stroke-linejoin="square" points="2 12, 18 12">
                        <animate id="globalnav-anim-menutrigger-bread-bottom-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 12, 18 12; 2 9, 18 9; 3.5 15, 15 3.5">
                        </animate>
                        <animate id="globalnav-anim-menutrigger-bread-bottom-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 15, 15 3.5; 2 9, 18 9; 2 12, 18 12">
                        </animate>
                    </polyline>
                    <polyline ref={polyLineRefTop} id="globalnav-menutrigger-bread-top" fill="none" stroke={['/imprint', '/privacy','/cookie'].includes(router.pathname) ? "black" : "white"} stroke-width="1" stroke-linecap="square" stroke-linejoin="square" points="2 5, 18 5">
                        <animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 18 5; 2 9, 18 9; 3.5 3.5, 15 15">
                        </animate>
                        <animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 18 9; 2 5, 18 5">
                        </animate>
                    </polyline>
                </svg> */}
            </Box>
        </>
    )
}

export default ToggleMenu