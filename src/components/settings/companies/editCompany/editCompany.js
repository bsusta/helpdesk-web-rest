import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';

import {editCompany} from './../../../../redux/actions';

class Companies extends Component {
  constructor(props){
    super(props);
    this.state={
      title:this.props.company&&this.props.company.title?this.props.company.title:'',
      city:this.props.company&&this.props.company.city?this.props.company.city:'',
      country:this.props.company&&this.props.company.country?this.props.company.country:'',
      street:this.props.company&&this.props.company.street?this.props.company.street:'',
      dic:this.props.company&&this.props.company.dic?this.props.company.dic:'',
      ic_dph:this.props.company&&this.props.company.ic_dph?this.props.company.ic_dph:'',
      ico:this.props.company&&this.props.company.ico?this.props.company.ico:'',
      is_active:this.props.company&&this.props.company.is_active?this.props.company.is_active:'',
      zip:this.props.company&&this.props.company.zip?this.props.company.zip:'',
    }
  }

  submit(){
    let company={
      title:this.state.title,
      ico:this.state.ico,
      dic:this.state.dic,
      ic_dph:this.state.ic_dph,
      street:this.state.street,
      city:this.state.city,
      zip:this.state.zip,
      country:this.state.country
    };
    this.props.editCompany(company,this.props.token,this.props.company.id);
    this.props.history.goBack();
  }

  handleInputChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return(
      <Paper>
        <Typography type="headline" align="left" gutterBottom>
          Company edit
        </Typography>

        <TextField
          label="Title"
          fullWidth={true}
          value={this.state.title}
          onChange={this.handleInputChange("title")}
          />

        <TextField
          label="Street"
          fullWidth={true}
          value={this.state.street}
          onChange={this.handleInputChange("street")}
          />

        <TextField
          label="City"
          fullWidth={true}
          value={this.state.city}
          onChange={this.handleInputChange("city")}
          />

        <TextField
          label="Country"
          fullWidth={true}
          value={this.state.country}
          onChange={this.handleInputChange("country")}
          />

        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={this.state.is_active} onChange={(event,checked)=>this.setState({is_active:checked})} />
            }
            label={this.state.is_active ? 'Active' : 'Inactive'}
            />
        </FormGroup>

        <TextField
          label="DIC"
          type="number"
          fullWidth={true}
          value={this.state.dic}
          onChange={this.handleInputChange("dic")}
          />
        <TextField
          label="IC DPH"
          type="number"
          fullWidth={true}
          value={this.state.ic_dph}
          onChange={this.handleInputChange("ic_dph")}
          />
        <TextField
          label="ICO"
          type="number"
          fullWidth={true}
          value={this.state.ico}
          onChange={this.handleInputChange("ico")}
          />
        <TextField
          label="ZIP"
          type="number"
          fullWidth={true}
          value={this.state.zip}
          onChange={this.handleInputChange("zip")}
          />
        <Button raised color="primary" onClick={this.submit.bind(this)}>
          Save edit
        </Button>
      </Paper>
    )
  }
}

const mapStateToProps = ({company,login}) => {
  const {token} = login;
  return {company:company.company,token};
};

export default connect(mapStateToProps, {editCompany})(Companies);
