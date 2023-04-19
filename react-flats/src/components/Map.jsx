import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

const Map = (props) => {
  const { position } = props;

  return (
    // Important! Always set the container height explicitly
    <div className="map" style={{ height: '100vh', width: '40%' }}>
      <GoogleMapReact
        defaultCenter={position.center}
        defaultZoom={position.zoom}
      >
        <Marker lat={position.center.lat} lng={position.center.lng} />
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
