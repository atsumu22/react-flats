import React from 'react';

const Marker = (props) => {
  const { lat, lng } = props;
  return (
    <div className="testmarker" lat={lat} lng={lng} style={{ width: "30px", height: "30px", borderRadius: "50%", background:"blue" }}>
    </div>
  );
};

export default Marker;
