import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(7),
    position: 'absolute',
    right: 0,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 25,
  },
  selectors: {
    marginBottom: 10,
    display: 'contents',
  },
  textField: {
    marginTop: 30,
  },
}));
