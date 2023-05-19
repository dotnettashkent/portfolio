import { createSlice } from '@reduxjs/toolkit'
import { apiPortfolio, getcheck } from './api'

const check = createSlice({
    name: 'check',
    initialState: {
        loading: false,
        check: null,
        error: false,
    },
    reducers: {
        fetching: state => {
            state.loading = true
            state.error = false
        },
        fetched: (state, { payload }) => {
            state.loading = false
            state.check = payload
            state.error = false
        },
        fetchError: state => {
            state.loading = false
            state.error = true
        },
    },
})

export const getCheck = () =>
    apiPortfolio({
        url: getcheck,
        method: 'get',
        fetching: check.actions.fetching.type,
        fetched: check.actions.fetched.type,
        fetchError: check.actions.fetchError.type,
    })

export default check.reducer
