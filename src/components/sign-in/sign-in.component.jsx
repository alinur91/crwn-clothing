import React, { Component } from 'react'
import './sign-in.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'

import {connect} from 'react-redux'


class SignIn extends Component {
 state={
  email:'',
  password:'',
 }

 handleSubmit = async e =>{
  e.preventDefault()
  const {emailSignInStart}=this.props
  const {email,password} = this.state
  emailSignInStart(email,password)
 }

 handleChange = e =>{
  const {name,value} = e.target
  this.setState({ [name]: value });
 }

 render(){
   const {googleSignInStart} = this.props
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
        <CustomButton type='button'  onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      
      </form>
    </div>
  );
 }
}

const mapDispatchToProps = dispatch =>({
  googleSignInStart: ()=> dispatch(googleSignInStart()),
  emailSignInStart: (email,password)=> dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn)