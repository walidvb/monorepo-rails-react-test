import React from "react"
import PropTypes from "prop-types"
import reverser from 'dep-test'

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Reversed by dependency: {reverser(this.props.greeting)}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
