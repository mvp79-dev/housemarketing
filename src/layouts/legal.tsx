
import Box from '@mui/material/Box'

const LegalLayout = ({ children }: { children: any }) => {

    return (
        <Box
            maxWidth={'1440px'} margin="0 auto"
            pl={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
            pr={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
        >
            {children}
        </Box>
    )
}

export default LegalLayout