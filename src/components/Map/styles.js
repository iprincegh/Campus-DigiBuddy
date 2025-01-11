import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '120px',
    backgroundColor: '#ffffff', 
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  mapContainer: {
    height: '92vh',
    width: '100%',
    borderRadius: '12px', 
    overflow: 'hidden',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)', 
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
      transition: 'transform 0.2s', 
      transform: 'translate(-50%, -50%) scale(1.1)',
    },
  },
  pointer: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.1)', 
      transition: 'transform 0.2s', 
    },
  },
  recenterButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 10,
  },
}));