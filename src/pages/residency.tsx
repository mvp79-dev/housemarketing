import Spacer from "@/components/atoms/Spacer"
import monk from "@/assets/monk.jpg"
import sefa from "@/assets/sefa.jpg"
import herbelin from "@/assets/herbelin.jpg"
import giovanelli from "@/assets/giovanelli.jpg"
import Typography from "@/components/atoms/Typography"

import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"

import { useState } from "react"
import { RxCross1 } from "react-icons/rx"

import Head from "next/head"
import Divider from "@mui/material/Divider"
import ArtistCard from "@/components/organismes/ArtistCard"
import ApplicationForm from "@/components/organismes/ApplicationForm"

const Residency = () => {

    const [readMore, setReadMore] = useState<boolean>(false)
    const [openForm, setOpenForm] = useState<boolean>(false)

    return (
        <>
            <Head>
                <title>Neuendorf House | Artist Residency</title>
                <meta name="description" content="The Neuendorf House, location." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ApplicationForm topic="Artist Residency" open={openForm} setOpen={setOpenForm} />

            <Stack pt="12rem" spacing={12}>
                <Stack maxWidth={'1440px'} margin="0 auto"
                    pl={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                    pr={{ xs: "1.5rem", sm: "2rem", md: "3rem" }}
                    spacing={6}
                >
                    <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={{ xs: 8, md: 0 }}>
                        <Box width={{ xs: "100%", md: "45%" }} display="flex" justifyContent="start" alignItems={{ xs: "start", md: "end" }} height={{ xs: "0rem", md: "10rem" }}>
                            {/* <Typography variant="body1" color="primary.dark" fontWeight={300}>
                                The NEUENDORF HOUSE is pleased to welcome {!isMobile && <br />}
                                Louise Giovanellias the 2023 artist-in-residence.
                            </Typography> */}
                        </Box>
                        <Box width={{ xs: "100%", md: "45%" }} display="flex" justifyContent="start" alignItems="start">
                            <Typography variant="h3" fontWeight={400}>
                                Artist Residency
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 8, md: 0 }}>
                        <Stack width={{ xs: "100%", md: "45%" }} spacing={6}>
                            <Typography variant="body1" color="primary.dark" fontWeight={300} textAlign="justify" maxWidth={380}>
                                The NEUENDORF HOUSE is welcoming
                                applications for the Fall 2024 Artist Residency.
                                Please contact Albert Neuendorf for further
                                information.
                            </Typography>
                            <Box border="1px solid" onClick={() => setOpenForm(true)} borderColor="primary.dark" p="1rem" px={"4rem"} width="fit-content" style={{ cursor: 'pointer' }}>
                                <Typography variant="body2" color="primary.dark" lineHeight={1} fontWeight={300}>
                                    Apply Now
                                </Typography>
                            </Box>
                        </Stack>
                        <Box width={{ xs: "100%", md: "45%" }}>
                            <Stack width="100%" spacing={6}>
                                <Typography color="text.secondary" fontWeight={300} textAlign="justify">
                                    The NEUENDORF artist-in-residence program was established to provide visual artists of all backgrounds and disciplines with the time, space, and creative environment to research, expand, and deepen their practice and works in the seclusion and calm of Mallorca. The house was built by the gallerist Hans Neuendorf and his wife Caroline, and has welcomed artists and creators to find inspiration in the regenerative setting of the minimalist architecture and surrounding nature for over three decades. Founded in 1964, Galerie Neuendorf represented, and was instrumental in the development and present artistic legacy of renowned artists including Georg Baselitz, Lucio Fontana, David Hockney, Francis Picabia, Cy Twombly, and many others.
                                </Typography>
                                <Stack spacing={6} overflow="hidden" width="100%" maxHeight={readMore ? "100rem" : "0rem"} style={{ transition: 'max-height 0.24s ease-in-out' }}>
                                    <Typography color="text.secondary" fontWeight={300} textAlign="justify">
                                        The artist-in-residence program invites 1-3
                                        visual artists each year to live and work at the Neuendorf House for 4-6 weeks.The
                                        program provides travel, accommodation, studio space, materials, and
                                        transportation to explore the island. Artists in residence are invited to live in the villa,
                                        which encompasses 600 m2 of interior space and 30 acres of secluded land. An
                                        adjacent, newly renovated 137 sq. m. studio building provides ample space to
                                        work. The residency aims to formally provide artists with what it has long offered
                                        guests and visitors; a distraction-free space to contemplate the unique combination
                                        of minimalist architecture and Mediterranean land and seascape as a source of
                                        inspiration for their work. Previous participants in the Neuendorf residency,
                                        established in 2021, include Nathanaelle Herbelin, Christine Safa, and Louise
                                        Giovanelli.
                                    </Typography>
                                    <Typography color="text.secondary" fontWeight={300} textAlign="justify">
                                        The Spring 2024 artist-in-residence was William Monk (Kingston-upon-Thames,
                                        United Kingdom, 1977). Monk paints enigmatic and vibrant works, using starkly
                                        divisional compositions and often works in extensive series that gradually evolve
                                        over time. The canvases carry irregular intensities of detail, line, foreground and
                                        background, a sense of repetition breaks down the figuration, creating visual
                                        mantras. This rhythm happens throughout Monk’s work, surrendering figurative
                                        logic to arrive at something stranger and more powerful. Atmospheric and
                                        energetic, these paintings invite a more direct physical connection, drawing in the
                                        space between our inner and outer realms of experience.
                                    </Typography>
                                    <Typography color="text.secondary" fontWeight={300} textAlign="justify">
                                        Monk was awarded the Koninklijke Prijs voor Vrije Schilderkunst (Royal Award for
                                        Painting) in 2005 and the Jerwood Contemporary Painters award in 2009. Monk’s
                                        work has been exhibited at Fries Museum, Leeuwarden (NL); Gemeentemuseum,
                                        The Hague (NL); Van Gogh Museum, Amsterdam (NL); GRIMM, Amsterdam (NL);
                                        James Cohan Gallery, New York (US); Kohn Gallery, Los Angeles (US); Norwich
                                        University, Norwich (UK); PSL, Leeds and Summerfield Gallery, Cheltenham,
                                        London (UK). His work can also be found in the collections of the
                                        Gemeentemuseum, The Hague (NL); AKZO Nobel, Amsterdam (NL); David
                                        Roberts Art Foundation, London (UK); Fries Museum, Leeuwarden (NL); ING,
                                        Amsterdam (NL), and in many private collections. Monk is represented by Pace
                                        Gallery.”
                                    </Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" onClick={() => setReadMore(!readMore)} style={{ cursor: 'pointer' }} spacing={4}>
                                    <Spacer />
                                    <Typography fontSize="12px" fontWeight={400} textAlign="right" lineHeight={1}>
                                        {readMore ? 'READ LESS' : 'READ MORE'}
                                    </Typography>
                                    <RxCross1 style={{ paddingBottom: "0.1rem", height: '0.8em', transition: 'transform 0.2s ease-in-out', transform: readMore ? "rotate(0deg)" : "rotate(45deg)" }} />
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Stack>

                <ArtistCard
                    imgSrc={monk}
                    title={"William Monk"}
                    renderSubtitle={() => (
                        <Stack width="fit-content">
                            <Typography fontWeight={300} color="white">
                                Born 1977, Kingston-upon-Thames [UK]
                            </Typography>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Divider color="white" orientation="horizontal" style={{ flexGrow: 1 }} />
                                <Typography fontWeight={300} color="white">
                                    Lives and works in New York [US]
                                </Typography>
                            </Stack>
                        </Stack>
                    )}
                    renderStaticDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            Monk is a seer of sorts, using his canvases as portals into another realm. Whether that realm is one of
                            fantasy or reality, only he may know. Working with oil paint on canvas, the artist moves through and
                            onto each surface as if guided by a spiritual source. His work traverses any definition of time,
                            harkening back to a moment not easily defined in art history. It’s as if a natural phenomena has taken
                            place on each surface, an eclipse of sorts.
                        </Typography>
                    )}
                    renderDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            The paintings are abstract and strangely recognizable,
                            even if the viewer just grasps at visual symbols in hopes of finding clarity or familiarity. His thin
                            applications of paint are a gauzy curtain that if shifted would reveal a window into a new or different
                            world. One might think of the concept of journeying through time or what others might see as a result
                            of a Vision Quest Ceremony, an entryway into the subconscious mind. Monk’s work opens a vast if
                            uncanny dialogue with a higher power that seems to be a guiding force.

                            {` 

                            `}
                            <a href="https://news.artnet.com/art-world/william-monk-light-color-2486650" target="_blank" className="whiteLink">
                                “At the Neuendorf Residency in Mallorca, William Monk Embraces the Slowness of Painting” May 2024, Louisa
                                Elderton
                            </a>
                            {`

                            `}
                            <a href="https://art-vista.com/william-monk-angels-and-smoke-rings/" target="_blank" className="whiteLink">
                                “William Monk: Angels & Smoke Rings”, April 2024, Kristen Knupp
                            </a>
                        </Typography>
                    )}
                />

                <ArtistCard
                    imgSrc={giovanelli}
                    title={"Louise Giovanelli"}
                    renderSubtitle={() => (
                        <Stack width="fit-content">
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Typography fontWeight={300} color="white">
                                    Born 1993, London, [UK]
                                </Typography>
                                <Divider color="white" orientation="horizontal" style={{ flexGrow: 1 }} />
                            </Stack>
                            <Typography fontWeight={300} color="white">
                                Lives and works in Manchester [UK]
                            </Typography>
                        </Stack>
                    )}
                    renderStaticDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            In her paintings Louise Giovanelli explores the tension between representation and materiality, figuration
                            and abstraction, and how the mechanics of picture making shape our act of looking. Relating the
                            contemporary to the historic, and the sacred to the profane, Giovanelli considers the significance and
                            history of painting as a system of representation, exposing how the materiality of paint can carry and
                            convey meaning.
                        </Typography>
                    )}
                    renderDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            {`
                            Necessitating a slowed-down process of looking, her intensely worked surfaces are delicate and luminous,expanding and reforming found imagery through studied methodological approaches. Notions of the temporal, the spectacle and performance come to the fore, traced through fragments drawn from wide ranging sources including early Renaissance painting, film stills and images of popular performers. Reworking and often closely cropping details from paintings, photographs, classical sculpture, architecture and theatre, Giovanelli’s visual motifs traverse series, employing repetition as a leitmotif in order to achieve an augmented sense of reality. Where subjects are repeated, paintings that appear near identical are, however, rendered individual by slight alterations in composition or tone: ‘Repetition has two functions in my work. As a practical learning mechanism and as a psychological and conceptual device.’ In an ongoing series of paintings Giovanelli has used curtains or drapes as the subject matter. Semi-abstracted, theatrically lit and made of sumptuous tactile material, the curtains are a vehicle through which Giovanelli explores the formal possibilities of colour meeting light meeting texture. These paintings are also indicative of the narrative ambiguity Giovanelli strives for in her work. She explains: "These curtains, once thrown back, offer this promise to enter another realm – and once closed, contain that promise. The painting hangs in a suspended state, leaving us wondering whether the show is over, or in fact just beginning."

                            The ‘Orbiter’ paintings are a series of close-up, abstracted images originating from stills of a performer in a shimmering gold sequined dress, in which the very subject appears to break down and dissolve into mere particles of reflected light. Their light-emitting splendour draws a link between the glamour and spectacle of pop performances and the presence of gold in religious painting, used to denote the divine. Equally, in Host (2020), which reworks a detail from Fra Angelico’s painting The Mocking of Christ (1440–41), a detail of St Dominic with halo is dappled and diffused through myriad specks of coloured light. Pursuing a sense of dissolution to its limit, Giovanelli disrupts easy visual recognition in several works by adding tiny scattered accents of pigment onto the image surface, creating an agitated and ambiguous pictorial effect. Rather than directly deal with religious themes, Giovanelli assimilates parallel moments of social ritual in her work, offering alluring visual encounters that highlight the physical experience of painting.
                            
                            Discussing the painting Tenebrae(2020), which draws on religious iconography, ritual and ceremony at the heart of a Tenebrae ceremony (an ancient Christian Good Friday service in which the light gradually diminishes), Giovanelli comments: ‘This centring of light, its intensity, and slow calibration towards obscurity describes my approach to painting fundamentally.’ Deeply engaged with the history of painting, the artist often makes specific journeys to see Old Master works in situ. During these encounters, a previously overlooked detail in a painting can become the subject of a new work of her own, the result of what the artist terms ‘slow looking’. Equally, the use of light in her paintings derives from this study, appearing to emanate from the canvas depths, achieved through the application of thin layers of highly pigmented paint, itself a traditional technique. As Giovanelli says: ‘I am drawn to these techniques because they were based on the core principles of light. The physicality of the light in the room, the light emanating from the primed canvas, and how this interacts with pigments.’
                      
                            Louise Giovanelli (b. 1993, London) lives and works in Manchester, UK. She studied at Städelschule, Frankfurt (2018–20) under the tutelage of Amy Sillman, having received her BA from the Manchester School of Art, UK, in 2015. Solo exhibitions of her work have been held at Moon Grove, Manchester, UK (2023); Manchester Art Gallery, UK (2019); Workplace Foundation, Gateshead, UK (2019); Warrington Museum and Art Gallery, UK (2018); The Grundy Gallery, Blackpool, UK (2016). Giovanelli’s work has been featured in group exhibitions that include; FLAG Art Foundation, New York, NY (2023); Hayward Gallery, London (2021); AkzoNobel Art Foundation, Amsterdam (2021); and The Art House, Worcester, UK (2019).force.
                            `}
                            {` 
                            `}
                            <a href="https://news.artnet.com/art-world/neuendorf-residency-louise-giovanelli-2399048" target="_blank" className="whiteLink">
                                “Neuendorf Residency Invites Painter Louise Giovanelli to Set up Studio at its Minimalist House in Mallorca” November 2023,
                                Artnet News</a>
                            {`

                            `}
                            <a href="https://news.artnet.com/art-world/what-louise-giovanelli-paints-in-mallorca-2415512" target="_blank" className="whiteLink">
                                “Painter Louise Giovanelli finds Inspiration for her Deconstructed Canvases at a Minimalist Residency in Mallorca” January
                                2024, Jo Lawson-Tancred</a>
                            {`
                             
                            `}
                            <a href="https://ocula.com/advisory/picks/louise-giovanelli-paintings-break-china/" target="_blank" className="whiteLink">
                                “Louise Giovanelli’s Paintings Break China”, March 2024, Rory Mitchell</a>
                        </Typography>
                    )}
                />

                <ArtistCard
                    imgSrc={herbelin}
                    title={"Nathanaëlle Herbelin"}
                    renderSubtitle={() => (
                        <Stack width="fit-content">
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Typography fontWeight={300} color="white">
                                    Born 1989, Tel Aviv [ISR]
                                </Typography>
                                <Divider color="white" orientation="horizontal" style={{ flexGrow: 1 }} />
                            </Stack>
                            <Typography fontWeight={300} color="white">
                                Lives and works in Paris and Tel Aviv
                            </Typography>
                        </Stack>
                    )}
                    renderStaticDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            Her works contain subtle hints—both in subject matter and form—as windows into a world imbued
                            with a quiet melancholy. Herbelin encourages the viewer to slow down, as a way of embracing the
                            intimacy involved in viewing art. She has developed a formal style unique within the contemporary
                            tendency towards figurative painting. Certain patterns and colours appear more defined than others in
                            the softened memories that she so delicately captures. Earth tones give the works a quality evocative
                            of a reverie and her loose brushwork recalls post-impressionist techniques. Herbelin has cited Les
                            Nabis—a group of young painters active in Paris during the late 19th century—as a central influence
                            in her practice. Most notably, she takes inspiration from the stylistic poetry that art historical figures
                            such as Pierre Bonnard applied to domestic scenes.
                        </Typography>
                    )}
                    renderDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            Nathanaëlle Herbelin obtained a Master of Fine
                            Arts degree from the École Nationale Supérieure des Beaux-Arts de Paris in 2016, during which time
                            she was invited to participate in an exchange program at The Cooper Union, New York. Recent solo
                            and group exhibitions include the Musée d’Orsay, Paris (2024), French Institute of Tel Aviv (2022),
                            Umm Al Fahem Art Center (2021), Yishu 8 prize, George V Art Centre, Beijing (2021), Passerelle Art
                            Center, Brest (2020), Bétonsalon, Paris (2019), the Beaux-Arts Museum of Rennes (2018), Collection
                            Lambert, Avignon (2017) and Fondation d’Entreprise Ricard, Paris (2017).
                        </Typography>
                    )}
                />

                <ArtistCard
                    imgSrc={sefa}
                    title={"Christine Safa"}
                    renderSubtitle={() => (
                        <Stack width="fit-content">
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Typography fontWeight={300} color="white">
                                    Born 1993, London, [UK]
                                </Typography>
                                <Divider color="white" orientation="horizontal" style={{ flexGrow: 1 }} />
                            </Stack>
                            <Typography fontWeight={300} color="white">
                                Lives and works in Manchester [UK]
                            </Typography>
                        </Stack>
                    )}
                    renderStaticDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            Christine Safa was born in 1994, in Le Chesnay, France. She lives and works in Paris. She received
                            the École Nationale Supérieure des Beaux-arts Diploma. In 2021 she participated to a group
                            exhibition at Lévy Gorvy Gallery in Paris. That same year she had her first solo show at Gallery Praz
                            Delavallade. In 2022 she had a personal exhibition at the ICA of Milan, Italy, as well as participating to
                            a group exhibition at the Pernod Ricard Foundation curated by Anael Pigeat and Sophie Vigourous.
                            These are emotion-filled moments and places captured by memory. Faces and mountains mingle, as
                            do silhouettes and horizons. In the light of an instant which memory has fixed. Figures in a landscape,
                            as minimal as it is vibrant.
                        </Typography>
                    )}
                    renderDescription={() => (
                        <Typography fontSize="14px" color="white" fontWeight={300} textAlign={{ xs: "left", md: "justify" }} >
                            A warm palette which evokes its Mediterranean origins. What it means to
                            be here, simply but completely, that is what is being stated with an evident empathy by these sober
                            and powerful paintings. “I see my paintings as tributes, fragments of memories, that which remains.
                            That’s what I paint, what’s left. As I paint I give birth to the silhouette, the shape of the ruins of
                            memories which both greet and are the victims of time ; which for me means my experience of these
                            interior landscapes. Figures appear, disappear, become layer of paint. Colour becomes saturated or
                            lets the light through. A discerning of emotional states, dictated by the quest of a familiar light.” —
                            Christine Safa
                        </Typography>
                    )}
                />
            </Stack >
        </>
    )
}


export default Residency
