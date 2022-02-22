import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexFlow: 'wrap',
  },
  listEmpty: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  },
}));
