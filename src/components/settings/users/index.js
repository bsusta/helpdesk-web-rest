import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return(<div>Users</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Users);
