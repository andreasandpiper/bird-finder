import React from "react"
import PropTypes from "prop-types"
import BirdList from "./BirdList"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };

    this.handleContentChange = this.handleContentChange.bind(this);
  }

  render () {
    return (
      <div>
         <label>Search Birds in Area</label>
         <input
           type="text"
           name="birds"
           value={this.state.content}
           onChange={this.handleContentChange}
         />

         <input type="submit" value="Find Birds" />
         < BirdList />
       </div>
     );
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }
}

Main.propTypes = {
  greeting: PropTypes.string
};
export default Main
