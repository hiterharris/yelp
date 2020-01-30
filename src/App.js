import React from 'react';
import './App.css';
import yelp from './images/yelp.png';

import RestaurantList from './components/RestaurantList';

const App = () => {
  return (
    <div className="App">
      <img src={yelp} />
      <RestaurantList />
    </div>
  );
}

export default App;