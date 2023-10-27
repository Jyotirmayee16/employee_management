import axios from 'axios'
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./homepage.module.css"
const CreateUsers=()=>{

    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let navigate=useNavigate()


    let nameData=(e)=>{
        setName(e.target.value)
    }

    let salaryData=(e)=>{
        setSalary(e.target.value)
    }

    let comapanyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandled=(e)=>{
        e.preventDefault()
        // console.log(name,salary,company);
        let payload={name,salary,company}
        axios.post("http://localhost:3000/employee",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED");
        })
        .catch(()=>{
            console.log("SOMETHING IS WRONG");
        })

         navigate("/users")
    }

    return(
        <div id={style.myForm}>
            <table>
            <tr>
                <th colSpan="2">
                   <h4>User Details</h4>
                </th>
            </tr>
            <tr>
                <td><label>Name</label> </td>
                <td>:<input type="text" placeholder="Enter name" value={name} onChange={nameData}/></td>
            </tr>

            <tr>
                <td><label>Salary</label> </td>
                <td>:<input type="number" placeholder="Enter amount" value={salary} onChange={salaryData}/></td>
            </tr>

            <tr>
                <td><label>Company</label> </td>
                <td>:<input type="text" placeholder="Enter company Name " value={company} onChange={comapanyData}/></td>
            </tr>

            <tr>
                <th colSpan="2"><button onClick={formHandled}>Submit</button></th>
            </tr>
            </table>
            
        </div>

    )
}
export default CreateUsers
