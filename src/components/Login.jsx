import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <div className='login-body'>
        <div className='container'>
            <h1>Login</h1>
            <input placeholder='User Name' type='text' />
            <input placeholder='Email' type='email'/>
            <input placeholder='Password' type='password'/>
            <button>Login</button>
            <a href='/'>Already Have an Account</a>
        </div>
    </div>
  )
}
