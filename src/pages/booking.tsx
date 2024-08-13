import axios from 'axios'
import Head from "next/head"
import Stack from "@mui/material/Stack"
import MainLayout from "@/layouts/main"
import Spacer from "@/components/atoms/Spacer"
import Typography from "@/components/atoms/Typography"
import CustomButtom from '@/components/atoms/CustomButton'

import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { FormControl, InputLabel, InputBase, useMediaQuery } from '@mui/material';

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
    fontWeight: 500,
    fontSize: '20px',
    color: theme.palette.primary.main
}))

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '&.MuiInputBase-root': {
        padding: '4px 0 4px !important',
    },
    '& .MuiInputBase-input': {
        borderRadius: 0,
        position: 'relative',
        border: '1px solid',
        borderColor: theme.palette.secondary.dark,
        fontSize: 16,
        fontWeight: 300,
        width: '100%',
        padding: '15px 24px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        color: theme.palette.text.secondary,
        '&:focus': {
            boxShadow: `${theme.palette.primary.main} 0 0 0 0.05rem`,
            borderColor: 'black',
            color: theme.palette.primary.main
        },
    },
}));

const Booking = () => {

    const isMobile = useMediaQuery("(max-width: 650px)")
    const isTablette = useMediaQuery("(max-width: 950px)")

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const sendEmail = async (email: string, subject: string, message: string, name: string) => {
        return axios({
            method: 'post',
            url: '/api/email',
            data: {
                email: email,
                subject: subject,
                message: message,
                name: name
            },
        });
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulating email sending process
        try {
            // You can replace this with your actual email sending logic on the server-side
            const msgReq = await sendEmail(formData.email, formData.subject, formData.message, formData.name);

            if (msgReq.status === 250) {
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
                setSent(true);
                setTimeout(() => {
                    setSent(false);
                }, 2500);
            }

            // Clear form after successful submission
            // Display success message or perform any other actions
            console.log('Email sent successfully!');
        } catch (error) {
            setSent(false);
            setError('Something went wrong. Please try again.')
            // Handle error during email sending
            console.error('Failed to send email:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Head>
                <title>Neuendorf House | Booking</title>
                <meta name="description" content="The Neuendorf House, booking." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack spacing={8}>
                <Stack spacing={2}>
                    <Typography fontSize={isMobile ? '22px' : isTablette ? '26px' : '30px'} fontWeight={500} sx={{ fontVariant: 'all-small-caps' }}>
                        booking & contact
                    </Typography>
                    <Typography fontSize={isMobile ? '14px' : '16px'} width={isTablette ? '100%' : "50%"} fontWeight={300} color="text.secondary">
                        Should you wish to stay at NEUENDORF HOUSE, please contact Caroline Neuendorf via the contact form below for your booking request.
                    </Typography>
                </Stack>

                <form onSubmit={submitForm} style={{ display: 'flex', flexDirection: "column", width: '100%', gap: '3rem' }}>
                    <FormControl variant="standard" sx={{ width: isTablette ? '100%' : '50%' }}>
                        <InputLabelStyled shrink htmlFor="bootstrap-input">
                            Name: *
                        </InputLabelStyled>
                        <BootstrapInput
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            placeholder="Type Here"
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: isTablette ? '100%' : '50%' }}>
                        <InputLabelStyled shrink htmlFor="bootstrap-input">
                            E-Mail Address: *
                        </InputLabelStyled>
                        <BootstrapInput
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            placeholder="Type Here"
                        />
                    </FormControl>
                    <FormControl variant="standard" sx={{ width: isTablette ? '100%' : '50%' }}>
                        <InputLabelStyled shrink htmlFor="bootstrap-input">
                            Subject: *
                        </InputLabelStyled>
                        <BootstrapInput
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            placeholder="Type Here"
                        />
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabelStyled shrink htmlFor="bootstrap-input">
                            Message: *
                        </InputLabelStyled>
                        <BootstrapInput
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            fullWidth
                            placeholder="Type Here"
                            multiline
                            rows={3}
                        />
                    </FormControl>
                    <Stack width="100%" direction="row">
                        <Spacer />
                        <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content', gap: '1rem' }}>
                            <div style={{ width: 'fit-content' }}>
                                <CustomButtom type="submit" size="large" variant="contained" disabled={loading}>
                                    {sent ? 'Sent!' : loading ? 'Sending...' : 'Submit'}
                                </CustomButtom>
                            </div>
                            <Typography fontSize="12px" fontWeight={300} color="red">
                                {error}
                            </Typography>
                        </div>
                    </Stack>

                </form>
            </Stack>
        </>
    )
}

Booking.getLayout = (page: any) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}
export default Booking