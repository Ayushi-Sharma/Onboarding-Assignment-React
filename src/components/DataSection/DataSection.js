import React, { useState, useEffect } from 'react';
import './DataSection.scss';
import { getLocation } from '../../commons/helpers';
import Card from '../Card/Card'

function DataSection ({activeTab}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => getData(), [activeTab])

    const callback = (results, status) => {
     if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setData(results)
            setLoading(false)
        }
    }
    const getData = () => {
        setLoading(true)
        getLocation().then(({ coords: {latitude, longitude} }) => {
            var center = new window.google.maps.LatLng(latitude,longitude);
            var map = new window.google.maps.Map(document.getElementById('map'), {
                center,
                zoom: 15
            });
            var request = {
                location: {lat: latitude, lng: longitude},
                radius: '500',
                type: [activeTab]
            };
            let service = new window.google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);
        });
    }
    return (
        <div className="DataSection__Container">
            <div id="map"></div>
            {loading && 
                <div className="DataSection__Loader">
                    <h4>Please wait while we fetch data</h4>
                    <img src="load.gif" alt="Loader Gif"/>
                </div>}
            {!loading && <div className="DataSection__Wrapper">
                {   data.map((res, index) => (
                    <Card key={index} res={res}/>))
                }
            </div>}
        </div>
    )
}

export default DataSection;