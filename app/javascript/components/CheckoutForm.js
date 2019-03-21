// CheckoutForm.js
import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: ''
    }
  }

  handleSubmit (e) {
   e.preventDefault();
   this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
     console.log('Received Stripe token:', token);
   });

 }

 handleInputChange(e){
   e.preventDefault
   this.setState({...this.state, [e.target.name]: e.target.value})
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" onChange={this.handleInputChange.bind(this)} />
        <label htmlFor="lastName">First Name</label>
        <input type="text" name="lastName" onChange={this.handleInputChange.bind(this)} />

        <CardElement style={{base: {fontSize: '18px'}}} />
        <button>Donate</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
