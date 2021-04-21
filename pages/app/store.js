import { configureStore } from '@reduxjs/toolkit'
import commits_list from '../features/commits_list/commits_list'

export default configureStore({
    reducer: {
        commits_list
    },
})