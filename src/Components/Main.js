import { lazy } from 'react'
import { Hr } from './Hr/Hr'
import PageProgress from 'react-page-progress'
// import { getOthers } from '../redux/others'

const Contact = lazy(() => import('./Contact/Contact'))
const Footer = lazy(() => import('./Footer/Footer'))
const Header = lazy(() => import('./Header/Header'))
const Resume = lazy(() => import('./Resume/Resume'))
const Project = lazy(() => import('./Projects/Project'))
const Sidebar = lazy(() => import('./Sidebar/Sidebar'))
// const WhatIDo = lazy(() => import('./WhatIDo/WhatIDo'))

const Main = () => {
    // useEffect(() => {
    //     dispatch(getOthers())
    // }, [dispatch])

    return (
        <div>
            <PageProgress className='page' />
            <Sidebar />
            <Header />
            {/* <Hr />
            <WhatIDo /> */}
            <Hr />
            <Project />
            <Hr />
            <Resume />
            <Hr />
            <Contact />
            <Hr />
            <Footer />
        </div>
    )
}

export default Main
