import React from "react"

const BirdItem = (props) => {
  const data = props.data
  return (
    <li>
      <h2>{ data['comName'] }</h2>
      <h4>{ data['sciName'] }</h4>
      <h4>{ data['locName'] }</h4>
    </li>
  )
}

export default BirdItem
