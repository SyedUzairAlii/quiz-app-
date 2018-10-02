import React from 'react';
import './signup.css'
import Button from '../../Components/Button/button'

function SignUp(props) {
  const { name, email, password , btn, loginPage} = props
  return (
    <div>
      <div className='userReg'>
        <div className='signUpForm'>
          <div className='userSignup'>
            SIGNUP
          </div>
          <div className='hrow'>

          </div>
          <div className='text'>
            NAME
          </div>
          <div className='fields'>
            <input type='text' name='name' onChange={(e) => name(e.target.value)} />
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
            <Button name={'SignUp'} btn = {btn}/>
          </div>
          <div className='fields'>
            <h4>Already Registered ?<button className='signuplink' onClick= {loginPage}> Login now</button></h4>
          </div>
        </div>
      </div>
    </div>

  )
}
export default SignUp;
