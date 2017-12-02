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
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import Popover from "material-ui/Popover";
import AddIcon from "material-ui-icons/Add";
import { showFilter } from "./../../redux/actions";

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
      <div>
        <Grid container spacing={0}>
          {this.props.openFilter && (
            <Grid item xs={3}>
              <Paper style={style.paper}>
                <Typography gutterBottom type="headline">
                  Filter
                </Typography>
                <Button color="primary">Filter</Button>
                <Button color="primary">Save</Button>
                <Button color="primary">Reset</Button>
                <form>
                  <TextField
                    id="full-width"
                    label="Task name"
                    InputLabelProps={{
                      shrink: true
                    }}
                    fullWidth
                    margin="normal"
                  />
                  <Divider />
                  <Button
                    ref={node => {
                      this.button = node;
                    }}
                    onClick={this.handleClickButton}
                    color="primary"
                  >
                    Add Status
                  </Button>
                  <Popover>Status</Popover>
                  <Divider />
                </form>
              </Paper>
            </Grid>
          )}
          <Grid item xs={this.props.openFilter ? 9 : 12}>
            <Paper style={style.paper}>
              <Typography
                style={style.paperHeading}
                gutterBottom
                type="headline"
              >
                Tasks List
              </Typography>
              <Button
                onClick={() => this.props.showFilter(!this.props.openFilter)}
                color="primary"
              >
                Show Filter
              </Button>
              <Button color="primary">Delete</Button>
              <Button color="primary">Bulk Actions</Button>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell style={style.smallTableCell}>
                      <Checkbox />
                    </TableCell>
                    <TableCell style={style.smallTableCell}>Key</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell style={style.smallTableCell}>
                      Requester
                    </TableCell>
                    <TableCell style={style.smallTableCell}>Company</TableCell>
                    <TableCell style={style.smallTableCell}>Asignee</TableCell>
                    <TableCell style={style.smallTableCell}>Created</TableCell>
                    <TableCell style={style.smallTableCell}>Deadline</TableCell>
                    <TableCell style={style.smallTableCell}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>Key</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Requester</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Asignee</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>Key</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Requester</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Asignee</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>Key</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Requester</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell>Asignee</TableCell>
                    <TableCell>Created</TableCell>
                    <TableCell>Deadline</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      count="100"
                      rowsPerPage="10"
                      page="100"
                      onChangePage={() => console.log("change")}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ filter }) => {
  const { openFilter } = filter;
  return { openFilter };
};

export default connect(mapStateToProps, { showFilter })(Dashboard);
