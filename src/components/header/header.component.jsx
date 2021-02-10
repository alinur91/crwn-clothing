import React, { Component } from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles'

const Header = ({currentUser,hidden}) => {
  return (
 <HeaderContainer>

  <LogoContainer to='/'>
     <Logo className='logo'/>
  </LogoContainer>
{/*auth.signOut() degen funct provided by firebase  */}
  <OptionsContainer>
    <OptionLink to='/shop'>SHOP</OptionLink>
    <OptionLink to='/shop'>CONTACT</OptionLink>
    {currentUser?
    <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
    :
    <OptionLink to='/signin'>SIGN IN</OptionLink>
    }

    <CartIcon/>
  </OptionsContainer>
    {hidden?null: <CartDropdown/>}
 </HeaderContainer>
)
}
/* automatom state peredast v selectCurrentUser i selectCartHidden */
const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,  /* cart degen {hidden: !state.hidden} */
   /* {currentUser: {id:123,email: 123,displayNmae: 133,createdAt: 123}} */
})

export default  connect(mapStateToProps)(Header)