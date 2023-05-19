import { createSlice } from '@reduxjs/toolkit'
import { apiPortfolio, getcontact } from './api'

const contact = createSlice({
    name: 'contact',
    initialState: {
        loading: false,
        code: '',
        data: {},
        error: false,
    },
    reducers: {
        fetching: state => {
            state.loading = true
            state.error = false
        },
        fetched: (state, { payload }) => {
            state.loading = false
            state.code = payload.code
            state.data = payload.data
            state.error = false
        },
        fetchError: state => {
            state.loading = false
            state.error = true
        },
    },
})

export const getContact = data =>
    apiPortfolio({
        url: getcontact,
        method: 'post',
        data,
        fetching: contact.actions.fetching.type,
        fetched: contact.actions.fetched.type,
        fetchError: contact.actions.fetchError.type,
    })

export default contact.reducer
