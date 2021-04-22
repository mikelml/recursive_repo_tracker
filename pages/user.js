import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import { getInfo, selected_commits_info } from './features/commits_list/commits_list'

export default function User() {
  const dispatch = useDispatch()
  const commits_info = useSelector(selected_commits_info)
  
  useEffect(() => {
    dispatch(getInfo())
  },[dispatch])

  return (
    <div className={styles.container}>
      {(commits_info || {}).login}
    </div>
  )
}
