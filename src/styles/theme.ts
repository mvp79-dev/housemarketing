
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

export const lt = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1f1f1f',
            dark: "#0e131b"
        },
        secondary: {
            main: "#656565",
            dark: "#26282C",
            light: "#0000001f"
        },
        text: {
            primary: "#1C1C1C",
            secondary: "#7D7D7D"
        },
    },
    typography: {
        fontFamily: 'var(--font-base)',
        h1: {
            fontSize: '64px',
            lineHeight: 1
        }
    },
    breakpoints: {
        values: {
            // extra-small
            xs: 0,
            // small
            sm: 600,
            // medium
            md: 950,
            // large
            lg: 1200,
            // extra-large
            xl: 1536,
        }
    }
});

export const dt = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
            dark: "#0e131b"
        },
        secondary: {
            main: '#c4c4c4',
            dark: "#26282C",
            light: "#ffffff1f"
        },
        text: {
            primary: "#ffffff",
            secondary: "#c4c4c4"
        },
        background: {
            default: "#0e0e0e"
        }
    },
    typography: {
        fontFamily: 'var(--font-base)',
        h1: {
            fontSize: '64px',
            lineHeight: 1
        }
    },
    breakpoints: {
        values: {
            // extra-small
            xs: 0,
            // small
            sm: 600,
            // medium
            md: 950,
            // large
            lg: 1200,
            // extra-large
            xl: 1536,
        }
    }
})

export const lightTheme = responsiveFontSizes(lt)
export const darkTheme = responsiveFontSizes(dt)