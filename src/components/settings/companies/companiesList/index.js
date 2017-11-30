import React, { Component } from "react";
import { connect } from "react-redux";
import { CircularProgress } from "material-ui/Progress";
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
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Search from "material-ui-icons/Search";

import { startLoadingCompany, getCompanies } from "./../../../../redux/actions";

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

class CompaniesList extends Component {
  componentWillMount() {
    this.props.startLoadingCompany();
    this.props.getCompanies(this.props.token);
  }

  render() {
    if (this.props.loading) {
      return <CircularProgress />;
    }
    return (
      <Paper style={style.paper}>
        <Typography
          type="headline"
          align="left"
          gutterBottom
          style={style.paperHeading}
        >
          Companies list
        </Typography>
        <Button
          raised
          color="primary"
          style={{ marginLeft: 15 }}
          onClick={() => this.props.history.push("companies/add/")}
        >
          Add new
        </Button>
        <Search style={{ marginLeft: 15, textAlign: "center" }} />
        <TextField
          id="search"
          label="Search field"
          type="search"
          margin="normal"
        />
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
                <TableRow
                  hover
                  key={company.id}
                  onClick={() =>
                    this.props.history.push("companies/edit/" + company.id)
                  }
                >
                  <TableCell>{company.title}</TableCell>
                  <TableCell>{company.street}</TableCell>
                  <TableCell>{company.city}</TableCell>
                  <TableCell>{company.is_active ? "Yes" : "No"}</TableCell>
                </TableRow>
              );
            })}
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

const mapStateToProps = ({ login, company }) => {
  const { token } = login;
  const { companies, loading } = company;
  return { token, companies, loading };
};

export default connect(mapStateToProps, { startLoadingCompany, getCompanies })(
  CompaniesList
);
