
import Typography from "@/components/atoms/Typography"
import { Accordion, AccordionDetails, AccordionSummary } from "@/components/organismes/Accordion"
import LegalLayout from "@/layouts/legal"

import Stack from "@mui/material/Stack"
import Link from "next/link"
import { useState } from "react"

const Impresum = () => {

    const [expandPrivacyPolicy, setExpandPrivacyPolicy] = useState<boolean>(false)

    return (
        <Stack spacing={18} pt={{ xs: "16rem" }}>
            <Stack spacing={6}>
                <Typography variant="h5">
                    IMPRESUM
                </Typography>
                <Typography fontWeight={300} color="text.secondary">
                    Angaben gemäß § 5 TMG:
                    <br /><br />
                    Representativ:
                    <br /><br />
                    Caroline Neuendorf<br />
                    Telefon: +49 30 68811979<br />
                    E-Mail: info@neuendorfhouse.com<br />
                    Website: https://www.neuendorfhouse.com/<br />
                    <br /><br />
                    Photography: : [Renée Kemps / Angelica Larsson / Patricia Parinejad / Lucie Zoe Lazarus / J. Konrad Schnidt]
                </Typography>
            </Stack>
            <Stack spacing={12}>
                <Typography variant="h5" fontWeight={400}>
                    Haftungsausschluss
                </Typography>
                <Typography fontWeight={300} color="text.secondary">
                    Haftung für Inhalte
                    <br /><br />
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    <br /><br />
                    Haftung für Links
                    <br /><br />
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                    <br /><br />
                    Urheberrecht
                    <br /><br />
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </Typography>
            </Stack>

            <Accordion id="#privacy" expanded={expandPrivacyPolicy} onChange={() => setExpandPrivacyPolicy(!expandPrivacyPolicy)}>
                <AccordionSummary aria-controls="privacy-policy-content" id="privacy-policy-content" sx={{ borderBottom: '1px solid #c4c4c4' }}>
                    <Typography fontWeight={400} variant="h5" >
                        PRIVACY POLICY
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack borderBottom={`1px solid`} borderColor="text.secondary" pt={"2rem"} pb={"6rem"} spacing={10}>
                        <Stack spacing={4}>
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
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h6" fontWeight={400}>
                                1. Purpose, data and retention period
                            </Typography>

                            <Typography variant="h6" fontWeight={400}>
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

                            <Typography variant="h6" fontWeight={400}>
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


                            <Typography fontWeight={400} color="text.secondary">
                                For this purpose we use the following data:
                                <span>
                                    <a href="https://cookiedatabase.org/legal-bases/#agreement" style={{ color: 'inherit' }}>Performance of an agreement</a>
                                </span>
                            </Typography>
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
                            <Typography variant="h6" fontWeight={400}>
                                2. Cookies
                            </Typography>
                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                Our website uses cookies. For more information about cookies, please refer to our <Link href={"/cookie"}>Cookie Policy</Link>.
                            </Typography>

                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h6" fontWeight={400}>
                                3. Statistics
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                We keep track of anonymised statistics to gain insight into how often and in what way visitors use our website.The inclusion of full IP addresses is blocked by us.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h6" fontWeight={400}>
                                4. Data Security
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                We are committed to the security of personal data. We take appropriate security measures to limit abuse of and unauthorized access to personal data. This ensures that only the necessary persons have access to your data, that access to the data is protected, and that our security measures are regularly reviewed.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h6" fontWeight={400}>
                                5. Third-party websites
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                This privacy statement does not apply to third-party websites connected by links on our website. We cannot guarantee that these third parties handle your personal data in a reliable or secure manner. We recommend you read the privacy statements of these websites prior to making use of these websites.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h6" fontWeight={400}>
                                6. Amendments to this privacy statement
                            </Typography>

                            <Typography mt="3rem" fontWeight={300} color="text.secondary">
                                We reserve the right to make amendments to this privacy statement. It is recommended that you consult this privacy statement regularly in order to be aware of any changes. In addition, we will actively inform you wherever possible.
                            </Typography>
                        </Stack>

                        <Stack spacing={4}>
                            <Typography variant="h6" fontWeight={400}>
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
                            <Typography variant="h6" fontWeight={400}>
                                8. Submitting a complaint
                            </Typography>

                            <Typography mt="3rem" color="text.secondary" fontWeight={300}>
                                If you are not satisfied with the way in which we handle (a complaint about) the processing of your personal data, you have the right to submit a complaint to the Data Protection Authority.
                            </Typography>
                        </Stack>
                    </Stack>
                </AccordionDetails>
            </Accordion>

        </Stack>
    )
}

Impresum.getLayout = (page: any) => {
    return (
        <LegalLayout>
            {page}
        </LegalLayout>
    )
}

export default Impresum