import React, { Component } from 'react';
import { connect } from 'react-redux';

import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

import{setSidebar} from '../../redux/actions';

const styles = theme => ({
  drawerPaper: {
      position: 'float',
      flex: 1,
      width: 240,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      flex: 1,
      width: 60,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

})

class Sidebar extends Component {

  render() {
    const { classes } = this.props;
    return(
      <Drawer
        type="permanent"
        open={this.props.open}
        classes={{
           paper: classNames(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
         }}
        >
        <div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    )
  }
}

const mapStateToProps = ({sidebar}) => {
  const {open} = sidebar;
  return {open};
};

export default withStyles(styles)(connect(mapStateToProps, {setSidebar})(Sidebar));