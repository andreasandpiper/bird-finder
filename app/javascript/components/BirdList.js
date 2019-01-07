import React from "react"
import PropTypes from "prop-types"
import BirdItem from "./BirdItem"

class BirdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render () {
    let birds = this.state.data.map( (bird, index) => {
      return <BirdItem key={index} data={bird} />
    })

    return (
      <div>
         <ul>
           { birds }
         </ul>
       </div>
     );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.birds })
  }
}

export default BirdList
