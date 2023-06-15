import { Col, Container, Row } from 'reactstrap'
import ResumeCart from '../../Others/ResumeCart'

const Experience = () => {
    const experiences = [
        {
            h4: '.NET, Backend Developer',
            years: 'Freelancer (2023 - Present)',
            text: 'After completing the .NET course, I was able to apply my newly acquired skills in practical projects. One of the notable projects I worked on was the FleetFlow project, where I played a key role in developing the "Best delivering system." This experience further enhanced my understanding of .NET development and solidified my passion for delivering high-quality solutions. I am eager to continue expanding my knowledge and contributing to impactful projects in the future.',
        }
    ]

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='6' md='12'>
                        <div className='time-line ps-lg-5 ps-4 ps-sm-5 pt-5 pe-2'>
                            {experiences.map(
                                (item, index) =>
                                    index < Math.ceil(experiences.length / 2) && (
                                        <div className='mb-5' data-aos='flip-up' key={index}>
                                            <ResumeCart
                                                h4={item.h4}
                                                years={item.years}
                                                text={item.text}
                                            />
                                        </div>
                                    )
                            )}
                        </div>
                    </Col>
                    <Col lg='6' md='12' className=''>
                        <div className='time-line ps-lg-5 ps-4 ps-sm-5 pt-lg-5 pe-2'>
                            {experiences.map(
                                (item, index) =>
                                    index >= Math.ceil(experiences.length / 2) && (
                                        <div className='mb-5' data-aos='flip-up' key={index}>
                                            <ResumeCart
                                                h4={item.h4}
                                                years={item.years}
                                                text={item.text}
                                            />
                                        </div>
                                    )
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experience
