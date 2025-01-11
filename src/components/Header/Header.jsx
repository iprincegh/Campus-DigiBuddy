import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import Logo from '/Users/iprincetech/Desktop/buddy 2/src/components/Header/humanai.png'; // Ensure the path to your logo image is correct

const Header = ({ setCoordinates }) => {
    const classes = useStyles();
    const [autocompleteInstance, setAutocompleteInstance] = useState(null);

    const handleAutocompleteLoad = (autocomplete) => setAutocompleteInstance(autocomplete);
    const handlePlaceChanged = () => {
        const lat = autocompleteInstance.getPlace().geometry.location.lat();
        const lng = autocompleteInstance.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Box display="flex" alignItems="center" className={classes.logoContainer}>
                    <img src={Logo} alt="Logo" className={classes.logo} />
                    <Typography variant="h5" className={classes.title}>
                        DigiBuddy
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" className={classes.searchContainer}>
                    <Typography variant="h6" className={classes.subtitle}>
                        What's Up Buddy!
                    </Typography>
                    <Autocomplete onLoad={handleAutocompleteLoad} onPlaceChanged={handlePlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search"
                                classes={{ root: classes.inputRoot, input: classes.inputInput }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Autocomplete>
                </Box>
                
            </Toolbar>
        </AppBar>
    );
};

export default Header;