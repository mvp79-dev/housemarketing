import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    // Add any additional custom props you need
}

const StyledButton = styled(Button)<{ size?: any }>(({ theme, size }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: theme.palette.text.secondary,
    '&:hover': {
        boxShadow: 'none',
    },
    fontSize: size = "small" ? '16px' : '18px',
    fontWeight: 300,
    padding: size === "small" ? '8px 30px 8px 30px !important' : '12px 50px 12px 50px !important',
    fontVariant: 'all-small-caps',
    borderRadius: 0
}));

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...rest }) => {
    return (
        <StyledButton variant="contained" {...rest} disableRipple>
            {children}
        </StyledButton>
    );
};

export default CustomButton;