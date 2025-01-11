import React from 'react';
import { Container, Typography, Button, Box } from '@material-ui/core';
import useStyles from './styles';

const LandingPage = () => {
    const classes = useStyles();

    return (
        <Container maxWidth={false} className={classes.landingContainer}>
            <Box className={classes.landingContent} >
                <Typography variant="h5" className={classes.subtitle}>
                Hello!👋 I'm Your
                </Typography>
                <Typography variant="h2" className={classes.title}>
                    DigiBuddy 
                </Typography>
                <Typography variant="h5" className={classes.subtitle}>
                    How may I help you today? 😊
                </Typography>
                <Box className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" className={classes.button} href="/home">
                        Explore New Places
                    </Button>
                    <Button variant="contained" color="secondary" className={classes.button} href="/uni">
                        University Buildings
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LandingPage;