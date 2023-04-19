import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

const Map = () => {
  const defaultProps = {
    center: {
      lat: 20.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '100vh', width: '40%' }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={59.955413} lng={30.337844} text={"地点Aですよ"} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

// {/* <div>
// <div className="map">
//   <h1>Map Here!!</h1>
// </div>
// </div> */}

// <AnyReactComponent
// lat={59.955413}
// lng={30.337844}
// text="My Marker"
// />
