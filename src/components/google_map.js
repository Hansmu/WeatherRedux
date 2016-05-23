import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default(props) => {
    //Double curlies are there because the first set declares a Javascript variable, the second set a JS object
    return(
        <GoogleMapLoader
            containerElement={ <div style={{height: '100%'}} /> }
            googleMapElement={
                <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
            }
            />
    );
}