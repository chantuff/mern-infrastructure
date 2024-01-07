import React from 'react'
import SignUpForm from '../components/SignUpForm.jsx'
import LogInForm from '../components/LogInForm.jsx'

function AuthPage(props) {
  return (
    <>
    <h1>AuthPage</h1>
    <SignUpForm setUser={props.setUser}/>
    <LogInForm setUser={props.setUser} />
    </>
  )
}

export default AuthPage