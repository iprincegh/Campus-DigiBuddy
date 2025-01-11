import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import useStyles from '../styles/styles';

const LandingPage = () => {
    const classes = useStyles();

    return (
        <Box className={classes.landingPage}>
            <Typography variant="h2" className={classes.title}>
                Welcome to DigiBuddy!
            </Typography>
            <Typography variant="h5" className={classes.description}>
                Your go-to app for all your digital needs. Explore, connect, and enhance your experience with us.
            </Typography>
            <Box mt={4}>
                <Button variant="contained" color="primary" className={classes.button}>
                    Get Started
                </Button>
                <Button variant="outlined" color="secondary" className={classes.button}>
                    Learn More
                </Button>
            </Box>
        </Box>
    );
};

export default LandingPage;