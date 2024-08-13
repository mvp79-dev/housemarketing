import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';

import { styled } from "@mui/material/styles";
import { RxCross1 } from 'react-icons/rx';

export const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: 0,
    padding: 0,
    background: theme.palette.background.default,
    '&:not(:last-child)': {
        border: 0,
    },
    '&:before': {
        display: 'none',
    },
    '& .MuiButtonBase-root.MuiAccordionSummary-root': {
        padding: 0
    }
}));

export const AccordionSummary = styled((props: AccordionSummaryProps, theme) => (
    <MuiAccordionSummary
        expandIcon={<RxCross1 sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(45deg)',
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    paddingTop: '2rem'
}));