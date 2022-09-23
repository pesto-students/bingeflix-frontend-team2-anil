import React from 'react'
import './login.scss'

const Login  = () => {
  return (
    <div className='login'>
        <div className='top'>
            
        </div>
        <div className='container'>
            <form>
                <h1>Sign In</h1>
                <input type='email' placeholder='Email or phone number' />
                <input type='password' placeholder='Password' />
                <button className='loginButton'>Sign In</button>
                <span>New to Netflix? <b>Sign up now.</b></span>

            </form>
            
        </div>
    </div>
  )
}

export default Login 