import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import { getCommits, selected_commits_list } from './features/commits_list/commits_list'

export default function Home() {
  const dispatch = useDispatch()
  const commits_list = useSelector(selected_commits_list)
  
  useEffect(() => {
    dispatch(getCommits())
  },[dispatch])

  return (
    <div className={styles.container}>
      <h1 data-aos="fade-up">Mikelml</h1>
      <h2 data-aos="fade-up">Recents commits</h2>
      <h3 data-aos="fade-up">of</h3>
      <h2 data-aos="fade-up">recursive_repo_tracker</h2>

      <ul className="commits-container" data-aos="zoom-in" data-aos-delay="500" >
        {
          [6,7,8,9,10].map((item, i)=> 
            <div key={i} className="text-center">commit example {item}</div>
          )
        }
        {
          commits_list.map((item, i)=> 
            <div key={i} className="text-center">{item.commit.message}</div>
          )
        }
      </ul>
    </div>
  )
}
