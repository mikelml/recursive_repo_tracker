import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getCommits = createAsyncThunk(
    'commits/getCommits',
    async (param, {dispatch}) => {
        debugger
        return fetch(`https://api.github.com/repos/${param.owner}/${param.repo}/commits`).then(res => 
            res.json()
        )
    }
)

export const commits_list = createSlice({
    name: 'commits_list',
    initialState: {
        list: [],
        info: {},
        status: null
    },
    extraReducers: {
        [getCommits.pending]: ((state, action) => {
            state.status = 'loading'
        }),
        [getCommits.fulfilled]: ((state, { payload }) => {
            if(payload.length > 0)
                state.list = payload
            state.status = 'succes'
        }),
        [getCommits.rejected]: ((state, action) => {
            state.status = 'failed'
        }),
    }
})

export const selected_commits_list = (state) => state.commits_list.list

export default commits_list.reducer