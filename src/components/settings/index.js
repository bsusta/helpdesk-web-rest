import React, { Component } from "react";
import Table, { TableBody, TableCell, TableRow } from "material-ui/Table";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

const style = {
  paper: {
    maxWidth: 1280,
    margin: "auto",
    display: "block",
    padding: 15
  },
  paperHeading: {
    paddingLeft: 16
  }
};

class Dashboard extends Component {
  render() {
    return (
      <Paper style={style.paper}>
        <Typography
          style={style.paperHeading}
          type="headline"
          align="left"
          gutterBottom
        >
          Settings
        </Typography>
        <Table>
          <TableBody>
            <TableRow
              onClick={() => this.props.history.push("/settings/companies")}
            >
              <TableCell>Companies</TableCell>
            </TableRow>
            <TableRow
              onClick={() => this.props.history.push("/settings/imaps")}
            >
              <TableCell>IMAPs</TableCell>
            </TableRow>
            <TableRow
              onClick={() => this.props.history.push("/settings/roles")}
            >
              <TableCell>Roles</TableCell>
            </TableRow>
            <TableRow
              onClick={() => this.props.history.push("/settings/smtps")}
            >
              <TableCell>SMTPs</TableCell>
            </TableRow>
            <TableRow
              onClick={() => this.props.history.push("/settings/statuses")}
            >
              <TableCell>Statuses</TableCell>
            </TableRow>
            <TableRow
              onClick={() =>
                this.props.history.push("/settings/task-attributes")
              }
            >
              <TableCell>Task attributes</TableCell>
            </TableRow>
            <TableRow
              onClick={() => this.props.history.push("/settings/units")}
            >
              <TableCell>Units</TableCell>
            </TableRow>
            <TableRow
              onClick={() => this.props.history.push("/settings/users")}
            >
              <TableCell>Users</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Dashboard;
