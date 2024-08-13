import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'

import Link from 'next/link'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import LegalLayout from '@/layouts/legal'
import Typography from '../components/atoms/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Head from 'next/head'

const Privacy = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width: 650px)')

    return (
        <>
            <Head>
                <title>Neuendorf House | Privacy Policy</title>
                <meta name="description" content="The Neuendorf House, privacy policy." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack width="100%">
                <Stack minHeight="40vw" maxHeight={"650px !important"} spacing={1} pt="4rem" pb="8rem" borderBottom={`1px solid ${theme.palette.text.secondary}`} justifyContent="center">
                    <Box overflow="hidden">
                        <motion.div
                            initial={{ y: '100%' }}
                            whileInView={{ y: "0%" }}
                            transition={{ type: "spring", stiffness: 500, damping: 50 }}
                        >
                            <Typography variant={isMobile ? "h4" : "h2"} align='center' fontWeight={600} letterSpacing={isMobile ? '-1px' : '-2px'}>
                                Privacy Policy
                            </Typography>
                        </motion.div>
                    </Box>
                    <Typography variant="subtitle1" align='center' lineHeight={1.25} fontWeight={300} color="text.secondary">
                        Updated on the 15th of June 2021
                    </Typography>
                </Stack>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Stack borderBottom={`1px solid ${theme.palette.text.secondary}`} pt={"6rem"} pb={"6rem"} spacing={6}>
                        <Typography fontWeight={300} color="text.secondary">
                            This privacy statement was last updated on June 15, 2021 and applies to citizens and legal permanent residents of the European Economic Area.
                            <br />
                            In this privacy statement, we explain what we do with the data we obtain about you via https://neuendorfhouse.com. We recommend you carefully read this statement. In our processing we comply with the requirements of privacy legislation. That means, among other things, that:
                        </Typography>

                        <ul>
                            <li>
                                <Typography fontWeight={300} color="text.secondary">
                                    we clearly state the purposes for which we process personal data. We do this by means of this privacy statement;
                                </Typography>
                            </li>
                            <li>
                                <Typography fontWeight={300} color="text.secondary">
                                    we aim to limit our collection of personal data to only the personal data required for legitimate purposes;
                                </Typography>
                            </li>
                            <li>
                                <Typography fontWeight={300} color="text.secondary">
                                    we first request your explicit consent to process your personal data in cases requiring your consent;
                                </Typography>
                            </li>
                            <li>
                                <Typography fontWeight={300} color="text.secondary">
                                    we take appropriate security measures to protect your personal data and also require this from parties that process personal data on our behalf;
                                </Typography>
                            </li>
                            <li>
                                <Typography fontWeight={300} color="text.secondary">
                                    we respect your right to access your personal data or have it corrected or deleted, at your request.
                                </Typography>
                            </li>
                        </ul>

                        <Typography fontWeight={300} color="text.secondary">
                            If you have any questions, or want to know exactly what data we keep of you, please contact us.
                        </Typography>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                1. Purpose, data and retention period
                            </Typography>

                            <Typography variant="h6" fontWeight={500}>
                                1.1 Contact – Through phone, mail, email and/or webforms
                            </Typography>

                            <Typography fontWeight={400} color="text.secondary">
                                For this purpose we use the following data:
                            </Typography>

                            <ul>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Name, Address and City
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Email address
                                    </Typography>
                                </li>
                            </ul>

                            <Stack direction="row" spacing={1}>
                                <Typography fontWeight={400} color="text.secondary">
                                    For this purpose we use the following data:
                                </Typography>
                                <Typography fontWeight={300} color="text.secondary">
                                    <a href="https://cookiedatabase.org/legal-bases/#consent" style={{ color: 'inherit' }}>Consent obtained</a>
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Typography fontWeight={400} color="text.secondary">
                                    Retention period:
                                </Typography>
                                <Typography fontWeight={300} color="text.secondary">
                                    We retain this data until the service is terminated.
                                </Typography>
                            </Stack>

                            <Typography variant="h6" fontWeight={500}>
                                1.2 Compiling and analyzing statistics for website improvement
                            </Typography>

                            <Typography fontWeight={400} color="text.secondary">
                                For this purpose we use the following data:
                            </Typography>

                            <ul>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        IP Address
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Location
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Visitor behavior
                                    </Typography>
                                </li>
                            </ul>

                            <Stack direction="row" spacing={1}>
                                <Typography fontWeight={400} color="text.secondary">
                                    For this purpose we use the following data:
                                </Typography>
                                <Typography fontWeight={300} color="text.secondary">
                                    <a href="https://cookiedatabase.org/legal-bases/#agreement" style={{ color: 'inherit' }}>Performance of an agreement</a>
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Typography fontWeight={400} color="text.secondary">
                                    Retention period:
                                </Typography>
                                <Typography fontWeight={300} color="text.secondary">
                                    We retain this data until the service is terminated.
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                2. Cookies
                            </Typography>
                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                Our website uses cookies. For more information about cookies, please refer to our <Link href={"/cookie"}>Cookie Policy</Link>.
                            </Typography>

                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                3. Statistics
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                We keep track of anonymised statistics to gain insight into how often and in what way visitors use our website.The inclusion of full IP addresses is blocked by us.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                4. Data Security
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                We are committed to the security of personal data. We take appropriate security measures to limit abuse of and unauthorized access to personal data. This ensures that only the necessary persons have access to your data, that access to the data is protected, and that our security measures are regularly reviewed.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                5. Third-party websites
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                This privacy statement does not apply to third-party websites connected by links on our website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner. We recommend you read the privacy statements of these websites prior to making use of these websites.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                6. Amendments to this privacy statement
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                We reserve the right to make amendments to this privacy statement. It is recommended that you consult this privacy statement regularly in order to be aware of any changes. In addition, we will actively inform you wherever possible.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                7. Accessing and modifying your data
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                If you have any questions or want to know which personal data we have about you, please contact us. You can contact us by using the information below. You have the following rights:
                            </Typography>

                            <ul>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained for.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Right of access: You have the right to access your personal data that is known to us.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Right to rectification: you have the right to supplement, correct, have deleted or blocked your personal data whenever you wish.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        If you give us your consent to process your data, you have the right to revoke that consent and to have your personal data deleted.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Right to transfer your data: you have the right to request all your personal data from the controller and transfer it in its entirety to another controller.
                                    </Typography>
                                </li>
                                <li>
                                    <Typography fontWeight={300} color="text.secondary">
                                        Right to object: you may object to the processing of your data. We comply with this, unless there are justified grounds for processing.
                                    </Typography>
                                </li>
                            </ul>
                            <Typography fontWeight={300} color="text.secondary">
                                Please make sure to always clearly state who you are, so that we can be certain that we do not modify or delete any data of the wrong person.
                            </Typography>

                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h5" fontWeight={500}>
                                8. Submitting a complaint
                            </Typography>

                            <Typography mt="3rem" color="text.secondary" fontWeight={300}>
                                If you are not satisfied with the way in which we handle (a complaint about) the processing of your personal data, you have the right to submit a complaint to the Data Protection Authority.
                            </Typography>
                        </Stack>
                    </Stack>
                </motion.div>
            </Stack>
        </>
    )
}

Privacy.getLayout = (page: any) => {
    return (
        <LegalLayout>
            {page}
        </LegalLayout>
    )
}

export default Privacy