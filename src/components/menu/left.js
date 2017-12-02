import React, { Component } from "react";
import { connect } from "react-redux";

import Divider from "material-ui/Divider";
import Drawer from "material-ui/Drawer";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "material-ui-icons/Inbox";
import PeopleIcon from "material-ui-icons/People";
import FilterIcon from "material-ui-icons/FilterList";
import FolderIcon from "material-ui-icons/FolderOpen";
import ArchiveIcon from "material-ui-icons/Archive";
import AddIcon from "material-ui-icons/Add";
import PlayIcon from "material-ui-icons/PlayArrow";
import classNames from "classnames";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import { Link } from "react-router-dom";
import ExpandLess from "material-ui-icons/ExpandLess";
import ExpandMore from "material-ui-icons/ExpandMore";
import Collapse from "material-ui/transitions/Collapse";
import StarBorder from "material-ui-icons/StarBorder";
import { setSidebar } from "../../redux/actions";

const styles = theme => ({
  drawerPaper: {
    position: "float",
    flex: 1,
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    flex: 1,
    width: 60,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    color: "white"
  }
});

class Sidebar extends Component {
  state = { open: true };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes } = this.props;
    return (
      <Drawer
        type="permanent"
        open={this.props.open}
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !this.props.open && classes.drawerPaperClose
          )
        }}
      >
        <div>
          <Link style={{ textDecoration: "none" }} to="/">
            <div
              style={{
                background: "#3f51b5",
                height: 64,
                display: "flex",
                alignItems: "center"
              }}
            >
              <Typography
                type="title"
                style={{
                  color: "white",

                  paddingLeft: 16
                }}
              >
                LanHelpdesk
              </Typography>
            </div>
          </Link>
          <List style={{ paddingBottom: 0, paddingTop: 0 }}>
            {/*Filters List*/}
            <ListItem
              button
              onClick={this.handleClick}
              style={{ paddingTop: 8, paddingBottom: 8 }}
            >
              <ListItemText
                style={{ paddingLeft: 0, fontSize: "0.5rem" }}
                primary="Filters"
              />
              <AddIcon />
            </ListItem>
            <Collapse
              component="li"
              in={this.state.open}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ paddingTop: 8, paddingBottom: 8 }}
                >
                  <ListItemIcon style={{ marginRight: 8 }}>
                    <PlayIcon />
                  </ListItemIcon>
                  <ListItemText style={{ padding: 0 }} inset primary="Riešiť" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            {/*Folders List*/}
            <ListItem
              button
              onClick={this.handleClick}
              style={{ paddingTop: 8, paddingBottom: 8 }}
            >
              <ListItemText
                style={{ paddingLeft: 0, fontSize: "0.5rem" }}
                primary="Folders"
              />
              <AddIcon />
            </ListItem>
            <Collapse
              component="li"
              in={this.state.open}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ paddingTop: 8, paddingBottom: 8 }}
                >
                  <ListItemIcon style={{ marginRight: 8 }}>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ padding: 0 }}
                    inset
                    primary="Folder 1"
                  />
                </ListItem>
              </List>
            </Collapse>
            <Divider />

            {/*Tags List*/}
            <ListItem
              button
              onClick={this.handleClick}
              style={{ paddingTop: 8, paddingBottom: 8 }}
            >
              <ListItemText
                style={{ paddingLeft: 0, fontSize: "0.5rem" }}
                primary="Filters"
              />
              <AddIcon />
            </ListItem>
            <Collapse
              component="li"
              in={this.state.open}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ paddingTop: 8, paddingBottom: 8 }}
                >
                  <ListItemText style={{ padding: 0 }} primary="Tag 1" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />

            {/*Archived List*/}

            <ListItem
              button
              onClick={this.handleClick}
              style={{ paddingTop: 8, paddingBottom: 8 }}
            >
              <ListItemText
                style={{ paddingLeft: 0, fontSize: "0.5rem" }}
                primary="Archived"
              />
              <AddIcon />
            </ListItem>
            <Collapse
              component="li"
              in={this.state.open}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ paddingTop: 8, paddingBottom: 8 }}
                >
                  <ListItemIcon style={{ marginRight: 8 }}>
                    <ArchiveIcon />
                  </ListItemIcon>
                  <ListItemText
                    style={{ padding: 0 }}
                    inset
                    primary="Folder 2"
                  />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
          </List>
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = ({ sidebar }) => {
  const { open } = sidebar;
  return { open };
};

export default withStyles(styles)(
  connect(mapStateToProps, { setSidebar })(Sidebar)
);
