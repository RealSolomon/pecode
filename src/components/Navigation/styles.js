import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  navigation: {
    height: 70,
    backgroundColor: '#262626',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    '& .active': {
      '& div': {
        color: 'lightskyblue',
        '&:hover': {
          color: 'darkgrey',
        },
      },
    },
    '& div': {
      '&:hover': {
        color: 'darkgrey',
      },
    },
  },
  tab: {
    color: '#fff',
    padding: 15,
    fontSize: 20,
    borderRadius: 10,
    cursor: 'pointer',
    transition: 'background 0.5s',
  },
  active: {
    '& .tab': {
      color: 'lightskyblue',
    },
  },
}));
