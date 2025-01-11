import React, { useState, useEffect } from 'react';
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

    // Load dataset into the map
    const loadDatasetToMap = async (map, maps) => {
        try {
            const datasetId = "d2b970ef-1897-4e31-8ca3-576865c17b8c"; // Replace with your actual dataset ID
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/mapsplatformdatasets/v1alpha/datasets/${datasetId}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `n8XagbpYnU-JZyJOzFs2hl`, // Replace with your actual access token
                    },
                }
            );
            if (response.ok) {
                const dataset = await response.json();
                map.data.addGeoJson(dataset);
                map.data.setStyle({
                    fillColor: 'blue',
                    strokeColor: 'black',
                    strokeWeight: 2,
                });
            } else {
                console.error("Failed to load dataset:", response.statusText);
            }
        } catch (error) {
            console.error("Error fetching dataset:", error);
        }
    };

    const handleApiLoaded = (map, maps) => {
        setMapInstance(map);
        loadDatasetToMap(map, maps); // Load dataset after map is initialized
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
                options={{ streetViewControl: true, mapId: '3692376ab31e3b5f', disableDefaultUI: false}}
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
                                    <Rating size ="small" value={Number(place.rating)} readOnly />
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
};

export default Map;
