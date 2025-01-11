import React from 'react';
import { Typography, Box } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Typography variant="body2" color="textSecondary" align="center">
                © {new Date().getFullYear()} DigiBuddy. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;