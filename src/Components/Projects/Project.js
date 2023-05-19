import { lazy, useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { Title } from '../Title/Title'
import { Heart } from '../Others/Heart'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useSelector } from 'react-redux'
import './Project.scss'

const ProjectModal = lazy(() => import('./ProjectModal'))

const Project = () => {
    const [modal, setModal] = useState(false)
    let [data, setData] = useState(null)
    const modalBtn = () => setModal(!modal)

    const { projects } = useSelector(state => state.projects)

    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : ''
    }, [modal])

    return (
        <div id='project'>
            <Container>
                <Title
                    subtitle={'visit my portfolio and keep your feedback'}
                    title={'my portfolio'}
                    center
                />
                <Row>
                    {projects.map((project, index) => (
                        <Col
                            md='6'
                            xl='4'
                            key={index}
                            className='px-xl-25 py-4'
                            data-aos={`${index % 2 === 0 ? 'fade-up' : 'fade-down'}`}
                            data-aos-delay={`${index + '00'}`}
                        >
                            <div onClick={modalBtn} className='h-100'>
                                <div
                                    className='bg-color-1 box-shadow hover-bg-color-1 p-sm-4 p-4 p-lg-4 p-xl-5 borr-20 hover-card h-100'
                                    onClick={() => setData(project)}
                                >
                                    <Card className='bg-transparent border-0 h-100'>
                                        <div className='w-100 overflow-hidden mx-auto borr-10'>
                                            <LazyLoadImage
                                                effect='blur'
                                                // top
                                                width='100%'
                                                height='250px'
                                                src={project.image}
                                                alt='Card image cap1'
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                        <CardBody className='p-0'>
                                            <div className='d-flex my-3'>
                                                <div className=''>
                                                    <a
                                                        href={project.link}
                                                        className='color-primary text-decoration-none p-medium font-primary fs-xl-12 text-uppercase'
                                                    >
                                                        {project.made}
                                                    </a>
                                                </div>
                                                <Heart rating={project.like} />
                                            </div>
                                            <div className='hover-commet'>
                                                <div className='fs-xl-24 fs-md-24 color-lightn p-semi-bold cursor-pointer text-decoration-none'>
                                                    {project.name}
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                {modal && (
                    <div
                        className='position-fixed start-0 top-0 bottom-0 end-0 bg-color w-100 overflow-hidden'
                        style={{ zIndex: '998' }}
                        onClick={() => setModal(!modal)}
                    />
                )}
                <div className={`position-fixed ${modal ? 'project-modal' : 'd-none'}`}>
                    <ProjectModal modalBtn={modalBtn} data={data} />
                </div>
            </Container>
        </div>
    )
}

export default Project
