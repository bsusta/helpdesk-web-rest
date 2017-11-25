import React, { Component } from 'react';
import { connect } from 'react-redux';
class Login extends Component {
  render() {
    return (<div>Loading...</div>);
  }
}

const mapStateToProps = ({ login }) => {
  const { authenticated,loading } = login;
  return {authenticated, loading};
};

export default connect(mapStateToProps, {})(Login);
