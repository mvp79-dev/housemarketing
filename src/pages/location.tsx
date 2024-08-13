import Typography from "@/components/atoms/Typography"
import MainLayout from "@/layouts/main"

import { useMediaQuery } from '@mui/material'
import Head from "next/head"

const Location = () => {

    const isMobile = useMediaQuery('(max-width: 650px)')

    return (
        <>
            <Head>
                <title>Neuendorf House | Location</title>
                <meta name="description" content="The Neuendorf House, location." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Typography fontWeight={300} color="text.secondary" textAlign={isMobile ? 'left' : 'justify'}>
                The Neuendorf House, gracefully nestled in close proximity to the village of Santanyi in the South-Eastern region of the island of Mallorca, unveils a captivating residence that effortlessly merges tranquility and convenience. Situated a mere 40 minutes away from Palma de Mallorca airport, this exceptional property stands just a brief ﬁve-minute drive from the pristine shores of S'Amarador, widely regarded as one of the most alluring beaches in Mallorca. Moreover, the privileged location within the esteemed natural enclave of Parc de Mondragó adds to the allure of this dwelling.
                <br />
                <br />
                As one explores the Neuendorf House, its remarkable features come to the fore. A thoughtfully designed interior boasts ﬁve tastefully appointed bedrooms, accompanied by four bathrooms and an additional guest bathroom. To ensure optimal comfort, each bedroom is equipped with air conditioning, offering respite to a maximum of eleven guests. The house further impresses with its state-of-the-art kitchen, replete with Gaggenau and Miele appliances, which includes a wine cooler, dishwasher, washing machine, and dryer. The Neuendorf House pays meticulous attention to the well-being of its residents, as exempliﬁed by its drinking water mineralization and puriﬁcation system.
                <br />
                <br />
                Additionally, a Napoleon barbecue invites culinary exploration, while modern amenities such as WiFi, television, a movie projector, and a music system effortlessly cater to various entertainment needs. The inclusion of underﬂoor heating provides a comforting ambiance throughout the house, ensuring an optimal living experience. One is further enchanted by the rooftop terrace, commanding panoramic views of the azure sea, creating an idyllic space for relaxation and contemplation. The outdoor area of the Neuendorf House showcases two salt-water pools, one of which features a heatable jacuzzi, inviting guests to unwind in the lap of luxury. Furthermore, a clay tennis court awaits sports enthusiasts, while a children's playhouse ensures that younger guests are also catered to.
                <br />
                <br />
                For families traveling with infants, the house offers conveniences such as a cot, highchair, baby-changing station, and a mini sun lounger. Embracing a sustainable lifestyle, the Neuendorf House boasts an organic vegetable garden, providing an opportunity for residents to savor fresh produce while fostering a deeper connection with nature. With its harmonious blend of elegance, functionality, and natural splendor, the Neuendorf House offers an exclusive retreat where guests can luxuriate in the beauty of Mallorca while relishing in the utmost comfort and sophistication.
            </Typography>
        </>
    )
}

Location.getLayout = (page: any) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Location