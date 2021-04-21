import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const owner = 'mikelml', repo = 'recursive_repo_tracker'
export const getCommits = createAsyncThunk(
    'commits/getCommits',
    async (obj, {dispatch}) => {
        return fetch(`https://api.github.com/repos/${owner}/${repo}/commits`).then(res => 
            res.json()
        )
    }
)

export const commits_list = createSlice({
    name: 'commits_list',
    initialState: {
        list: null,
        status: null
    },
    extraReducers: {
        [getCommits.pending]: ((state, action) => {
            state.status = 'loading'
        }),
        [getCommits.fulfilled]: ((state, { payload }) => {
            state.list = payload
            state.status = 'succes'
        }),
        [getCommits.rejected]: ((state, action) => {
            state.status = 'failed'
        })
    }
})

export default commits_list.reducer