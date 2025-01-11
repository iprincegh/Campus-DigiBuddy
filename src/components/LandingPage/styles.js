import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '/Users/iprincetech/Desktop/buddy 2/src/components/LandingPage/unimunster.jpg'; 

export default makeStyles((theme) => ({
    landingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center  ',
        alignItems: 'center ',
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center',
        textAlign: 'center',
        
    },
    landingContent: {
        minWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
    },
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
    },
    subtitle: {
        marginBottom: theme.spacing(1),
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        padding: theme.spacing(1.5, 4),
        fontWeight: 'bold',
        fontSize: '1rem',
        borderRadius: theme.shape.border,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.light, 
            transform: 'scale(1.05)', 
            transition: 'all 0.3s ease',
        },
    },
    
}));