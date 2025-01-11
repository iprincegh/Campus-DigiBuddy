import React, { useState, useCallback } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Link, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@mui/material/Rating';
import defaultImage from './default_image.jpg';
import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenInGoogleMaps = useCallback(() => {
        const url = `https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`;
        window.open(url, '_blank');
    }, [place.latitude, place.longitude]);

    const handleLocationClick = useCallback(() => {
        handleOpenInGoogleMaps();
    }, [handleOpenInGoogleMaps]);

    const handlePhotoClick = useCallback((photoUrl) => {
        window.open(photoUrl, '_blank');
    }, []);

    const getSubcategories = useCallback((keywords) => {
        if (!keywords) return [];
        return keywords.split(',').map((keyword) => keyword.trim());
    }, []);

    React.useEffect(() => {
        if (selected) {
            refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [selected, refProp]);

    return (
        <>
            <Card elevation={6} ref={refProp} onClick={handleClickOpen}>
                {place?.photo && (
                    <CardMedia
                        style={{ height: 200, cursor: 'pointer' }}
                        image={place.photo ? place.photo.images.large.url : defaultImage}
                        title={place.name}
                        onClick={() => handlePhotoClick(place.photo.images.large.url)}
                    />
                )}
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {place.name}
                    </Typography>
                    <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">
                        {place.price_level ? '$'.repeat(place.price_level) : 'N/A'}
                    </Typography>
                </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Rating value={Number(place.rating)} readOnly />
                        <Typography gutterBottom variant="subtitle1">
                            Out of {place.num_reviews} reviews
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">
                            {place.ranking}
                        </Typography>
                    </Box>
                    {place?.awards?.map((award) => (
                        <Box
                            key={award.display_name}
                            my={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <img src={award.images.small} alt={award.display_name} />
                            <Typography variant="subtitle2" color="textSecondary">
                                {award.display_name}
                            </Typography>
                        </Box>
                    ))}
                    {place?.cuisine?.map(({ name }) => (
                        <Chip key={name} size="small" label={name} className={classes.Chip} />
                    ))}
                    {place?.subcategories && (
                        <Box display="flex" flexWrap="wrap" mt={2}>
                            {getSubcategories(place.subcategories).map((subcategory) => (
                                <Chip key={subcategory} size="small" label={subcategory} className={classes.Chip} />
                            ))}
                        </Box>
                    )}
                    {place?.address && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                            className={classes.subtitle}
                            onClick={handleLocationClick}
                            style={{ cursor: 'pointer' }}
                        >
                            <LocationOnIcon /> {place.address}
                        </Typography>
                    )}
                    {place?.phone && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <PhoneIcon /> {place.phone}
                        </Typography>
                    )}
                    {place?.website && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.website} target="_blank" rel="noopener">
                                Website
                            </Link>
                        </Typography>
                    )}
                    {place?.opening_hours && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            Opening Hours: {place.opening_hours}
                        </Typography>
                    )}
                    {place?.description && (
                        <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                        >
                            {place.description}
                        </Typography>
                    )}
                    
                    {place?.read_reviews_link && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.read_reviews_link} target="_blank" rel="noopener">
                                Read Reviews
                            </Link>
                        </Typography>
                    )}
                    {place?.write_review_link && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.write_review_link} target="_blank" rel="noopener">
                                Write a Review
                            </Link>
                        </Typography>
                    )}
                    {place?.business_hours && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            Business Hours: {place.business_hours}
                        </Typography>
                    )}
                    {place?.email && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            Email: {place.email}
                        </Typography>
                    )}
                    {place?.facebook && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.facebook} target="_blank" rel="noopener">
                                Facebook
                            </Link>
                        </Typography>
                    )}
                    {place?.twitter && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.twitter} target="_blank" rel="noopener">
                                Twitter
                            </Link>
                        </Typography>
                    )}
                    {place?.instagram && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.instagram} target="_blank" rel="noopener">
                                Instagram
                            </Link>
                        </Typography>
                    )}
                </CardContent>
            </Card>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{place.name}</DialogTitle>
                <DialogContent>
                    {place?.photo && (
                        <CardMedia
                            style={{ height: 200, cursor: 'pointer' }}
                            image={place.photo ? place.photo.images.large.url : defaultImage}
                            title={place.name}
                            onClick={() => handlePhotoClick(place.photo.images.large.url)}
                        />
                    )}
                    <Box display="flex" justifyContent="space-between" mt={2}>
                        <Rating value={Number(place.rating)} readOnly />
                        <Typography gutterBottom variant="subtitle1">
                            Out of {place.num_reviews} reviews
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">
                            {place.ranking}
                        </Typography>
                    </Box>
                    {place?.awards?.map((award) => (
                        <Box
                            key={award.display_name}
                            my={1}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <img src={award.images.small} alt={award.display_name} />
                            <Typography variant="subtitle2" color="textSecondary">
                                {award.display_name}
                            </Typography>
                        </Box>
                    ))}
                    {place?.cuisine?.map(({ name }) => (
                        <Chip key={name} size="small" label={name} className={classes.Chip} />
                    ))}
                    {place?.subcategories && (
                        <Box display="flex" flexWrap="wrap" mt={2}>
                            {getSubcategories(place.subcategories).map((subcategory) => (
                                <Chip key={subcategory} size="small" label={subcategory} className={classes.Chip} />
                            ))}
                        </Box>
                    )}
                    {place?.address && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                            className={classes.subtitle}
                            onClick={handleLocationClick}
                            style={{ cursor: 'pointer' }}
                        >
                            <LocationOnIcon /> {place.address}
                        </Typography>
                    )}
                    {place?.phone && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <PhoneIcon /> {place.phone}
                        </Typography>
                    )}
                    {place?.website && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.website} target="_blank" rel="noopener">
                                Website
                            </Link>
                        </Typography>
                    )}
                    {place?.opening_hours && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            Opening Hours: {place.opening_hours}
                        </Typography>
                    )}
                    {place?.description && (
                        <Typography
                            gutterBottom
                            variant="body2"
                            color="textSecondary"
                        >
                            {place.description}
                        </Typography>
                    )}
                    {place?.price_level && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            Price Level: {place.price_level}
                        </Typography>
                    )}
                    {place?.read_reviews_link && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.read_reviews_link} target="_blank" rel="noopener">
                                Read Reviews
                            </Link>
                        </Typography>
                    )}
                    {place?.write_review_link && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.write_review_link} target="_blank" rel="noopener">
                                Write a Review
                            </Link>
                        </Typography>
                    )}
                    {place?.business_hours && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            Business Hours: {place.business_hours}
                        </Typography>
                    )}
                    {place?.email && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            Email: {place.email}
                        </Typography>
                    )}
                    {place?.facebook && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.facebook} target="_blank" rel="noopener">
                                Facebook
                            </Link>
                        </Typography>
                    )}
                    {place?.twitter && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.twitter} target="_blank" rel="noopener">
                                Twitter
                            </Link>
                        </Typography>
                    )}
                    {place?.instagram && (
                        <Typography
                            gutterBottom
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            <Link href={place.instagram} target="_blank" rel="noopener">
                                Instagram
                            </Link>
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleOpenInGoogleMaps} color="primary">
                        Open in Google Maps
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default PlaceDetails;