import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {

 state={
  email:'',
  password:'',
 }

 handleSubmit = (e)=>{
  e.preventDefault()

  this.setState({ email: "", password:''});

 }

 handleChange = e =>{
  const {name,value} = e.target
  this.setState({ [name]: value });

 }

 render(){
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput
          label="email"
          name="email"
          id="email"
          required
          type="email"
          value={this.state.email}
          handleChange={this.handleChange}
        />

        <FormInput
          label="password"
          name="password"
          id="password"
          required
          type="password"
          value={this.state.password}
          handleChange={this.handleChange}
        />

        <div className="buttons">
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton  onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      
      </form>
    </div>
  );
 }
}

export default SignIn;