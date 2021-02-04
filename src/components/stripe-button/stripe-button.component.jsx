import React from 'react' 
import  StripeCheckout from 'react-stripe-checkout' /* yarn add react-stripe-checkout */

const StripeCheckoutButton = ({price})=>{
 const priceForStripe = price * 100
 const publishableKey= `pk_test_51IHCwFArH9YrzfLyd9zAbYUiAE8a1rIgjss9DhsvC6sViIVC9to8mnedfwKwPuMAflP9Hz8Dk8KwzIvrOaU6e65N00fZbO0BVX`

 const onToken = token=>{
  console.log(token)
  alert('Payment succ')
 }

 return (
  <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
 )
}

export default StripeCheckoutButton