import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Dialog from './Dialog'
import AppBar from '../../AppBar'



const useStyles = makeStyles(theme => ({
  sampleStyle: {
    color: 'black',
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
  }
}));

export default function Home() {
  const classes = useStyles();
  let history = useHistory()

  //useState in order to get all the challenges User is involved with

  //Map over challenges to create individual cards
    //Each challenge will have a card printed with some basic stats and pass props from store into challenge page when switching
    //At the bottom of each card, button leading to the Challenge pages that displays the current cards info in more detail with timelines pulled up



  function handleClickCreate() {
    history.push("/create");
  }

  function handleClickAll() {
    history.push("/all");
  }

  const challenges = [['pushups', [['day 1', 'shit was hard'], ['day']]], ['lunges', 'stuff for timeline'], ['30-days of algos', 'stuff for timeline']]
  let dashboard = challenges.map((el, i) => {
    return <Dialog info={el} key={i} />
  })

  return (
    <div>
      <AppBar title='Home Page'/>
      <div className={classes.flex}>{dashboard}</div>
    </div>
  );
}
