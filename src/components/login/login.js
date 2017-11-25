import React, { Component } from "react";
import { connect } from "react-redux";

import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import { CircularProgress } from "material-ui/Progress";

import { loginUser } from "../../redux/actions";
import Navigation from "../navigation";
import styles from "./styles";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "admin"
    };
  }
  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    if (this.props.authenticated) {
      return <Navigation />;
    }
    return (
      <Paper elevation={4} style={styles.loginPaper}>
        <Typography type="headline" align="center" gutterBottom>
          LanHelpdesk 4.0
        </Typography>
        <TextField
          label="Username"
          fullWidth={true}
          value={this.state.username}
          onChange={this.handleInputChange("username")}
          autoComplete="current-username"
        />
        <TextField
          fullWidth={true}
          label="Password"
          type="password"
          value={this.state.password}
          onChange={this.handleInputChange("password")}
          autoComplete="current-password"
          margin="normal"
        />
        <div>
          <Button
            style={styles.loginButton}
            raised
            color="primary"
            onClick={() =>
              this.props.loginUser(this.state.username, this.state.password)
            }
          >
            {this.props.loading ? (
              <CircularProgress style={{ color: "white" }} size={25} />
            ) : (
              "Login"
            )}
          </Button>
        </div>
        {this.props.error && (
          <Typography type="body1" component="div" style={{ color: "red" }}>
            Login has failed! Please check your username or password.
          </Typography>
        )}
      </Paper>
    );
  }
}

const mapStateToProps = ({ login }) => {
  const { authenticated, loading, error } = login;
  return { authenticated, loading, error };
};

export default connect(mapStateToProps, { loginUser })(Login);
