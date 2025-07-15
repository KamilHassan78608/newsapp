import React from 'react'

import './Login.css';

export default function SignUp() {
  return (
    <div className='login-body'>
        <div className='container'>
            <h1>Sign UP</h1>
            <input placeholder='User Name' type='text' />
            <input placeholder='Email' type='email'/>
            <input placeholder='Address' type='text' />
            <input placeholder='contact' type='number'/>
            <input placeholder='Password' type='password'/>
            <button>Sign up</button>
            <a href='/'>Create an Account</a>
        </div>
    </div>
  )
}
