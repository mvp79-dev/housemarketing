import Head from "next/head"
import MainLayout from "@/layouts/main"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Image from 'next/image'
import architecturePlan from '../assets/architecture-plan.png'
import Box from "@mui/material/Box"

const Architecture = () => {
    return (
        <>
            <Head>
                <title>Neuendorf House | Architecture Visiting School</title>
                <meta name="description" content="The Neuendorf House, Architecture Visiting School." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack direction="row" marginTop={{ xs: '4rem', }}>
                <Stack spacing={4} marginLeft={{ xs: '0rem', sm: '10rem', md: '10rem' }}>
                    <Typography variant="h4" style={{ zIndex: 1 }}>
                        Architecture Visiting School
                    </Typography>
                    <Typography fontWeight={300} color="text.secondary" style={{ zIndex: 1 }}>
                        Neuendorf House, in partnership with the Architectural Association School of Architecture, is pleased to present the
                        Neuendorf House Visiting School.
                    </Typography>
                    <Box className="architectureImg" sx={{
                        '& > img': { height: 'auto !important', transform: { xs: 'translate(0%, 0%) !important', sm: 'translate(-40%, -17%) !important' } }, height: { xs: '14rem', sm: '8rem' }, transform: { xs: 'rotate(-90deg)', sm: "none" }, position: 'relative',
                        width: { xs: '50%', sm: '470px' }
                    }}
                    >
                        <Image
                            src={architecturePlan.src}
                            alt="Architecture Visiting School"
                            fill
                            objectFit="contain"
                        />
                    </Box>
                    <Typography fontWeight={300} color="text.secondary" marginLeft={'10rem'} style={{ zIndex: 1 }} textAlign="justify">
                        At a time when retrofitting existing structures is increasingly central to the architectural practice,
                        the visiting school aims to provide participants with critical skills in the practical response to
                        design commissions. Learning alongside renowned practicing architects, the course creates a
                        unique opportunity by challenging participants to create designs that fit seamlessly in
                        conversation with a structure of extreme character.
                    </Typography>
                    <Typography fontWeight={300} color="text.secondary" marginLeft={'10rem'} style={{ zIndex: 1 }} textAlign="justify">
                        The visiting school is structured as a recurring series, taking place at the Neuendorf House over
                        10 days once a year. Each iteration is initiated by an in-depth survey of the house and its
                        surroundings, where participants explore techniques of observation and abstraction. The
                        research material provides participants with a detailed picture of the structure’s scale,
                        materiality, and the surrounding land and is to be used as the basis for the participants’ design
                        proposals. A series of visits around the island, workshops, and round table discussions will
                        provide additional context to the first part of the course. The minimalist nature of the architecture
                        facilitates, but also challenges participants to push the boundaries of designing within the
                        existing, questioning how to add and amend without altering an original ethos.
                    </Typography>
                    <Typography fontWeight={300} color="text.secondary" marginLeft={'10rem'} style={{ zIndex: 1 }} textAlign="justify">
                        For this first iteration, the objective will be to design a walled cactus garden immediately
                        adjacent to the house, applying elements of landscape architecture, water element design, and
                        garden furniture design that sits in conversation with the existing structure.
                    </Typography>
                    <Typography fontWeight={300} color="text.secondary" marginLeft={'10rem'} style={{ zIndex: 1 }} textAlign="justify">
                        For further Information please visit: <a href="https://www.aaschool.ac.uk/academicprogrammes/visitingschool/neuendorf-house-visiting-school" target="_blank" style={{ color: 'inherit' }}>https://www.aaschool.ac.uk/academicprogrammes/visitingschool/neuendorf-house-visiting-school</a>
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

Architecture.getLayout = (page: any) => {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}

export default Architecture