import React from 'react';
import { useStyles } from './styles';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.navigation}>
      <NavLink to="/characters">
        <div className={classes.tab}>Characters</div>
      </NavLink>
      <NavLink to="/list">
        <div className={classes.tab}>Watch List</div>
      </NavLink>
    </div>
  );
};

export default Navigation;
