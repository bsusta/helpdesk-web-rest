import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';

import {loginUser} from '../../redux/actions';
import Navigation from '../navigation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'admin',
      password:'admin',
    };
  }
  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    if(this.props.authenticated){
      return (<Navigation/>);
    }
    return (
      <Paper elevation={4} style={{width:250}}>
      <Typography type="headline" component="h4">
        Username:
      </Typography>
      <Typography type="body1" component="div">
        <TextField
          label="Username"
          value={this.state.username}
          onChange={this.handleInputChange("username")}
          autoComplete="current-username"
          margin="normal"
        />
      </Typography>
      <Typography type="headline" component="h4">
        Password:
      </Typography>
      <Typography type="body1" component="div">
        <TextField
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange("password")}
          autoComplete="current-password"
          margin="normal"
        />
        </Typography>
      <Typography type="body1" component="div">
        <Button raised color="primary" onClick={()=>this.props.loginUser(this.state.username,this.state.password)}>
          {this.props.loading?<CircularProgress style={{color:'white'}} size={25} />:"Login"}
        </Button>
      </Typography>

      {
        this.props.error &&
        <Typography type="body1" component="div" style={{color:'red'}}>
          Login has failed! Please check your username or password.
        </Typography>
    }
      </Paper>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { authenticated,loading,error } = login;
  return {authenticated, loading,error};
};

export default connect(mapStateToProps, {loginUser})(Login);
