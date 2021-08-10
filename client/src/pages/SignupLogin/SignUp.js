import { makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Oauth from './Oauth';

const useStyles = makeStyles(theme => ({
  form: {
    padding: theme.spacing(0, 1),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 9),
    },
  },
  usernameField: {
    paddingBottom: theme.spacing(1),
  },
  emailField: {
    paddingBottom: theme.spacing(1),
  },
  passwordField: {
    width: '50%',
    paddingRight: theme.spacing(1),
  },
  confirmField: {
    width: '50%',
  },
  button: {
    marginTop: theme.spacing(3),
  },
  loginLink: {
    margin: theme.spacing(2, 1),
  },
}));

// Initial form state for Formik/Yup
const initialValues = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

// Individual input requirements for validation
const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Enter a valid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password must be at least 6 characters.')
    .matches(/[a-zA-Z0-9]/, 'Password can only contain letters and numbers.'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

const SignUp = ({ createNewUser, setHasAnAccount, hasAnAccount, history }) => {
  const classes = useStyles();
  const handleAlreadyUser = () => setHasAnAccount(!hasAnAccount);

  const onSubmit = async values => {
    try {
      const { data } = await axios.post('/user', {
        username: values.username,
        email: values.email,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
      });
      createNewUser(data.createdUser);
      history.push('/dashboard');
    } catch (error) {
      console.error('ERROR IN CREATING NEW USER: ', error);
      // TODO: Figure out a way to display to the user that an error occured here.
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Typography
        className={classes.title}
        variant="h2"
        component="h1"
        gutterBottom>
        Sign Up
      </Typography>
      <Oauth />
      <TextField
        className={classes.usernameField}
        fullWidth
        label="Username"
        variant="outlined"
        {...formik.getFieldProps('username')}
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.errors.username && Boolean(formik.touched.username)}
        helperText={formik.touched.username ? formik.errors.username : ''}
      />
      <TextField
        className={classes.emailField}
        fullWidth
        label="Email"
        variant="outlined"
        {...formik.getFieldProps('email')}
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email && Boolean(formik.touched.email)}
        helperText={formik.touched.email ? formik.errors.email : ''}
      />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center">
        <TextField
          className={classes.passwordField}
          label="Password"
          variant="outlined"
          {...formik.getFieldProps('password')}
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password && Boolean(formik.touched.password)}
          helperText={formik.touched.password ? formik.errors.password : ''}
        />
        <TextField
          className={classes.confirmField}
          label="Confirmation"
          variant="outlined"
          {...formik.getFieldProps('passwordConfirmation')}
          onChange={formik.handleChange}
          value={formik.values.passwordConfirmation}
          error={
            formik.errors.passwordConfirmation &&
            Boolean(formik.touched.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation
              ? formik.errors.passwordConfirmation
              : ''
          }
        />
      </Grid>
      <Button
        className={classes.button}
        type="submit"
        fullWidth
        variant="contained"
        color="secondary">
        Sign Up
      </Button>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="body2" className={classes.loginLink}>
          <Link onClick={handleAlreadyUser}>Already a user? Log in</Link>
        </Typography>
      </Grid>
    </form>
  );
};

export default withRouter(SignUp);
