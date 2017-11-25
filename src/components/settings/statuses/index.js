import React, { Component } from 'react';
import { connect } from 'react-redux';

class Statuses extends Component {

  render() {
    return(<div>Statuses</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Statuses);
