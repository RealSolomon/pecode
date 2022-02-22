import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  listItem: {
    display: 'flex',
    width: '600px',
    height: '220px',
    background: 'rgb(60, 62, 68)',
    borderRadius: '1.7rem',
    marginBottom: '15px',
    marginLeft: '20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    cursor: 'pointer',

    '&:hover': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  itemImage: {
    width: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderTopLeftRadius: '1.7rem',
    borderBottomLeftRadius: '1.7rem',
  },

  itemContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'center',
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  itemInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15px',
  },

  itemName: {
    fontSize: '24px',
    color: '#f5f5f5',
  },

  itemIndicator: {
    height: '0.5rem',
    width: '0.5rem',
    marginRight: '0.375rem',
    borderRadius: '50%',
  },

  itemStatus: {
    fontSize: '16px',
    color: '#fff',
  },
}));
