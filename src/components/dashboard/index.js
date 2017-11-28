import React, { Component } from "react";
import { connect } from "react-redux";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Checkbox from "material-ui/Checkbox";

class Dashboard extends Component {
  render() {
    return (
      <Paper>
        <div>Dashboard</div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell padding="checkbox">Key</TableCell>
              <TableCell>Title</TableCell>
              <TableCell padding="numeric">Requester</TableCell>
              <TableCell padding="numeric">Company</TableCell>
              <TableCell padding="numeric">Asignee</TableCell>
              <TableCell padding="numeric">Created</TableCell>
              <TableCell padding="numeric">Deadline</TableCell>
              <TableCell padding="numeric">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell padding="checkbox">Key</TableCell>
              <TableCell>Title</TableCell>
              <TableCell padding="numeric">Requester</TableCell>
              <TableCell padding="numeric">Company</TableCell>
              <TableCell padding="numeric">Asignee</TableCell>
              <TableCell padding="numeric">Created</TableCell>
              <TableCell padding="numeric">Deadline</TableCell>
              <TableCell padding="numeric">Status</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination count="100" rowsPerPage="100" page="100" />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = ({}) => {
  return {};
};

export default connect(mapStateToProps, {})(Dashboard);
