import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  newTodo: {
    padding: '16px 16px 16px 60px',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.01)',
    boxShadow: 'inset 0 -2px 1px rgba(0, 0, 0, 0.03)',
    position: 'relative',
    margin: '0px',
    width: '100%',
    fontSize: '24px',
    fontFamily: 'inherit',
    fontWeight: 'inherit',
    lineHeight: '1.4em',
    color: 'inherit',
    boxSizing: 'border-box',
    '&:focus': {
      outline: '0',
    },
  },
}));
