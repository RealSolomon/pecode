import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  todoItem: {
    borderBottom: '1px solid #ededed',
    position: 'relative',
    fontSize: '24px',
  },

  view: {
    display: 'flex',
    alignItems: 'center',
    height: '50px',
    padding: '0 20px',
    '& button': {
      border: '0',
      padding: '0',
      background: 'none',
      verticalAlign: 'baseline',
      fontFamily: 'inherit',
      fontWeight: 'inherit',
    },
    '& label': {
      padding: '15px',
    },
  },
  destroy: {
    position: 'absolute',
    top: '0',
    right: '20px',
    bottom: '0',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    fontSize: '35px',
    color: 'darkred',
    transition: 'color 0.2s ease-out',

    '&:after': {
      content: '"×"',
    },
  },
  toogle: {
    width: '20px',
    height: '20px',
  },
}));
