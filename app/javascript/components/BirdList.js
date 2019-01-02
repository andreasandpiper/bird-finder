import React from "react"
import PropTypes from "prop-types"

class BirdList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render () {
    const birds = this.state.data.map(bird => bird.name)
    return (
      <div>
         <h4>Common Birds in Area</h4>
         { birds }
       </div>
     );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.birds })
  }
}

export default BirdList
