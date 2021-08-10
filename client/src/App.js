import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/pages/Home'
import All from '../src/pages/All'
import Create from '../src/pages/Create'
import History from '../src/pages/History'
import SignupLogin from '../src/pages/SignupLogin';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  app_root: {
    height: '100vh',
  },
}));


export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.app_root}>
      {/* <AppBar /> */}
      <Router>
        <Switch>
          <Route path="/all" component={All} />
          <Route path="/create" component={Create} />
          <Route path="/history" component={History} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={SignupLogin} />
        </Switch>
      </Router>
    </div>
  );
}
