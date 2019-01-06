import React from "react"
import PropTypes from "prop-types"
import BirdList from "./BirdList"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: '',
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
           name="latitude"
           placeholder="latitude"
           value={this.state.lat}
           onChange={this.handleContentChange.bind(this, 'lat')}
         />
         <input
           type="text"
           name="longitude"
           placeholder="longitude"
           value={this.state.long}
           onChange={this.handleContentChange.bind(this, 'long')}
         />

         <input type="submit" value="Find Birds" onClick={this.handleSubmit}/>
         < BirdList birds={this.state.birds} />
       </div>
     );
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch(`/api/v1/search.json?lat=${this.state.lat}&long=${this.state.long}`)
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ birds: data.birds }) })
  }

  handleContentChange(type, e) {
    this.setState({ [type]: e.target.value });
  }
}

Main.propTypes = {
  greeting: PropTypes.string
};
export default Main
