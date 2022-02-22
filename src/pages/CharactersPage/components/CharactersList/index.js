import React from 'react';
import classnames from 'classnames';
import CharactersItem from '../CharactersItem';
import CustomPagination from '../../../../components/CustomPagination';
import { useStyles } from './styles';

const CharactersList = ({
  items,
  setActiveCharacter,
  info,
  changePage,
  activePage,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classnames(items.length !== 0 ? classes.list : '')}>
        {items.map((item) => (
          <CharactersItem
            key={item.id}
            item={item}
            onClick={setActiveCharacter}
          />
        ))}
        {items.length === 0 && (
          <div className={classes.listEmpty}>
            <h1>No items found</h1>
          </div>
        )}
      </div>
      <CustomPagination
        pages={info.pages}
        changePage={changePage}
        activePage={activePage}
      />
    </>
  );
};

export default CharactersList;
