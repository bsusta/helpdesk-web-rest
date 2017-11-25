import React, { Component } from 'react';
import { connect } from 'react-redux';

class Roles extends Component {

  render() {
    return(<div>Roles</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Roles);
