import Image from 'next/image'
import Spacer from '../atoms/Spacer'
import Stack from "@mui/material/Stack"
import ToggleMenu from '../molecules/ToggleMenu'
import logo from '../../assets/logo.png'

import { useState } from 'react'
import { useRouter } from "next/router"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const NavBar = () => {

    const theme = useTheme()
    const router = useRouter()

    const isTablette = useMediaQuery('(max-width: 950px')

    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const navigateTo = (route: string) => {
        // Add your navigation logic here
        if (route.startsWith('https')) return window.open(route, '_blank')
        router.push(route)
    };

    return (
        <Stack
            direction="row"
            height={isTablette ? 100 : 125}
            alignItems="center"
            position="sticky"
            zIndex={12}
            pl={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
            pr={{ md: "2rem" }}
        >
            <Spacer />
            <ToggleMenu open={openMenu} setOpenMenu={setOpenMenu} isStatic={["/privacy", "/impresum", "/cookie"].includes(router.pathname)} isMobileBlurred={["/residency"].includes(router.pathname)} />
        </Stack>
    )
}

export default NavBar