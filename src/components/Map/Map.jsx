import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Button } from '@material-ui/core';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import defaultImage from './default_image.jpg';
import Rating from '@mui/material/Rating';

import useStyles from './styles';
const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)');
    const [mapInstance, setMapInstance] = useState(null);

    const handleApiLoaded = (map, maps) => {
        setMapInstance(map);
    };

    const recenterMap = () => {
        if (mapInstance) {
            mapInstance.setCenter(coordinates);
        }
    };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyA_R9lfClZ_Co-JDZ4yyEiL9HsXi7px-GE'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ streetViewControl: true }}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontsize="large"/>
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url: defaultImage }
                                        alt={place.name}
                                    />
                                    <Rating size ="small" value={Number(place.rating)} readonly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
                <div
                    className={classes.markerContainer}
                    lat={coordinates.lat}
                    lng={coordinates.lng}
                >
                    <MyLocationIcon color="secondary" fontSize="large" />
                </div>
            </GoogleMapReact>
            <Button variant="contained" color="primary" onClick={recenterMap} className={classes.recenterButton}>
                Recenter
            </Button>
        </div>
    );
}

export default Map;