import React from 'react'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
        <div className='top'>
            Register
            <button className='loginButton'> Sign In</button>
        </div>
        <div className='container'>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Canel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            <div className='input'>
                <input type='email' placeholder='Email Address'/>
                <button className='registerButton'> Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default Register