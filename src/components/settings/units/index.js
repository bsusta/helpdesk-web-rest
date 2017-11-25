import React, { Component } from 'react';
import { connect } from 'react-redux';

class Units extends Component {

  render() {
    return(<div>Units</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Units);
