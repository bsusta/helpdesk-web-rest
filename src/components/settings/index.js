import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from "material-ui/Typography";

class Dashboard extends Component {

  render() {
    return(
      <Paper style={{maxWidth:1280,margin:'auto',display:'block'}}>
        <Typography type="headline" align="left" gutterBottom>
          Settings
        </Typography>
        <Table>
          <TableBody>
          <TableRow onClick={()=>this.props.history.push('/settings/companies')}>
            <TableCell>Companies</TableCell>
          </TableRow>
          <TableRow onClick={()=>this.props.history.push('/settings/imaps')}>
          <TableCell>IMAPs</TableCell>
          </TableRow>
          <TableRow onClick={()=>this.props.history.push('/settings/roles')}>
            <TableCell>Roles</TableCell>
          </TableRow>
          <TableRow onClick={()=>this.props.history.push('/settings/smtps')}>
            <TableCell>SMTPs</TableCell>
          </TableRow>
          <TableRow onClick={()=>this.props.history.push('/settings/statuses')}>
            <TableCell>Statuses</TableCell>
          </TableRow>
          <TableRow onClick={()=>this.props.history.push('/settings/task-attributes')}>
            <TableCell>Task attributes</TableCell>
          </TableRow>
          <TableRow onClick={()=>this.props.history.push('/settings/units')}>
            <TableCell>Units</TableCell>
          </TableRow>
          <TableRow onClick={()=>this.props.history.push('/settings/users')}>
            <TableCell>Users</TableCell>
          </TableRow>
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default Dashboard;