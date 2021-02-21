import React,{useState} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.component.scss'
import {signUpStart} from '../../redux/user/user.action'
import {connect} from 'react-redux'

const SignUP=({signUpStart})=> {
   const [userCredentials,setUserCredentials]= useState({displayName:'',email:'',password:'',confirmPassword:''})
  
    const{displayName,email,password,confirmPassword}=userCredentials

  const handleSubmit =async e =>{
    e.preventDefault()
    if(password !== confirmPassword){
      alert('Doesnt match') 
      return
    }
    signUpStart({displayName,email,password})
  }

  const handleChange = e =>{
    const {name,value} = e.target
    setUserCredentials({...userCredentials,[name]: value})
  }
  
    return (
      <div className="sign-up">
          <h2 className="title">I do not have an account </h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={handleSubmit} className="sign-up-form">
              <FormInput required label='Display Name' onChange={handleChange} value={displayName} name="displayName" type="text"></FormInput>

              <FormInput required label='Email' onChange={handleChange} value={email} name="email" type="email"></FormInput>

              <FormInput required label='Password' onChange={handleChange} value={password} name="password" type="password"></FormInput>

              <FormInput required label='Confirm Password' onChange={handleChange} value={confirmPassword} name="confirmPassword" type="password"></FormInput>

              <CustomButton type="submit">SIGN UP</CustomButton>
          </form>
      </div>
    )
  }



export default connect(null,{signUpStart})(SignUP)
























// import React, { Component } from 'react'
// import FormInput from '../form-input/form-input.component'
// import CustomButton from '../custom-button/custom-button.component'
// import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

// import './sign-up.component.scss'

// class SignUp extends Component{
//  constructor(){
//   super()
//    state={
//     displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//    }

//  }

//  handleSubmit = async event => {
//   event.preventDefault()
//   const {displayName,email,password,confirmPassword}= state

//   if(password !== confirmPassword){
//     alert('passwords don\'t match')
//     return
//   }

//   try{
//     const {user} = await auth.createUserWithEmailAndPassword(email,password)
//     await createUserProfileDocument(user, {displayName})
//     setState({
//       displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//     })
//   }catch(error){
//     console.error(error)
//   }

//  }

//  handleChange = e =>{
//   const {name,value} = e.target
//   setState({[name]: value})

//  }

//  render(){
//   const {displayName,email,password,confirmPassword}= state
//   return (
//    <div className="sign-up">
//     <h2 className="title">I do not have an account </h2>
//     <span>Sign up with your email and password</span>
//     <form onSubmit={handleSubmit} className="sign-up-form">
//        <FormInput
//         type='text'
//         name='displayName'
//         value={displayName}
//         onChange={handleChange}
//         label='Display Name'
//         required
//        />
//        <FormInput
//         type='email'
//         name='email'
//         value={email}
//         onChange={handleChange}
//         label='email'
//         required
//        />
//        <FormInput
//         type='password'
//         name='password'
//         value={password}
//         onChange={handleChange}
//         label='password'
//         required
//        />
//        <FormInput
//         type='password'
//         name='confirmPassword'
//         value={confirmPassword}
//         onChange={handleChange}
//         label='Confirm Password'
//         required
//        />
//        <CustomButton type='submit'>
//         SIGN UP
//        </CustomButton>
//     </form>
//    </div>
//   )
//  }
// }

// export default SignUp