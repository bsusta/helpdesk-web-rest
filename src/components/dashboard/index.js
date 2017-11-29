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
import Typography from "material-ui/Typography";
import Checkbox from "material-ui/Checkbox";
import Button from "material-ui/Button";
import Divider from "material-ui/Divider";

const style = {
  smallTableCell: {
    width: "1%"
  },
  paper: {
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
        <Typography style={style.paperHeading} gutterBottom type="headline">
          Dashboard
        </Typography>
        <Button color="primary">Filter</Button>
        <Button color="primary">Delete</Button>
        <Button color="primary">Bulk Actions</Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={style.smallTableCell} padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell style={style.smallTableCell} padding="checkbox">
                Key
              </TableCell>
              <TableCell>Title</TableCell>
              <TableCell style={style.smallTableCell} padding="numeric">
                Requester
              </TableCell>
              <TableCell style={style.smallTableCell} padding="numeric">
                Company
              </TableCell>
              <TableCell style={style.smallTableCell} padding="numeric">
                Asignee
              </TableCell>
              <TableCell style={style.smallTableCell} padding="numeric">
                Created
              </TableCell>
              <TableCell style={style.smallTableCell} padding="numeric">
                Deadline
              </TableCell>
              <TableCell style={style.smallTableCell} padding="numeric">
                Status
              </TableCell>
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
              <TablePagination count="100" rowsPerPage="10" page="100" />
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
