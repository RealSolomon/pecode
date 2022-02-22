import React from 'react';
import WatchItem from '../WatchItem';
import { useStyles } from './styles';

const WatchList = ({ watchlist }) => {
  const classes = useStyles();
  return (
    <ul className={classes.todoList}>
      {watchlist.map(({ title, id, completed }) => (
        <WatchItem title={title} id={id} key={id} completed={completed} />
      ))}
    </ul>
  );
};

export default WatchList;
