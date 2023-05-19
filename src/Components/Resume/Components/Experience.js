import { Col, Container, Row } from 'reactstrap'
import ResumeCart from '../../Others/ResumeCart'

const Experience = () => {
    const experiences = [
        {
            h4: 'React, Frontend Intern',
            years: 'SetApp (2021 - 2022)',
            text: 'After completing the MERN course, I started doing frontend internship at Setapp. The practice coincided with the last month of autumn and the beginning of spring. I strengthened the basic knowledge in Setapp and started to finish the Restaurant project using React and Redux Toolkit.',
        },
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
