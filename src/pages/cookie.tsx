import { motion } from 'framer-motion'
import { useTheme } from '@mui/material/styles'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import LegalLayout from '@/layouts/legal'
import Typography from '../components/atoms/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Head from 'next/head'

const Cookie = () => {

    const theme = useTheme()
    const isMobile = useMediaQuery('(max-width: 650px)')

    return (
        <>
            <Head>
                <title>Neuendorf House | Cookie</title>
                <meta name="description" content="The Neuendorf House, cookie." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack width="100%" >
                <Stack minHeight="40vw" maxHeight={"650px !important"} spacing={1} pt="4rem" pb="8rem" borderBottom={`1px solid ${theme.palette.text.secondary}`} justifyContent="center">
                    <Box overflow="hidden">
                        <motion.div
                            initial={{ y: '100%' }}
                            whileInView={{ y: "0%" }}
                            transition={{ type: "spring", stiffness: 500, damping: 50 }}
                        >
                            <Typography variant={isMobile ? "h4" : "h3"} align='center' fontWeight={400} letterSpacing={isMobile ? '-1px' : '-2px'}>
                                Cookie Policy
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
                            This Cookie Policy was last updated on June 15, 2021 and applies to citizens and legal permanent residents of the European Economic Area.
                        </Typography>

                        <Stack spacing={8}>
                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    1. Introduction
                                </Typography>

                                <Typography fontWeight={400} color="text.secondary">
                                    Our website, https://neuendorfhouse.com (hereinafter: “the website”) uses cookies and other related technologies (for convenience all technologies are referred to as “cookies”). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.
                                </Typography>
                            </Stack>
                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    2. What are cookies?
                                </Typography>
                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.
                                </Typography>

                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    3. What are scripts?
                                </Typography>

                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.
                                </Typography>
                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    4. What is a web beacon?
                                </Typography>

                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.
                                </Typography>
                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    5. Cookies
                                </Typography>

                                <Typography variant="h6" fontWeight={400}>
                                    5.1 Technical or functional cookies
                                </Typography>

                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    This privacy statement does not apply to third-party websites connected by links on our website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner. We recommend you read the privacy statements of these websites prior to making use of these websites.
                                </Typography>

                                <Typography variant="h6" fontWeight={400}>
                                    5.2 Statistics cookies
                                </Typography>

                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    We use statistics cookies to optimize the website experience for our users. With these statistics cookies we get insights in the usage of our website. We ask your permission to place statistics cookies.
                                </Typography>

                                <Typography variant="h6" fontWeight={400}>
                                    5.3 Marketing/Tracking cookies
                                </Typography>

                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.
                                </Typography>
                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    6. Placed cookies
                                </Typography>
                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    In this section, we provide information about the cookies placed on our website using the "gtag.js" JavaScript library. These cookies are utilized to track user interactions on our site and gather analytics for improving our services. Below, you will find details about the specific cookies we use:
                                </Typography>

                                <Typography variant="h6" fontWeight={400}>
                                    6.1 Google Analytics (gtag.js)
                                </Typography>

                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    <span style={{ fontWeight: 400 }}>Purpose:</span> We use Google Analytics with the "gtag.js" library to collect information about how visitors interact with our website. This includes data on page views, user behavior, and demographic information (when available). The insights obtained help us enhance the user experience and content on our site.
                                    <br /><br />
                                    <span style={{ fontWeight: 400 }}>Cookie Names:</span> The cookies placed by Google Analytics using "gtag.js" may include, but are not limited to, "__ga," "__gid," and "__gat." These cookies are used to distinguish users and throttle request rates.
                                    <br /><br />
                                    <span style={{ fontWeight: 400 }}>Duration:</span> Google Analytics cookies may have varying expiration periods, typically ranging from minutes to years. For more precise details, please refer to Google's official documentation.
                                    <br /><br />
                                    <span style={{ fontWeight: 400 }}>Third-Party Access:</span> Google Analytics may also collect information about your device, browser, and IP address. This data is subject to Google's privacy policy.
                                    <br /><br />
                                    <span style={{ fontWeight: 400 }}>Opt-Out:</span> You can opt-out of Google Analytics tracking by using the Google Analytics Opt-Out Browser Add-on, available at Google Analytics Opt-Out.
                                    <br /><br /><br />
                                    Please note that while we provide this information for transparency, we may update our cookie usage from time to time. It is advisable to periodically review this Cookie Policy for any changes.
                                </Typography>
                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    7. Consent
                                </Typography>

                                <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                    When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on “Save preferences”, you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.
                                </Typography>
                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    8. Your rights with respect to personal data
                                </Typography>

                                <Typography mt="3rem" color="text.secondary" fontWeight={300}>
                                    You have the following rights with respect to your personal data:
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

                                <Typography mt="3rem" color="text.secondary" fontWeight={300}>
                                    To exercise these rights, please contact us. Please refer to the contact details at the bottom of this Cookie Policy. If you have a complaint about how we handle your data, we would like to hear from you, but you also have the right to submit a complaint to the supervisory authority (the Data Protection Authority).
                                </Typography>
                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    9. Enabling/disabling and deleting cookies
                                </Typography>

                                <Typography mt="3rem" color="text.secondary" fontWeight={300}>
                                    You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.
                                    <br />
                                    Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our websites again.
                                </Typography>
                            </Stack>

                            <Stack spacing={4}>
                                <Typography variant="h5" fontWeight={400}>
                                    10. Contact details
                                </Typography>
                                <Typography mt="3rem" color="text.secondary" fontWeight={300}>
                                    For questions and/or comments about our Cookie Policy and this statement, please contact us by using the following contact details:
                                </Typography>

                                <Typography mt="3rem" color="text.secondary" fontWeight={300}>
                                    Caroline Neuendorf<br />
                                    Apartado de Correos 102, 07650 Santanyi, Mallorca<br />
                                    Spain<br />
                                    Website: https://neuendorfhouse.com<br />
                                    Email: info@neuendorfhouse.com<br />
                                    Phone number: +49 30 68811979<br />
                                </Typography>
                            </Stack>
                        </Stack>

                    </Stack>
                </motion.div>
            </Stack>
        </>
    )
}

Cookie.getLayout = (page: any) => {
    return (
        <LegalLayout>
            {page}
        </LegalLayout>
    )
}

export default Cookie