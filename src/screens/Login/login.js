import React from 'react';
import '../Signup/signup.css'
import Button from '../../Components/Button/button'

function Login(props) {
  const { signUpPage, loginBtn, email, password } = props
  return (
    <div>
      <div className='userReg'>
        <div className='signUpForm'>
          <div className='userSignup'>
            LOGIN
          </div>
          <div className='hrow'>

          </div>
          <div className='text'>
            EMAIL
          </div>
          <div className='fields'>
            <input type='email' name='email' onChange={(e) => email(e.target.value)} />
          </div>
          <div className='text'>
            PASSWORD
          </div>
          <div className='fields'>
            <input type='password' name='password' onChange={(e) => password(e.target.value)} />
          </div>
          <div className='fields'>
            <Button name={'Login'} btn={loginBtn} />
          </div>
          <div className='fields'>
            <h4>New Here ?<button className='signuplink' onClick={signUpPage}> SignUp now</button></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
