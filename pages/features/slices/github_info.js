import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const owner = process.env.USER

export const getInfo = createAsyncThunk(
    'commits/getInfo',
    async (obj, {dispatch}) => {
        return fetch(`https://api.github.com/users/${owner}`).then(res => 
            res.json()
        )
    }
)

export const github_info = createSlice({
    name: 'github_info',
    initialState: {
        info: {},
        status: null
    },
    extraReducers: {
        [getInfo.pending]: ((state, action) => {
            state.status = 'loading'
        }),
        [getInfo.fulfilled]: ((state, { payload }) => {
            state.info = payload
            state.status = 'succes'
        }),
        [getInfo.rejected]: ((state, action) => {
            state.status = 'failed'
        })
    }
})

export const selected_github_info = (state) => state.github_info.info

export default github_info.reducer