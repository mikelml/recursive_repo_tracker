import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const owner = process.env.USER

export const getRepos = createAsyncThunk(
    'commits/getRepos',
    async (obj, {dispatch}) => {
        return fetch(`https://api.github.com/users/${owner}/repos`).then(res => 
            res.json()
        )
    }
)

export const repos_list = createSlice({
    name: 'repos_list',
    initialState: {
        list: [],
        status: null
    },
    extraReducers: {
        [getRepos.pending]: ((state, action) => {
            state.status = 'loading'
        }),
        [getRepos.fulfilled]: ((state, { payload }) => {
            if(payload.lenght > 0)
                state.list = payload
            state.status = 'succes'
        }),
        [getRepos.rejected]: ((state, action) => {
            state.status = 'failed'
        }),
    }
})

export const selected_repo_list = (state) => state.repos_list.list

export default repos_list.reducer