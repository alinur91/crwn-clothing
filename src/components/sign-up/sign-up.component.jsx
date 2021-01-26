import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.component.scss'

class SignUP extends React.Component {
  constructor(){
    super()
    this.state={displayName: '',email: '',password: '',confirmPassword:''}
  }

  handleSubmit =async e =>{
    e.preventDefault()
    const{displayName,email,password,confirmPassword}=this.state
    if(password !== confirmPassword){
      alert('Doesnt match') 
      return
    }

    try{
      const {user} = await auth.createUserWithEmailAndPassword(email,password)
        /* user degen userAuth */
       await createUserProfileDocument(user,{displayName}) /* sign in bolady */
       this.setState({displayName: '',email: '',password: '',confirmPassword:''}) /* clear our form */
    }catch(error){
        console.log(error)
    }
  }

  handleChange = e =>{
    const {name,value} = e.target
    this.setState({[name]: value})
  }
  

  render() {
    const{displayName,email,password,confirmPassword}=this.state
    return (
      <div className="sign-up">
          <h2 className="title">I do not have an account </h2>
          <span>Sign up with your email and password</span>
          <form onSubmit={this.handleSubmit} className="sign-up-form">
              <FormInput required label='Display Name' onChange={this.handleChange} value={displayName} name="displayName" type="text"></FormInput>

              <FormInput required label='Email' onChange={this.handleChange} value={email} name="email" type="email"></FormInput>

              <FormInput required label='Password' onChange={this.handleChange} value={password} name="password" type="password"></FormInput>

              <FormInput required label='Confirm Password' onChange={this.handleChange} value={confirmPassword} name="confirmPassword" type="password"></FormInput>

              <CustomButton type="submit">SIGN UP</CustomButton>
          </form>
      </div>
    )
  }


}


export default SignUP
























// import React, { Component } from 'react'
// import FormInput from '../form-input/form-input.component'
// import CustomButton from '../custom-button/custom-button.component'
// import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'

// import './sign-up.component.scss'

// class SignUp extends Component{
//  constructor(){
//   super()
//    this.state={
//     displayName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//    }

//  }

//  handleSubmit = async event => {
//   event.preventDefault()
//   const {displayName,email,password,confirmPassword}= this.state

//   if(password !== confirmPassword){
//     alert('passwords don\'t match')
//     return
//   }

//   try{
//     const {user} = await auth.createUserWithEmailAndPassword(email,password)
//     await createUserProfileDocument(user, {displayName})
//     this.setState({
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
//   this.setState({[name]: value})

//  }

//  render(){
//   const {displayName,email,password,confirmPassword}= this.state
//   return (
//    <div className="sign-up">
//     <h2 className="title">I do not have an account </h2>
//     <span>Sign up with your email and password</span>
//     <form onSubmit={this.handleSubmit} className="sign-up-form">
//        <FormInput
//         type='text'
//         name='displayName'
//         value={displayName}
//         onChange={this.handleChange}
//         label='Display Name'
//         required
//        />
//        <FormInput
//         type='email'
//         name='email'
//         value={email}
//         onChange={this.handleChange}
//         label='email'
//         required
//        />
//        <FormInput
//         type='password'
//         name='password'
//         value={password}
//         onChange={this.handleChange}
//         label='password'
//         required
//        />
//        <FormInput
//         type='password'
//         name='confirmPassword'
//         value={confirmPassword}
//         onChange={this.handleChange}
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