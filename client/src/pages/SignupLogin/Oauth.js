import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GoogleLogo from '../../components/GoogleLogo';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: '#ffffffe8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  buttonText: {
    left: '20px'
  }
}));

function Oauth() {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button} variant="contained">
        <GoogleLogo width={20} height={20} />
        <Typography className={classes.buttonText} >Continue with Google</Typography>
        <div />
      </Button>
    </div>
  );
}

export default Oauth;
