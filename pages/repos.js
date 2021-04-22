import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import { getRepos, selected_repo_list } from '../store/slices/repos_list'

export default function Repos() {
  const dispatch = useDispatch()
  const repos_list = useSelector(selected_repo_list)
  
  useEffect(() => {
    dispatch(getRepos({owner: process.env.USER}))
  },[dispatch])

  return (
    <div className={styles.container}>
      <h2 data-aos="fade-up">Repositories</h2>
      <h3 data-aos="fade-up">of</h3>
      <h1 data-aos="fade-up">Mikelml</h1>

      <ul className="commits-container" data-aos="zoom-in" data-aos-delay="500" >
        {
          (repos_list || []).map((item, i)=> 
            <div key={i} className="text-center">{item.name}</div>
          )
        }
      </ul>
    </div>
  )
}
