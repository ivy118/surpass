import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  sampleStyle: {
    color: 'black',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Typography variant='h1' className={classes.sampleStyle}>Home Page index.js</Typography>
  );
}
