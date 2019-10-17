import React from 'react';
import './Header.scss';

function Header ({coords}) {
  return (
    <div className="Header__Container">
      <div className="Header__Title"> Find <b>Near-By</b></div>
      <div className="Header__Coordinates">
        <div>Latitude: {coords && coords.latitude}</div>
        <div>Longitude: {coords && coords.longitude}</div>
      </div>
    </div>
  )

}

export default Header;