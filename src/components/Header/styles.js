import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#424242',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
    logo: {
        height: '40px',
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: theme.spacing(1),
    },
    subtitle: {
        marginRight: theme.spacing(2),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(1),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        transform: 'translateY(-50%)',
    },
    inputRoot: {
        color: 'inherit',
        height: '40px',
    },
    inputInput: {
        padding: theme.spacing(0.5, 1, 0.5, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    navContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
    },
}));