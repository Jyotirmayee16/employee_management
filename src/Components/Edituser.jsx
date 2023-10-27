import React,{useEffect,useState} from 'react'
import style from "./homepage.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {

    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")
    let navigate=useNavigate()

    let {obj}=useParams()
    // console.log(obj);

    
    useEffect(()=>{
        axios.get(`http://localhost:3000/employee/${obj}`)
        .then((response)=>{
            console.log(response.data);
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)

        })
        .catch(()=>{
            console.log("errrrrrr");
        })
    },[])

    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={
        name:name,
        salary:salary,
        company:company
        }
        axios.put(`http://localhost:3000/employee/${obj}`,payload)
        .then(()=>{
            window.alert('User updated successfully');
            console.log("Updated");
        })
        .catch(()=>{
            console.log("errrorrr");
        })
        navigate("/users")
    }
       

  return (
    <div id={style.myForm}>
    <table>
    <tr>
        <th colSpan="2">
           <h4>UPDATE USER</h4>
        </th>
    </tr>
    <tr>
        <td><label>Name</label> </td>
        <td>:<input type="text" placeholder="Enter name" value={name} onChange={nameData}/></td>
    </tr>

    <tr>
        <td><label>Salary</label> </td>
        <td>:<input type="number" placeholder="Enter amount" value={salary} onChange={salaryData} /></td>
    </tr>

    <tr>
        <td><label>Company</label> </td>
        <td>:<input type="text" placeholder="Enter company Name " value={company} onChange={companyData}/></td>
    </tr>

    <tr>
        <th colSpan="2"><button onClick={formHandle} >Submit</button></th>
    </tr>
    </table>
    
</div>
  )
}

export default Edituser
