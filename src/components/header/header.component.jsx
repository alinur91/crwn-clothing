import React, { Component } from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'

const Header = ({currentUser,hidden}) => {
  return (
 <div className='header'>

  <Link className='logo-container' to='/'>
     <Logo className='logo'/>
  </Link>
{/*auth.signOut() degen funct provided by firebase  */}
  <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/shop'>CONTACT</Link>
    {currentUser?
    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
    :
    <Link className='option' to='/signin'>SIGN IN</Link>
    }

    <CartIcon/>
  </div>
    {hidden?null: <CartDropdown/>}
 </div>
)
}
/* automatom state peredast v selectCurrentUser i selectCartHidden */
const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,  /* cart degen {hidden: !state.hidden} */
   /* {currentUser: {id:123,email: 123,displayNmae: 133,createdAt: 123}} */
})

export default  connect(mapStateToProps)(Header)