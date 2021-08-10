import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SignUp from './SignUp';
import Login from './Login';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formContainer: {
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffe8',
    borderRadius: '10px',
  },
}));

function SignUpLoginPage({ createNewUser, loginUser }) {
  const classes = useStyles();
  const [rememberMe, setRememberMe] = useState(false);
  const [hasAnAccount, setHasAnAccount] = useState(false);

  const handleRememberMe = () => setRememberMe(!rememberMe);

  const renderForm = hasAnAccount ? (
    <Login
      loginUser={loginUser}
      setHasAnAccount={setHasAnAccount}
      hasAnAccount={hasAnAccount}
      rememberMe={rememberMe}
      handleRememberMe={handleRememberMe}
    />
  ) : (
    <SignUp
      createNewUser={createNewUser}
      setHasAnAccount={setHasAnAccount}
      hasAnAccount={hasAnAccount}
      rememberMe={rememberMe}
      handleRememberMe={handleRememberMe}
    />
  );

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        className={classes.image}
        container
        justifyContent="center"
        alignItems="center">
        <Container maxWidth="sm">
          <Paper className={classes.formContainer}>{renderForm}</Paper>
        </Container>
      </Grid>
    </Grid>
  );
}

export default SignUpLoginPage;
