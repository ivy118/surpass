import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignupLogin from '../src/pages/SignupLogin';
import Home from '../src/pages/Home';
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
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignupLogin} />
        </Switch>
      </Router>
    </div>
  );
}
