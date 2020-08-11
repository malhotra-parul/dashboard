import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import TodayOutlinedIcon from "@material-ui/icons/TodayOutlined";
import MoveToInboxOutlinedIcon from "@material-ui/icons/MoveToInboxOutlined";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import ColorizeOutlinedIcon from "@material-ui/icons/ColorizeOutlined";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ArrowRightAltOutlinedIcon from "@material-ui/icons/ArrowRightAltOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    padding: 0,
    paddingLeft: theme.spacing(12),
  },
  items: {
    padding: "0",
    margin: "0",
    paddingLeft: theme.spacing(4),
  },
  listItemText: {
    fontSize: "14px", //Insert your required size
  
  },
  menuItemText: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "16px",
  },
  menu: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List>
        <Divider />
        <ListItem button onClick={handleClick} className={classes.menu}>
          <ListItemIcon>
            <DashboardOutlinedIcon color="primary"/>
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            classes={{ primary: classes.menuItemText }}
          />
          {open ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Page Visitors" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Post Performance" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Team Overall" />
            </ListItem>
          </List>
        </Collapse>
        <Divider variant="middle" />
        <ListItem button className={classes.menu}>
          <ListItemIcon>
            <TodayOutlinedIcon color="primary"/>
          </ListItemIcon>
          <ListItemText
            primary="Calendar"
            classes={{ primary: classes.menuItemText }}
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem button className={classes.menu}>
          <ListItemIcon>
            <MoveToInboxOutlinedIcon color="primary"/>
          </ListItemIcon>
          <ListItemText
            primary="Inbox"
            classes={{ primary: classes.menuItemText }}
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem button className={classes.menu}>
          <ListItemIcon>
            <ReceiptOutlinedIcon color="primary"/>
          </ListItemIcon>
          <ListItemText
            primary="Invoicing"
            classes={{ primary: classes.menuItemText }}
          />
        </ListItem>
        <Divider variant="middle" />
        <ListItem button className={classes.menu}>
          <ListItemIcon>
            <ColorizeOutlinedIcon color="primary"/>
          </ListItemIcon>
          <ListItemText
            primary="Lab / Experimental"
            classes={{ primary: classes.menuItemText }}
          />
        </ListItem>
        <Divider />
      </List>

      <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            RECENTLY VIEWED
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button className={classes.items}>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Overall Performance"
          />
          <ListItemSecondaryAction>
            <ArrowRightAltOutlinedIcon color="secondary"/>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button className={classes.items}>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Invoice #940"
          />
          <ListItemSecondaryAction>
            <ArrowRightAltOutlinedIcon color="secondary"/>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem button className={classes.items}>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Customer: Minerva Viewer"
          />
          <ListItemSecondaryAction>
            <ArrowRightAltOutlinedIcon color="secondary" />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}
