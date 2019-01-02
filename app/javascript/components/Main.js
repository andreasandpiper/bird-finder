import React from "react"
import PropTypes from "prop-types"
import BirdList from "./BirdList"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      birds: []
    };

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render () {
    return (
      <div>
         <label>Search Birds in Area</label>
         <input
           type="text"
           name="birds"
           placeholder="zipcode"
           value={this.state.content}
           onChange={this.handleContentChange}
         />

         <input type="submit" value="Find Birds" onClick={this.handleSubmit}/>
         < BirdList birds={this.state.birds} />
       </div>
     );
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('/api/v1/search.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ birds: data.birds }) })
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }
}

Main.propTypes = {
  greeting: PropTypes.string
};
export default Main
