import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";

class Companies extends Component {
  constructor(props){
    super(props);
    console.log(this.props.company);
    this.state={
      title:this.props.company?this.props.company.title:'',
    }
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    console.log(this.props.company);
    return(
      <Paper elevation={4}>
        <TextField
          label="Title"
          fullWidth={true}
          value={this.state.title}
          onChange={this.handleInputChange("title")}
        />

      </Paper>
    )
  }
}

const mapStateToProps = ({company}) => {
  return {company:company.company};
};

export default connect(mapStateToProps, {})(Companies);
