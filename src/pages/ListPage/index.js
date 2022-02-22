import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { selectWatchlist } from '../../selectors/watchlist';
import { getWatchlist, addWatchItem } from '../../actions/watchlistActions';
import WatchList from './components/WatchList';
import Form from './components/Form';

const ListPage = ({ getWatchlist, watchlist, addWatchItem }) => {
  const classes = useStyles();

  useEffect(() => {
    getWatchlist();
  }, [getWatchlist]);

  useEffect(() => {
    localStorage.setItem('watch-list', JSON.stringify(watchlist));
  });

  return (
    <section className={classes.todoapp}>
      <Form addWatchItem={addWatchItem} />
      {watchlist.length > 0 && (
        <section className={classes.main}>
          <WatchList watchlist={watchlist} />
        </section>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  watchlist: selectWatchlist(state),
});

const mapMethodsToProps = {
  getWatchlist,
  addWatchItem,
};

export default connect(mapStateToProps, mapMethodsToProps)(ListPage);
