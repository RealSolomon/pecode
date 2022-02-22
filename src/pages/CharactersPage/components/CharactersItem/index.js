import React from 'react';
import { characterStatus } from '../../../../enums';
import { useStyles } from './styles';

const CharactersItem = ({ item, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.listItem} onClick={() => onClick(item.id)}>
      <div
        className={classes.itemImage}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={classes.itemContent}>
        <div className={classes.nameWrapper}>
          <h2 className={classes.itemName}>{item.name}</h2>
        </div>
        <div className={classes.itemInfo}>
          <div
            className={classes.itemIndicator}
            style={{ backgroundColor: characterStatus[item.status] }}
          ></div>
          <span className={classes.itemStatus}>
            {item.status} - {item.species}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharactersItem;
