import React from "react"

const BirdItem = (props) => {
  const data = props.data
  return (
    <li className="box">
      <h2>{ data['comName'] }</h2>
      <h4>{ data['sciName'] }</h4>
      <h4>{ data['locName'] }</h4>
      <h4>{ data['howMany'] }</h4>
    </li>
  )
}

export default BirdItem
