import { makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import { withRouter } from 'react-router';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  form: {
    padding: theme.spacing(0, 2),
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
  passwordField: {},
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

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Enter a valid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password must be at least 6 characters.')
    .matches(/[a-zA-Z0-9]/, 'Password can only contain letters and numbers.'),
});

function Login({ loginUser, setHasAnAccount, hasAnAccount, history }) {
  const classes = useStyles();

  const onSubmit = async values => {
    try {
      const verifiedUser = await axios.post('/user/login', {
        username: values.username,
        email: values.email,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
      });
      loginUser(verifiedUser);
      history.push('/home');
    } catch (error) {
      console.error('ERROR IN LOGIN EXISTING USER: ', error);
      // Figure out a way to display to the user that an error occured here.
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleNeedsAccount = () => setHasAnAccount(!hasAnAccount);

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Typography variant="h2" component="h1" gutterBottom>
        Log In
      </Typography>
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
      <TextField
        className={classes.passwordField}
        fullWidth
        label="Password"
        variant="outlined"
        {...formik.getFieldProps('password')}
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password && Boolean(formik.touched.password)}
        helperText={formik.touched.password ? formik.errors.password : ''}
      />
      <Button
        className={classes.button}
        type="submit"
        fullWidth
        variant="contained"
        color="secondary">
        Log In
      </Button>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="body2" className={classes.loginLink}>
          <Link onClick={handleNeedsAccount}>Not a user? Sign up</Link>
        </Typography>
      </Grid>
    </form>
  );
}

export default withRouter(Login);
