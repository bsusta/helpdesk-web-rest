import React, { Component } from 'react';
import { connect } from 'react-redux';

class Attributes extends Component {

  render() {
    return(<div>Task attributes</div>)
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Attributes);
