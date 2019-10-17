import React, { useState, useEffect } from 'react';
import './DataSection.scss';
import { getLocation } from '../../commons/helpers';
import Card from '../Card/Card';
import { Tabs } from '../../statics/Statics';

function DataSection ({activeTab, coords}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [service, setService] = useState('');

    useEffect(() => {
        if(window.google) {
            setService(new window.google.maps.places.PlacesService(new window.google.maps.Map(document.getElementById('map'), {zoom: 15})));
        }
    }, [])

    useEffect(() => {
        return function cleanup() {
            getCachedData()
        }
    }, [coords, activeTab])

    const callback = (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setData(results)
        }   else {
            setError( `status ${status}: Something went wrong. Please reload the page!`)
        }
        setLoading(false)
    }
    const getCachedData = () => {
        setLoading(true)
        let request = {
            location: {lat: coords.latitude, lng: coords.longitude},
            radius: '500',
            type: [activeTab]
        };
        service && service.nearbySearch(request, callback);
    }
    return (
        <div className="DataSection__Container">
            <div id="map"></div>
            {loading && 
                <div className="DataSection__Loader">
                    <h4>Please wait while we fetch data</h4>
                    <img src="load.gif" alt="Loader Gif"/>
                </div>}
            {error ? <p className="DataSection__Loader">{error}</p> : !loading && <div className="DataSection__Wrapper">
                {   data.length > 0 && data.map((res, index) => (
                    <Card key={index} res={res}/>))
                }
                {data.length == 0 && <h4>No nearby {Tabs.find(tab => tab.label === activeTab).name} found.</h4>}
            </div>}
            {}
        </div>
    )
}

export default DataSection;