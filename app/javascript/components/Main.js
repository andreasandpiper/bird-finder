import React from "react"
import BirdList from "./BirdList"
import { connect } from "react-redux"
import { searchForBirds } from "./actions"

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lat: '',
      long: '',
      birds: props.birds || []
    }
  }
  render () {
    return (
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="is-one-quarter">
              <div className="field">
                <div className="control">
                  <input
                  type="text"
                  className = "input is-input"
                  name="latitude"
                  placeholder="latitude"
                  value={this.state.lat}
                  onChange={this.handleContentChange.bind(this, 'lat')}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                <input
                type="text"
                name="longitude"
                className = "input is-input"
                placeholder="longitude"
                value={this.state.long}
                onChange={this.handleContentChange.bind(this, 'long')}
                />
                </div>
              </div>

              <div className="field">
                <div className="control">
                <button className="button is-primary" onClick={this.handleSubmit.bind(this)}>Find Birds</button>
                </div>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="container is-fluid">
              < BirdList birds={this.state.birds} />
            </div>
          </section>
        </div>
      </div>
     );
  }

  handleSubmit(e) {
    e.preventDefault()
    const obj = {
      coordinates: {
        lat: this.state.lat,
        long: this.state.long
      }
    }
    this.props.searchForBirds(obj)
  }

  handleContentChange(type, e) {
    this.setState({ [type]: e.target.value });
  }

  componentWillReceiveProps(props){
    this.setState(props)
  }
}

function mapStateToProps(state){
  return {
    birds: state.search.birds
  }
}

export default connect(mapStateToProps, { searchForBirds })(Main)
