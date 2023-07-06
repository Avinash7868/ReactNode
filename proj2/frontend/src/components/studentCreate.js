import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StudentCreate = () => {
  const [inputName,setInputName]=useState("");
  const [inputEmail,setInputEmail]=useState("");
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate=useNavigate();
  const handleSubmit=(event) =>{
    event.preventDefault();
    setNameError('');
    setEmailError('');

    // Perform validations
    let isValid = true;

    if (inputName.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    }

    if (inputEmail.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    }

    if(isValid){
    axios.post("http://localhost:4000/create",{inputName,inputEmail})
    .then(res => {
      console.log(res);
      navigate('/');
    })
    .catch(err => console.log("Error in create"))
    
  }}
  return (
    <div className='mainCreate'>
      <div className="childCreate">
        <h2>Create</h2>
        <form onSubmit={handleSubmit} className='form'>
      <div className='name'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="name"
          placeholder='Enter the name'
          onChange={e=>setInputName(e.target.value)}
        />
      {nameError && <p className="error">{nameError}</p>}
      </div>
      
      <div className='email'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="email"
          placeholder='Enter the email'
          onChange={e=>setInputEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <button type="submit" className='button'>Submit</button>
    </form>
      </div>
    </div>
  )
}

export default StudentCreate