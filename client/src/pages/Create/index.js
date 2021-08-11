import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../../AppBar'
import TextArea from './TextArea'
import { Button } from '@material-ui/core';
import Card from './Card'



const useStyles = makeStyles(theme => ({
  sampleStyle: {
    color: 'black',
  },
  center: {
    margin: '5%',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default function Create() {
  const classes = useStyles();

  return (
    <div>
      <AppBar title='Create a Challenge'/>
    <div className={classes.center}>
      <Typography variant='h5' className={classes.sampleStyle}>iamge URL</Typography>
      <TextArea />
      <Typography variant='h5' className={classes.sampleStyle}>Start Date</Typography>
      <TextArea />
      <Typography variant='h5' className={classes.sampleStyle}>Title</Typography>
      <TextArea />
      <Typography variant='h5' className={classes.sampleStyle}>Description</Typography>
      <TextArea />
      <Button variant="contained" color="secondary">
        Submit Challenge
      </Button>
      <Card />
    </div>
    </div>
  );
}
