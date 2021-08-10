import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../../AppBar'
      


const useStyles = makeStyles(theme => ({
  sampleStyle: {
    color: 'black',
  },
}));

export default function All() {
  const classes = useStyles();

  return (
    <div>
      <AppBar title='Available Challenges'/>
      <Typography variant='h1' className={classes.sampleStyle}>All Challenges Available</Typography>
    </div>
    
  );
}
