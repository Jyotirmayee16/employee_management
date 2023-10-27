import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from './homepage.module.css'
import { Link } from 'react-router-dom'

const Users = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/employee')
      .then((response) => {
        setContent(response.data)
        console.log('Got the data')
      })
      .catch((error) => {
        console.error('Failed to get data', error)
      })
  }, [])

  let deleteUser=(x)=>{
    axios.delete(`http://localhost:3000/employee/${x}`)
    
    .then((response) => {
      setContent(response.data)
      console.log('Got the data')
    })
    .catch((error) => {
      console.error('Failed to get data', error)
    })
    window.location.assign("/users")


  }

  return (
    <div id={style.homeUser}>
      {content.map((x) => (
        <div key={x.id}>
          <table>
            <tbody>
              <tr>
                <th colSpan="2">Employee {x.id}</th>
              </tr>
              <tr>
                <td>Name:</td>
                <td>{x.name}</td>
              </tr>
              <tr>
                <td>Salary:</td>
                <td>{x.salary}</td>
              </tr>
              <tr>
                <td>Company:</td>
                <td>{x.company}</td>
              </tr>
              <tr>
                <td>
                  <button>
                    <Link to={`/edit/${x.id}`}>Edit</Link>
                  </button>
                  <button onClick={()=>{deleteUser(x.id)}}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default Users
