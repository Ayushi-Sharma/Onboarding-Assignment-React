import React, { useState } from 'react';
import './Header.scss';
import { getLocation } from '../../commons/helpers';

function Header () {
  const [coordinates, setCoordinates] = useState({latitude: 0, longitude: 0})

  getLocation().then(({ coords: {latitude, longitude} }) => setCoordinates({latitude, longitude})).catch(err => console.log(err));
  
  return (
    <div className="Header__Container">
      <div className="Header__Title"> Find <b>Near-By</b></div>
      <div className="Header__Coordinates">
        <div>Latitude: {coordinates && coordinates.latitude}</div>
        <div>Longitude: {coordinates && coordinates.longitude}</div>
      </div>
    </div>
  )

}

export default Header;