import { FC } from 'react'
import { styled } from '@mui/material'

import Link  from 'next/link'

const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: 'inherit',
    overflow: 'hidden'
}));

const SLink : FC <{href: string, children?: any, rest?: any}>  = ({ href, children, rest }) => {
    return (
        <StyledLink href={href} sx={rest} >
            {children}
        </StyledLink>
    )
}

export default SLink
