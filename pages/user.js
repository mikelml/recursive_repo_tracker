import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Home.module.css'
import { getInfo, selected_github_info } from './features/slices/github_info'

export default function User() {
  const dispatch = useDispatch()
  const github_info = useSelector(selected_github_info)
  
  useEffect(() => {
    dispatch(getInfo())
  },[dispatch])

  return (
    <div className={styles.container}  data-aos="zoom-in">
        <div className="user-card-container">
            <div className="user-card-info">
                <img className="user-img" src={github_info.avatar_url}></img>
                <div className="user-info full-width">
                    <div className="flex-row space-between">
                        <div className="user-data-field flex-row align-center">
                            <span class="material-icons">face</span>
                            {(github_info || {}).login || 'Not specified'}
                        </div>
                        <div className="user-data-field flex-row align-center">
                            <span class="material-icons">apartment</span> 
                            {(github_info || {}).company || 'Not specified'}
                        </div>
                    </div>
                    <div className="flex-row space-between">
                        <div className="user-data-field flex-row align-center">
                            <span class="material-icons">location_on</span>
                            {(github_info || {}).location || 'Not specified'}
                        </div>
                        <div className="user-data-field flex-row align-center">
                            <span class="material-icons">email</span>
                            {(github_info || {}).email || 'Not specified'}
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-card-actions">
                <div className="flex-row space-between">
                    <div className="flex-column align-center">
                        {(github_info || {}).following}
                        <div>Following</div>
                    </div>
                    <div className="flex-column align-center">
                        {(github_info || {}).followers}
                        <div>Followers</div>
                    </div>
                    <div className="flex-column align-center">
                        <div>{(github_info || {}).public_repos}</div>
                        Repos 
                    </div>
                    <div className="flex-row align-center">
                        <a href={(github_info || {}).url} className="profile-link">View Profile</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
