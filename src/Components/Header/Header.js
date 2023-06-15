import { lazy } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Container, Row } from 'reactstrap'
import Typewriter from 'typewriter-effect'
import './Header.scss'

const Icons = lazy(() => import('../Others/Icons'))

const Header = () => {
    return (
        <div id='header' className='mt-5 px-xl-25'>
            <Container>
                <Row>
                    <Col
                        md={{ size: 12, order: 2 }}
                        lg={{ size: 7, order: 1 }}
                        xl={{ size: 6, order: 1 }}
                        sm={{ size: 12, order: 2 }}
                        className='order-2 mt-5'
                    >
                        <div>
                            <div>
                                <p
                                    className='text-uppercase font-secondary color-lightn fs-xl-14 fs-14'
                                    style={{ letterSpacing: '3px' }}
                                >
                                    welcome to my world
                                </p>
                            </div>
                            <div>
                                <h1 className='text-white p-bold font-secondary'>
                                    <div className ='fs-xl-60 fs-sm-60 fs-60 fs-lg-60'>
                                        Hi, I'm <span className='color-primary'>Saidnabi</span>
                                    </div>
                                    <div className='d-flex fs-xl-48 fs-lg-48 fs-sm-48 fs-48'>
                                        <span className='me-3'>a</span>
                                        <Typewriter
                                            options={{
                                                strings: ['.NET Developer.', 'Professional Coder.'],
                                                autoStart: true,
                                                loop: true,
                                                delay: 80,
                                                deleteSpeed: 80,
                                            }}
                                        />
                                    </div>
                                </h1>
                            </div>
                            <div>
                                <p className='color-lightn fs-16 fs-sm-16 fs-xl-16'>
                                I have been actively involved in Information Technology for 1 years, specializing in web
                                app development with excellent knowledge of software development methodologies,
                                frameworks, and Software Development Life Cycle (SDLC).I have experience in
                                developing applications for various industries including Healthcare, Finance, and
                                Educational sectors.I possess strong communication skills and the ability to interact
                                professionally with diverse groups.
                                </p>
                            </div>
                            <div className='pt-5 mt-5'>
                                <Row className='text-uppercase color-lightn mb-20 p-light mt-190 d-flex'>
                                    {/* find with me */}
                                    <Col sm='12' xl='6' lg='6' md='6'>
                                        <Icons />
                                    </Col>

                                    {/* my resume */}
                                    <Col sm='12' xl='6' lg='6' md='6'>
                                        <div>
                                            <p className='fs-xl-14 p-light color-lightn font-primary'>
                                                get my resume
                                            </p>
                                            <div className='py-3'>
                                                <a
                                                    href='/myresume/Resume.pdf'
                                                    className='box-shadow bg-color-1 border-0 borr-10 py-3 px-5 color-primary font-primary text-decoration-none p-medium'
                                                    download='Saidnabi Yuldashkhadjaev'
                                                >
                                                    my resume
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col
                        xl={{ size: 5, order: 2, offset: 1 }}
                        lg={{ size: 5, order: 2 }}
                        md={{ size: 12, order: 1 }}
                        sm={{ size: 12, order: 1 }}
                        className='order-1'
                    >
                        <div>
                            <div className='w-100'>
                                <div className='w-md-75 w-lg-75 w-xl-50 w-100 ms-auto'>
                                    <div className='box-shadow bg-color-1 mx-auto mt-lg-5 h-130'>
                                        <LazyLoadImage
                                            src='/images/myphoto2.jpg'
                                            effect='blur'
                                            alt='banner-01'
                                            className='img-top-25 w-100'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
