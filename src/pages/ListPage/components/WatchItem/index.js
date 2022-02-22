import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { useStyles } from './styles';
import {
  deleteWatchItem,
  toggleComplete,
} from '../../../../actions/watchlistActions';

const WatchItem = ({
  title,
  id,
  completed,
  deleteWatchItem,
  toggleComplete,
}) => {
  const classes = useStyles();
  return (
    <li
      className={cn(classes.todoItem, {
        completed,
      })}
    >
      <div className={classes.view}>
        <input
          type="checkbox"
          className={classes.toogle}
          id={id}
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        <label htmlFor={id}>{title}</label>
        <button
          type="button"
          className={classes.destroy}
          onClick={() => deleteWatchItem(id)}
        />
      </div>
    </li>
  );
};

const mapMethodsToProps = {
  deleteWatchItem,
  toggleComplete,
};

export default connect(null, mapMethodsToProps)(WatchItem);
