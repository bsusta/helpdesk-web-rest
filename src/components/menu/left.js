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
import LabelIcon from "material-ui-icons/LabelOutline";
import { setSidebar } from "../../redux/actions";
import BigSidebar from "./bigSidebar";

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
  state = {
    open: true,
    openFilters: true,
    openFolders: true,
    openLabels: true,
    openArchived: true
  };

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
        {this.props.open && <BigSidebar />}
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
