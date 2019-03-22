// CheckoutForm.js
import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      amount: 0
    }
  }

  handleSubmit (e) {
   e.preventDefault();
   if (!this.state.amount) return

   const fullName = `${this.state.firstName} ${this.state.lastName}`
   this.props.stripe.createToken({name: fullName}).then(({token}) => {
     this.sendRequest(token.id)
   });
 }

 sendRequest(token) {
   console.log(this.state.amount)
   const data = {
     'stripeToken': token,
     'amount': this.state.amount
   }



   return fetch('/api/v1/charge', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(data)
   }).then(response => console.log(response))
 }

 handleInputChange(e){
   e.preventDefault
   const type = e.target.name
   const value = e.target.value
   if (type === "amount" && isNaN(value)) return
   this.setState({...this.state, [type]: value})
 }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" onChange={this.handleInputChange.bind(this)} />
        <label htmlFor="lastName">First Name</label>
        <input type="text" name="lastName" onChange={this.handleInputChange.bind(this)} />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" onChange={this.handleInputChange.bind(this)} />

        <CardElement style={{base: {fontSize: '18px'}}} />
        <button>Donate</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
