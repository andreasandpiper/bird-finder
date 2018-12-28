import React from "react"
import PropTypes from "prop-types"
class Main extends React.Component {
  render () {
    return (
        <div>
          BIRD
        </div>
    );
  }
}

Main.propTypes = {
  greeting: PropTypes.string
};
export default Main
