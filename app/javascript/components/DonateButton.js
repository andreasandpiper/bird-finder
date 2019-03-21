import React from "react"
import Button from "./Button"
import { connect } from "react-redux"

class DonateButton extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Button css={"button is-link"} label={'Donate'} onClick={this.startPayment.bind(this)} />
    )
  }

  startPayment(e){
    e.preventDefault()
    console.log('start payment')
  }
}

export default DonateButton
