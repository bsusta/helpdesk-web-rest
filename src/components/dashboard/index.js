import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

  render() {
    return(<div>DASHBOARD</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Dashboard);
