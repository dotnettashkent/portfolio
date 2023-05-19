import { createSlice } from '@reduxjs/toolkit'
import { apiPortfolio, getothers } from './api'

const others = createSlice({
    name: 'others',
    initialState: {
        loading: false,
        others: {},
        error: false,
    },
    reducers: {
        fetching: state => {
            state.loading = true
            state.error = false
        },
        fetched: (state, { payload }) => {
            state.loading = false
            state.others = payload
            state.error = false
        },
        fetchError: state => {
            state.loading = false
            state.error = true
        },
    },
})

export const getOthers = () =>
    apiPortfolio({
        url: getothers,
        method: 'get',
        fetching: others.actions.fetching.type,
        fetched: others.actions.fetched.type,
        fetchError: others.actions.fetchError.type,
    })

export default others.reducer
