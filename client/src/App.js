import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../src/pages/Home'
import All from '../src/pages/All'
import Create from '../src/pages/Create'
import History from '../src/pages/History'
// import AppBar from './AppBar'
// import Login from '../src/pages/Login'
// import Signup from '../src/pages/Signup'
{/* <Route exact path="/" component={Login} />
<Route exact path="/Signup" component={Signup} /> */}

export default function App() {
  return (
    <div>
      {/* <AppBar /> */}
      <Router>
        <Switch>
          <Route path="/all" component={All} />
          <Route path="/create" component={Create} />
          <Route path="/history" component={History} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
