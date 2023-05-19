import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.scss'

const Main = lazy(() => import('./Components/Main'))
const Check = lazy(() => import('./Components/Check'))
const EditProject = lazy(() => import('./Components/EditProject/EditProject'))

AOS.init({ duration: 1000 })

const Fallback = () => (
    <div className='d-flex justify-content-between align-items-center w-100 min-vh-100'>
        <img src='/images/logo.png' alt='logo' className='mx-auto' width={200} />
    </div>
)

function App() {
    return (
        <div className='App'>
            <Router>
                <Suspense fallback={<Fallback />}>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        {/* <Route path='/edit' element={<Check />} />
                        <Route path='/editProject/:id' element={<EditProject />} /> */}
                    </Routes>
                </Suspense>
            </Router>
        </div>
    )
}

export default App
