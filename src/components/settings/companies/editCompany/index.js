import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCompany} from './../../../../redux/actions';
import { CircularProgress } from 'material-ui/Progress';

import EditCompany from './editCompany';
class CompanyEditLoader extends Component {
  constructor(props){
    super(props);
    console.log(this.props.loadingChange);
    this.state={
      currentState:this.props.loadingChange
    };
  }

  componentWillMount(){
    this.props.getCompany(parseInt(this.props.match.params.id,10),this.props.token);
  }

  render() {
    if(this.props.loadingChange==this.state.currentState){
      return(<CircularProgress/>);
    }
    else{
      return(<EditCompany/>)
    }
  }
}

const mapStateToProps = ({login,company}) => {
  const {loadingChange} = company;
  const {token} = login;
  return {token,loadingChange};
};

export default connect(mapStateToProps, {getCompany})(CompanyEditLoader);
