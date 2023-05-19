import React from 'react'
import './Icons.scss'

const Icons = props => {
    const others = {
        linkedin: 'https://www.linkedin.com/in/saidnabi-yuldashkhadjaev-008076250',
        facebook: 'https://github.com/dotnettashkent',
        telegram: 'https://t.me/dotnettashkent',
        instagram: 'https://www.instagram.com/im_khoja',
    }

    return (
        <div id='icons'>
            <div>
                <p
                    className={`fs-xl-14 text-uppercase ${
                        props.contact
                            ? 'p-medium color-body font-secondary'
                            : 'p-light color-lightn font-primary'
                    }`}
                >
                    find me with &nbsp;. . .
                </p>
            </div>
            <div className={`d-flex ${props.contact ? 'mb-1' : 'mb-4'}`}>
                <div className='m-10-12 me-2'>
                    <a href={others?.facebook}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span className={`${props.sidebar ? 'icon-size' : ''} icon github`} />
                        </div>
                    </a>
                </div>
                <div className='m-10-12 mx-2'>
                    <a href={others?.instagram}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span
                                className={`${props.sidebar ? 'icon-size' : ''} icon instagram`}
                            />
                        </div>
                    </a>
                </div>
                <div className='m-10-12 mx-2'>
                    <a href={others?.telegram}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span className={`${props.sidebar ? 'icon-size' : ''} icon telegram`} />
                        </div>
                    </a>
                </div>
                <div className='m-10-12 ms-2'>
                    <a href={others?.linkedin}>
                        <div
                            className={`${
                                props.sidebar ? 'w-h-51' : 'w-h-60 box-shadow'
                            } bg-color-1 text-center ${props.sidebar ? 'pt-3' : 'pt-xl-20'}`}
                        >
                            <span className={`${props.sidebar ? 'icon-size' : ''} icon linkedin`} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Icons
