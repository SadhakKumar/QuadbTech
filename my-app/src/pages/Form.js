import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './form.css'
import { useLocation } from 'react-router-dom'

function Form() {
    const list = useLocation().state.list;
    const [user,setUser] = useState({
        name:"",
        age: "",
        phoneNo: "",
        number: "",
    })
    const handlechange = (e) => {
        const {name, value} = e.target;
    
        setUser({
          ...user,
          [name]: value
        })
      }
  return (
    <>
        <Navbar/>

        <div className='container'>
            <div className='form_heading'><h1>Book tickets for: {list.show.name}</h1></div>
            <input type="text" placeholder='Name' name='name' value={user.name} onChange={handlechange}/>
            <input type="text" placeholder='Age' name='age' value={user.age} onChange={handlechange}/>
            <input type="text" placeholder='Phone Number' name='phoneNo' value={user.phoneNo} onChange={handlechange}/>
            <input type="text" placeholder='Number of tickets' name='number' value={user.number} onChange={handlechange}/>
            <button type="button" class="btn btn-primary">BOOK</button>
        
         </div>
    </>
    
  )
}

export default Form
