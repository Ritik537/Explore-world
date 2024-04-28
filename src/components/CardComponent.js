import React from 'react'
import { useData } from './DataContext';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from "@material-ui/lab/Rating";
import useStyles from './styles'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LanguageIcon from '@mui/icons-material/Language';
import MapIcon from '@mui/icons-material/Map';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


function CardComponent() {

    const { responseData } = useData();

    const classes = useStyles();



    console.log(responseData);

    const hasData = responseData.length > 0;



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: hasData,
        responsive: [
            {
                breakpoint: 1024, // screens smaller than 1024px wide
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600, // screens smaller than 600px wide
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (



        <div className="w-3/4 m-auto">

            <div className="mt-20">

                <Slider {...settings}>

                    {responseData.map((place, i) => (

                        <Card elevation={6} key={i} className={classes.card}>

                            <CardMedia
                                style={{ height: 150 }}
                                image={place.photo ? place.photo.images.large.url : 'https://ideogram.ai/api/images/direct/Y9NATUkpQ4-e3sESStbBFw.png'}
                                title={place.name}
                            />
                            <CardContent style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                <Typography variant="h5" style={{ marginBottom: '10px', borderBottom: '2px solid #000' }}>{place.name}</Typography>
                                <Box display="flex" justifyContent="space-between" marginBottom="10px">
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold', borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}>Price:</Typography>
                                    <Typography variant="subtitle1">{place.price}</Typography>
                                </Box>
                                <Box marginBottom="10px" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.5)' }}>
                                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>Ranking:</Typography>
                                    <Typography variant="subtitle1" style={{ marginLeft: '20px' }}>{place.ranking}</Typography>
                                </Box>

                                <Box display="flex" justifyContent="space-between" marginBottom="10px">
                                    <Rating value={Number(place.rating)} readOnly/>
                                    <Typography variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                                </Box>
                                {place?.awards?.map((award, index) => (
                                    <Box key={index} my={1} display="flex" justifyContent="space-between" alignItems="center">
                                        <img src={award.images.small} alt={award.display_name} style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                        <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                                    </Box>
                                ))}
                                <Box display="flex" flexWrap="wrap" marginBottom="10px">
                                    {place?.cuisine?.map(({ name }, index) => (
                                        <Chip key={index} size="small" label={name} style={{ marginRight: '5px', marginBottom: '5px' }} />
                                    ))}
                                </Box>
                                {place?.address && (
                                    <Typography variant="subtitle2" color="textSecondary" style={{ marginBottom: '5px' }}>
                                        <LocationOnOutlinedIcon style={{ marginRight: '5px' }} /> {place.address}
                                    </Typography>
                                )}
                                {place?.phone && (
                                    <Typography variant="subtitle2" color="textSecondary" style={{ marginBottom: '5px' }}>
                                        <PhoneIcon style={{ marginRight: '30%' }} /> {place.phone}
                                    </Typography>
                                )}
                                <CardActions>
                                    <Button size="small" style={{ color: '#fff', backgroundColor: '#1a237e' }} onClick={() => window.open(place.web_url, '_blank')}>
                                        Trip Advisor
                                    </Button>
                                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                                        <LanguageIcon />
                                    </Button>
                                    <Button size="small" color="primary" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${place.latitude},${place.longitude}`, '_blank')}>
                                        <MapIcon />
                                    </Button>
                                </CardActions>
                            </CardContent>

                        </Card>
                    ))}

                </Slider>
            </div>
        </div>
    )
}

export default CardComponent