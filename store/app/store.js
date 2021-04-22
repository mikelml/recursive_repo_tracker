import { configureStore } from '@reduxjs/toolkit'
import commits_list from '../slices/commits_list'
import repos_list from '../slices/repos_list'
import github_info from '../slices/github_info'

export default configureStore({
    reducer: {
        commits_list,
        repos_list,
        github_info
    },
})