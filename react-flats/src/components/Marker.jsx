import React from 'react';

const Marker = (props) => {
  const { lat, lng, text } = props;
  return (
    <div className="testmarker" lat={lat} lng={lng} style={{ width: "100px", height: "100px", borderRadius: "50%", color:"red", background:"blue" }}>
      <h1>{text}</h1>
    </div>
  );
};

export default Marker;
