import axios from 'axios';
import {useEffect} from 'react';

export const fetchRestaurantList = () => dispatch => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.yelp.com/v3/businesses/search";

    useEffect(() => {
    axios
        .get(proxyurl + url, {
            headers: {
                Authorization: 'Bearer 4TwtB1xSvyHl5nDWqmOPj_3cHANyKsn8XhO2lBR2xdjRWs52PivbW-wdvQ92uWNIYR76VeQxXfSyh7jREVLe_HBd31tuPk08L5lIsHyEb449yLFbeGnPzbZGDaz_XHYx',
            },
            params: {
                location: 'charlotte',
            },
        })
        .then(response => {
            dispatch({ type: 'FETCH_RESTAURANT_LIST', payload: response.data.businesses});
        })
    }, [dispatch]);
};
