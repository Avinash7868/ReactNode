import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const StudentUpdate = () => {
    const [inputName,setInputName]=useState("");
    const [inputEmail,setInputEmail]=useState("");
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const {id}=useParams();
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
    axios.put("http://localhost:4000/update/"+id,{inputName,inputEmail})
    .then(res => {
      console.log(res);
      navigate('/');
    })
    .catch(err => console.log("Error in create"))
    }
  }
  return (
    <div className='mainCreate'>
      <div className="childCreate">
        <h2>Update</h2>
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
      <button type="submit" className='button'>Update</button>
    </form>
      </div>
    </div>
  )
}

export default StudentUpdate;