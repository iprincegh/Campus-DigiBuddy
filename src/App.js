import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
import Map from './components/Map/Map';
import Uni from './UniBuildings/Uni';
import LandingPage from './components/LandingPage/LandingPage'; // Import the LandingPage component
import { getPlacesData } from './api';

const App = () => {
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place) => place.rating > rating);
        setFilteredPlaces(filteredPlaces);
    }, [rating]);

    useEffect(() => {
        if (bounds.sw && bounds.ne) {
            setIsLoading(true);
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                    setFilteredPlaces([]);
                    setIsLoading(false);
                });
        }
    }, [type, bounds]);

    const location = useLocation();

    return (
        <>
            <CssBaseline />
            {location.pathname !== '/' && <Header setCoordinates={setCoordinates} />}
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/home" element={
                    <Grid container spacing={3} style={{ width: '100%' }}>
                        <Grid item xs={12} md={4}>
                            <List
                                places={filteredPlaces.length ? filteredPlaces : places}
                                childClicked={childClicked}
                                isLoading={isLoading}
                                type={type}
                                setType={setType}
                                rating={rating}
                                setRating={setRating}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Map
                                setCoordinates={setCoordinates}
                                setBounds={setBounds}
                                coordinates={coordinates}
                                places={filteredPlaces.length ? filteredPlaces : places}
                                setChildClicked={setChildClicked}
                            />
                        </Grid>
                    </Grid>
                } />
                <Route path="/uni" element={<Uni />} />
            </Routes>
            {location.pathname !== '/' && <Footer />}
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;