import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from "material-ui/Typography";
import Button from 'material-ui/Button';

import {startLoadingCompany,getCompanies} from './../../../../redux/actions';

class CompaniesList extends Component {
  componentWillMount(){
    this.props.startLoadingCompany();
    this.props.getCompanies(this.props.token);
  }

  render() {
    if(this.props.loading){
      return(<CircularProgress/>);
    }
    return(
      <Paper>
        <Typography type="headline" align="left" gutterBottom style={{paddingTop:10}}>
          Companies list
          <Button raised color="primary" style={{marginLeft:15}} onClick={()=>this.props.history.push('companies/add/')}>
            Add new
          </Button>
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Is active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.companies.map(company => {
              return (
                <TableRow key={company.id} onClick={()=>this.props.history.push('companies/edit/'+company.id)}>
                  <TableCell>{company.title}</TableCell>
                  <TableCell>{company.street}</TableCell>
                  <TableCell>{company.city}</TableCell>
                  <TableCell>{company.is_active?"Yes":"No"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

const mapStateToProps = ({login,company}) => {
  const {token} = login;
  const {companies,loading} = company;
  return {token,companies,loading};
};

export default connect(mapStateToProps, {startLoadingCompany,getCompanies})(CompaniesList);
