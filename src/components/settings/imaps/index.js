import React, { Component } from 'react';
import { connect } from 'react-redux';

class IMAPs extends Component {

  render() {
    return(<div>IMAPs</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(IMAPs);
