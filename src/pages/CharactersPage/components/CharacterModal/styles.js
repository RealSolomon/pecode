import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  modal: {
    padding: '10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '400px',
    width: '400px',
    backgroundColor: 'lightgrey',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '&:focus': {
      outline: 'none',
    },
  },
  modalImage: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    border: '1px solid black',
  },
  modalStatus: {
    fontWeight: 600,
  },
  modalName: {
    marginBottom: '15px',
  },
  modalText: {
    fontWeight: 600,
    color: '#222',
  },
  modalLocation: {
    '&:first-of-type': {
      marginBottom: '5px',
    },
  },
  itemIndicator: {
    height: '0.5rem',
    width: '0.5rem',
    marginRight: '0.375rem',
    borderRadius: '50%',
  },
  itemInfo: {
    display: 'flex',
    alignItems: 'center',
  },
}));
