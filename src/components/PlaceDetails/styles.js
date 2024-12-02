import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0',
    backgroundColor: '#f0f0f0', 
    borderRadius: '16px',
    padding: '5px 10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', 
    transition: 'background-color 0.3s, transform 0.2s', 
    '&:hover': {
      backgroundColor: '#e0e0e0', 
      transform: 'scale(1.05)',
    },
  },
  subtitle: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: '15px', 
    fontWeight: 'bold', 
    color: '#333', 
  },
  spacing: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: '10px', 
    backgroundColor: '#ffffff', 
    borderRadius: '8px',
    boxShadow: '0 3px 8px rgba(0, 0, 0, 0.1)', 
    transition: 'box-shadow 0.3s', 
    '&:hover': {
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', 
    },
  },
}));