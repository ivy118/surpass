import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../../AppBar'



const useStyles = makeStyles(theme => ({
  sampleStyle: {
    color: 'black',
  },
}));

export default function Create() {
  const classes = useStyles();

  return (
    <div>
      <AppBar title='Create a Challenge'/>
      <Typography variant='h1' className={classes.sampleStyle}>Create a New Challenge</Typography>
    </div>
  );
}
