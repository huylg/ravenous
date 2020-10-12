import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.js';
import BusinessList from '../BusinessList/BusinessList.js';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [];

businesses.push(business);

for(let i=0;i<=4;i++){
  const item = Object.assign({},business);
  businesses.push(item);
}

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
