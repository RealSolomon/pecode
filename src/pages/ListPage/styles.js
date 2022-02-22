import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  todoapp: {
    maxWidth: '50vw',
    background: '#fff',
    margin: '130px auto 40px',
    position: 'relative',
    boxShadow:
      '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
    '& input::placeholder': {
      fontStyle: 'italic',
      fontWeight: '300px',
      color: '#e6e6e6',
    },
    '& h1': {
      position: 'absolute',
      top: '-155px',
      width: '100%',
      fontSize: '100px',
      fontWeight: '100px',
      textAlign: 'center',
      color: 'rgba(175, 47, 47, 0.15)',
    },
  },

  main: {
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid #e6e6e6',
  },
}));
