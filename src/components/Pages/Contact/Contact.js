import React, { useState } from 'react';
import Navbar from '../../Header/Navbar';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const initValue = {
    name:'',
    email:'',
    number:'',
    message:''
  }
  const [value,setValue] = useState(initValue)
  const handleOnSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://portfolio-4y17.onrender.com/form' , {
        method:'POST',
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(value)
      })

      const body = await res.json();
      console.log(body)

      if(body.status==="Success"){
        setValue(initValue)
        navigate('/')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleOnChange = (e) => {
    setValue({...value , [e.target.name]:e.target.value})
  }
  return (
    <>
      <Navbar />
      <div className='form-box'>
        <div className="form-details">
          <h2 className='form-title'>Do you have any <br />Projects? Let's Talk</h2>
          <div className='contacts1'>
            <p>Design for</p>
            <p style={{ fontSize: "30px",fontWeight:"700" }}>Web & Mobile</p>
          </div>
          <div className='contacts2'>
            <p>Phone</p>
            <p style={{ fontSize: "30px", color: "rgb(173, 173, 173)",fontWeight:"700" }}>+91 7017978857</p>
          </div>
          <div className='contacts3'>
            <p>Drop Your Message</p>
            <p style={{ fontSize: "30px", color: "rgb(173, 173, 173)",fontWeight:"700" }}>sdhama380@gmail.com</p>
          </div>
        </div>

        {/* -------------------------------------second part----------- */}

        <div className="form-fields">
          <div className='form-title2'>
            <h1>Fill the Form</h1>
          </div>

          <div className='form-inputs'>
            {/* Form to capture user input */}
            <form onSubmit={handleOnSubmit}>
              <input type='text' placeholder='Enter Your Name' className='form-inner' name='name' onChange={handleOnChange} /><br />
              <input type='email' placeholder='Enter Your Email' className='form-inner' name='email' onChange={handleOnChange} /><br />
              <input type='number' placeholder='Enter Your Mobile Number' className='form-inner' name='number' onChange={handleOnChange} /><br />
              <textarea className='form-inner' rows='4' cols='50' placeholder='Enter Your Message....' name='message' onChange={handleOnChange}></textarea>
              {/* Submit button to trigger form submission */}
              <button type='submit' onClick={handleOnSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;