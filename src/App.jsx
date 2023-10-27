import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import CreateUsers from './Components/CreateUsers'
import Users from './Components/Users'
import Homepage from './Components/Homepage'
import Edituser from './Components/Edituser'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Homepage/>
        <Routes>
          
           <Route path="/" element={<CreateUsers/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
                 <Route path='/edit/:obj'  element={<Edituser/>}></Route> 
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
