import React from "react"
import PropTypes from "prop-types"

class BirdList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
         <h4>Common Birds in Area</h4>
       </div>
     );
  }
}

BirdList.propTypes = {
  greeting: PropTypes.string
};

export default BirdList
