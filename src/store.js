import { configureStore } from '@reduxjs/toolkit'
import middleware from './redux/middleware'
import projects from './redux/projects'
import project from './redux/project'
import others from './redux/others'
import check from './redux/check'
import contact from './redux/contact'

export default configureStore({
    reducer: { projects, project, others, check, contact },
    middleware: [middleware],
})
