import React, { useState } from 'react'

export default function Form() {
   

const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
    ...formData,
      [e.target.name]: e.target.value,
      
    });
  };
  function handleSubmit(){
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };
  return (
    <>
  
 <form onSubmit={handleSubmit} id='form'>
  <input type="text"  placeholder='Enter Name' name='name'
    onChange={handleChange}/>
    <input type="email"  placeholder='Enter Email' name='email'
    onChange={handleChange}/>
    <input type="password"  placeholder='Enter Password' name='password'
     onChange={handleChange}/>

   <button type='submit' >Submit</button>
    
 </form>
     

   
    </>
  )
}