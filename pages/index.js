import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from '../styles/Home.module.css'
import { getCommits } from './features/commits_list/commits_list'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCommits())
  },[dispatch])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello tracker</h1>
    </div>
  )
}
