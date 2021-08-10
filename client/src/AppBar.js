import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from './Avatar'
import { useHistory } from 'react-router';
import SideNav from './SideNav'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  let history = useHistory()

  function handleClickHistory() {
    history.push("/history");
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            <SideNav />
          {/* </IconButton> */}
          <Typography variant="h6" align='center' className={classes.title}>
            {props.title}
          </Typography>
          <Button color="inherit" onClick={handleClickHistory}><Avatar /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
