import React, { Component } from 'react';
import { connect } from 'react-redux';

class Companies extends Component {

  render() {
    return(<div>Companies</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Companies);
