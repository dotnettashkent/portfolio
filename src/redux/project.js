import { createSlice } from '@reduxjs/toolkit'
import { apiPortfolio, getprojects, likelink } from './api'

const project = createSlice({
    name: 'project',
    initialState: {
        loading: false,
        project: null,
        error: false,
        err_msg: '',
    },
    reducers: {
        fetching: state => {
            state.loading = true
            state.error = false
        },
        fetched: (state, { payload }) => {
            state.loading = false
            state.project = payload
            state.error = false
        },
        fetchError: (state, { payload }) => {
            state.loading = false
            state.error = true
            state.err_msg = payload
        },
    },
})

export const getProject = id =>
    apiPortfolio({
        url: getprojects + id,
        method: 'get',
        fetching: project.actions.fetching.type,
        fetched: project.actions.fetched.type,
        fetchError: project.actions.fetchError.type,
    })

export const editProject = data =>
    apiPortfolio({
        url: getprojects + data.id,
        method: 'put',
        data,
        fetching: project.actions.fetching.type,
        fetched: project.actions.fetched.type,
        fetchError: project.actions.fetchError.type,
    })

export const deleteProject = id =>
    apiPortfolio({
        url: getprojects + id,
        method: 'delete',
        fetching: project.actions.fetching.type,
        fetched: project.actions.fetched.type,
        fetchError: project.actions.fetchError.type,
    })

export const likeProject = data =>
    apiPortfolio({
        url: getprojects + likelink + data._id,
        method: 'put',
        data,
        fetching: project.actions.fetching.type,
        fetched: project.actions.fetched.type,
        fetchError: project.actions.fetchError.type,
    })

export default project.reducer
