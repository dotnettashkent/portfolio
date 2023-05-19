import axios from 'axios'

const middleware =
    ({ dispatch }) =>
    next =>
    action => {
        if (action.type !== 'apiPortfolio') {
            next(action)
            return
        }

        next(action)

        const { method, url, params, data, fetching, fetched, fetchError } = action.payload

        dispatch({ type: fetching })

        axios({
            baseURL: 'https://rmportfoliouz.onrender.com/',
            // baseURL: 'http://localhost:5000/',
            url,
            method,
            params,
            data,
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: fetched,
                        payload: res.data,
                    })
                } else {
                    dispatch({
                        type: fetchError,
                        payload: res.data.message,
                    })
                    console.log(res.data.message)
                }
            })
            .catch(error => {
                dispatch({
                    type: fetchError,
                    payload: error.message,
                })
                console.log(error.message)
            })
    }

export default middleware
