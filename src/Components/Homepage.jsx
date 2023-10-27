import React from 'react'
import style from './homepage.module.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <section id={style.nav}>
            
            <Link to= "/">Create-users</Link>
            <Link to="/users">Users</Link>
         

 </section>
    </div>
  )
}

export default Homepage
