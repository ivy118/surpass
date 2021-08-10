import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textWidth : {
    minWidth: '90%'
  },
}));


export default function MinHeightTextarea() {
  const classes = useStyles();
  
  return <TextareaAutosize aria-label="minimum height" minRows={8} placeholder="Minimum 3 rows" className={classes.textWidth}/>;
}
