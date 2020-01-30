import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';

export default function Data() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://api.yelp.com/v3/businesses/search";

  const [businessList, setBusinessList] = useState([]);

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
        setBusinessList(response.data.businesses);
      })
      .catch(error => console.log(error))
  }, []);

  console.log(businessList);

  return (
    <div className="App">
      <h1>Hello world!!</h1>
    </div>
  );
}
