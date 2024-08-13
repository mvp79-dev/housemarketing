import React from 'react';
import { useTheme, Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

type TypographyProps = MuiTypographyProps;

const Typography: React.FC<TypographyProps> = ({ children, ...rest }) => {
    const theme = useTheme()
    return <MuiTypography color={theme.palette.primary.main} {...rest} >{children}</MuiTypography>;
};

export default Typography;