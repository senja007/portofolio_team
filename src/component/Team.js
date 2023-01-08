import { Container, Row, Col, Tab } from "react-bootstrap";
import { TeamCard } from "./TeamCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import profil from "../assets/img/profil.png";

export const Team = () => {
    const card = [
        {
            name: "Lord Chanipan",
            skill: "Full Stack",
            pap: profil,
        }, 
        {
            name: "Lord Senja",
            skill: "Full Stack",
            pap: profil,
        }, 
        {
            name: "Lord Karim",
            skill: "Full Stack",
            pap: profil,
        }, 
        {
            name: "Lord Dio",
            skill: "Full Stack",
            pap: profil,
        }
    ]

    return (
        <section className="team" id="team">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>Neon Code Team</h1>
                                    <br />
                                    <Tab.Container id="teams-tabs" defaultActiveKey="first">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                {
                                                    card.map((project, index) => {
                                                        return (
                                                            <TeamCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Team;