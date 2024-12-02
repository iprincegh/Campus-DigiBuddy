import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
    marginBottom: '30px',
    backgroundColor: '#f8f9fa', 
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s, transform 0.2s',
    '&:hover': {
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', 
      transform: 'scale(1.02)', 
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: '#495057', 
    '&:focus': {
      backgroundColor: '#ffffff', 
    },
  },
  loading: {
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9ecef', 
    borderRadius: '16px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
  },
  container: {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15)',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh',
    overflow: 'auto',
    padding: '15px', 
    backgroundColor: '#f1f3f5', 
    borderRadius: '8px',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    '&::-webkit-scrollbar': { 
      width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#adb5bd',
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#e9ecef',
      borderRadius: '4px',
    },
  },
}));