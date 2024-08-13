import axios from 'axios'
import Spacer from '../atoms/Spacer';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import useMediaQuery from '@mui/material/useMediaQuery';
import CustomButtom from '@/components/atoms/CustomButton';

import { useState } from "react";
import { styled } from "@mui/material/styles";
import { motion } from 'framer-motion';
import Typography from '../atoms/Typography';
import { RxCross1 } from 'react-icons/rx';

const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
    fontWeight: 500,
    fontSize: '20px',
    color: 'white'
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
        borderColor: 'white',
        fontSize: 16,
        fontWeight: 300,
        width: '100%',
        padding: '15px 24px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        color: 'white',
        '&:focus': {
            boxShadow: `${theme.palette.primary.main} 0 0 0 0.05rem`,
            borderColor: 'black',
            color: 'white'
        },
    },
}));

const CustomFileInput = styled('div')(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    position: 'relative',
    '& input[type="file"]': {
        position: 'absolute',
        opacity: 0,
        marginTop: theme.spacing(3),
    },
    '& label': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '0',
        border: '1px solid',
        borderColor: 'white',
        paddingLeft: '10px',
        cursor: 'pointer',
        color: 'white'
    },
    '& label > div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0',
        borderLeft: '1px solid',
        borderColor: 'white',
        padding: '15px 24px',
        cursor: 'pointer',
        color: 'white',
        flex: 1
    },
    '& span': {
        marginLeft: theme.spacing(2),
        fontSize: 16,
        fontWeight: 300,
        color: 'white',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        flex: 2
    }
}));

const ApplicationForm = ({ topic, bottomText, open, setOpen }: { topic: string, bottomText?: string, open: boolean, setOpen: (input: boolean) => void }) => {

    const isMobile = useMediaQuery("(max-width: 650px)")
    const isTablette = useMediaQuery("(max-width: 950px)")

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        file: null,
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: any) => {
        const { name, value, files } = e.target;
        if (files) {
            const file = files[0];
            if (file?.size > 10 * 1024 * 1024) { // 10 MB
                setError('File size should not exceed 10 MB.');
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    file: null,
                }));
            } else if (file?.type !== 'application/pdf') {
                setError('Only PDF files are allowed.');
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    file: null,
                }));
            } else {
                setError('');
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    file: file,
                }));
            }
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value,
            }));
        }
    };

    const sendEmail = async (email: string, message: string, name: string, file: any) => {
        const data = new FormData();

        data.append('email', email);
        data.append('subject', `${topic} for ${name}`);
        data.append('message', message);
        data.append('name', name);

        if (file) {
            data.append('file', file);
        }

        return axios.post('/api/email-application', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    };

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulating email sending process
        try {
            // You can replace this with your actual email sending logic on the server-side
            const msgReq = await sendEmail(formData.email, formData.message, formData.name, formData.file);

            if (msgReq.status === 200) {
                setFormData({
                    name: '',
                    email: '',
                    file: null,
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
            <motion.div
                initial={{ x: '100%' }}
                animate={open ? { x: 0 } : { x: '100%' }}
                onClick={() => setOpen(false)}
                style={{
                    position: 'fixed',
                    bottom: '0',
                    right: '0',
                    background: 'transparent',
                    zIndex: 999,
                    width: "100%",
                    height: "100%",
                    cursor: 'pointer'
                }}
            />
            <motion.div
                initial={{ x: '100%' }}
                animate={open ? { x: 0 } : { x: '100%' }}
                style={{
                    position: 'fixed',
                    top: isMobile ? '0' : 'auto',
                    bottom: '0',
                    right: '0',
                    backdropFilter: 'blur(5px)',
                    background: '#0d0d0d98',
                    zIndex: 1000,
                    width: isTablette ? '100%' : '85%',
                    padding: isMobile ? '125px 2rem' : isTablette ? '3rem 8rem' : '125px 8rem',
                    maxHeight: '100vh',
                    overflowY: 'auto',
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.16, 0.75, 0.36, 0.98], // Cubic bezier values
                }}
            >
                <Stack className="closeUnderline" onClick={() => setOpen(false)} direction="row" alignItems="center" marginBottom="2rem" spacing={1}>
                    <RxCross1 style={{ color: "white", paddingBottom: "0.1rem", height: '0.8em', transition: 'transform 0.2s ease-in-out' }} />
                    <Typography fontSize="16px" fontWeight={500} color="white"  >
                        Close
                    </Typography>
                </Stack>
                <form onSubmit={submitForm} style={{ display: 'flex', flexDirection: "column", width: '100%', gap: '2rem' }}>
                    <FormControl variant="standard" sx={{ width: isTablette ? '100%' : '60%' }}>
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
                    <FormControl variant="standard" sx={{ width: isTablette ? '100%' : '60%' }}>
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
                    <FormControl variant="standard" sx={{ width: isTablette ? '100%' : '60%' }}>
                        <InputLabelStyled shrink htmlFor="bootstrap-input">
                            Application: *
                        </InputLabelStyled>
                        <CustomFileInput>
                            <input
                                type="file"
                                name="file"
                                id="file-input"
                                onChange={handleInputChange}
                                required
                            />
                            <label htmlFor="file-input">
                                <span>{formData.file ? (formData.file as any).name : 'No file selected'}</span>
                                <div>
                                    Choose File
                                </div>
                            </label>
                        </CustomFileInput>
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
                            <Typography fontSize="12px" fontWeight={300} color="#ff7373">
                                {error}
                            </Typography>
                        </div>
                    </Stack>

                </form>
                {bottomText &&
                    <Typography color="white" fontSize="12px" fontWeight={300} marginTop="2rem">
                        {bottomText}
                    </Typography>
                }
            </motion.div>
        </>
    )
}

export default ApplicationForm