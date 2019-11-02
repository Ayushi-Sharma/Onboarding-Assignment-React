import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { getLocation } from './commons/helpers'


function App () {
  const [coordinates, setCoordinates] = useState({latitude: 0, longitude: 0})

  getLocation().then(({ coords: {latitude, longitude} }) => setCoordinates({latitude, longitude})).catch(err => console.log(err));
  return (
    <div className="App">
      <Header coords={coordinates}/>
      <Content coords={coordinates}/>
    </div>
   )
}

export default App;

  
