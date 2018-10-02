import React, { Component } from 'react';
import './App.css';
import Signup from './screens/Signup/signup'
import Login from './screens/Login/login'
import swal from 'sweetalert2'
import Container from './Container/container/container'
import Dashboard from './screens/Dashboard/dashboard'

class App extends Component {
  constructor() {
    super()

    const user = localStorage.getItem('user')
    const login = localStorage.getItem('login')

    this.state = {
      user: user,
      login: login,
      signup: {
        name: '',
        email: '',
        password: '',
      }
    }

    this.name = this.name.bind(this)
    this.email = this.email.bind(this)
    this.password = this.password.bind(this)
    this.btn = this.btn.bind(this)
    this.signUpPage = this.signUpPage.bind(this)
    this.loginPage = this.loginPage.bind(this)
    this.loginBtn = this.loginBtn.bind(this)
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)

  }

  signUpPage() {
    this.setState({
      user: false
    })
  }

  loginPage() {
    this.setState({
      user: true
    })
  }

  name(value) {
    const { signup } = this.state
    signup.name = value
    this.setState({
      signup
    })
  }

  email(value) {
    const { signup } = this.state
    signup.email = value
    this.setState({
      signup
    })
  }

  password(value) {
    const { signup } = this.state
    signup.password = value
    this.setState({
      signup
    })
  }

  btn() {
    const { name, email, password } = this.state.signup
    name && email && password ?
      this.signUp()
      :
      swal({
        type: 'warning',
        title: '',
        text: 'Fill the Empty fields',
      })

  }

  login() {
    localStorage.setItem('login', true)
    this.setState({
      login: true
    })

    swal({
      position: 'center',
      type: 'success',
      title: 'Login Successfull',
      showConfirmButton: false,
      timer: 1500
    })
  }

  logout() {
    localStorage.setItem('login', '')
    this.setState({
      login: false
    })
  }

  signUp() {
    const { signup } = this.state
    localStorage.setItem('signUp', JSON.stringify(signup))
    this.setState({ user: true })
    localStorage.setItem('user', true)
  }

  loginBtn() {
    const { signup } = this.state
    const loginDetails = JSON.parse(localStorage.getItem('signUp'))
    if (loginDetails) {
      const { email, password } = loginDetails
      signup.email === email && signup.password === password ?
        this.login()
        :
        swal({
          type: 'error',
          title: 'Error',
          text: 'Wrong Credentials',
        })
    }else{
      swal({
        type: 'error',
        title: 'Error',
        text: 'You are not registered',
      })
    }
  }

  render() {
    const { user, login } = this.state
    return (
      <div className="App">
        <Container login={login} logout={this.logout}>
          {
            !user && !login &&
            <Signup name={this.name} email={this.email} password={this.password} btn={this.btn} loginPage={this.loginPage} />
          }
          {
            user && !login &&
            <Login signUpPage={this.signUpPage} loginBtn={this.loginBtn} email={this.email} password={this.password} />
          }
          {
            user && login &&
            <Dashboard />
          }
        </Container>
      </div>
    );
  }
}

export default App;
