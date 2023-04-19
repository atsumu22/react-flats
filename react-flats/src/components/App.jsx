import React, { useState } from 'react';
import FlatCardList from './FlatCardList';
import Map from './Map';
import flats from './flats';

const App = () => {
  const [ newFlatsList, setNewFlatsList ] = useState(flats);
  const [ position, setPosition ] = useState({ center: { lat: 48.85, lng: 2.35 }, zoom: 12.5 });


  const onClickSelected = (index) => {
    const newFlats = Array.from(flats);
    const newPosition = { center: { lat: newFlats[index].lat, lng: newFlats[index].lng }, zoom: 20 };
    newFlats.forEach((flat) => {
      flat.selected = false;
    });
    newFlats[index].selected = true;
    setNewFlatsList(newFlats);
    setPosition(newPosition);
  };

  return (
    <div>
      <div className="flex-left">
        <FlatCardList flats={newFlatsList} onClickSelected={onClickSelected} />
      </div>
      <div className="flex-right">
        <Map position={position} />
      </div>
    </div>
  );
};

export default App;
