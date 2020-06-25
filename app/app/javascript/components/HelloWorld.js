import React from "react"
import PropTypes from "prop-types"
import reverser from 'dep-test/index'
import DepComp from 'dep-test/DepComp'

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Reversed by dependency: {reverser(this.props.greeting)}
        <DepComp name={'Rendered by dependency!'}/>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
