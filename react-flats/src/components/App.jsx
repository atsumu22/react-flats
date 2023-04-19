import React, { useState } from 'react';
import FlatCardList from './FlatCardList';
import Map from './Map';
import flats from './flats';

const App = () => {
  const [ newFlatsList, setNewFlatsList ] = useState(flats);


  const onClickSelected = (index) => {
    const newFlats = Array.from(flats);
    newFlats.forEach((flat) => {
      flat.selected = false;
    });
    newFlats[index].selected = true;
    setNewFlatsList(newFlats);
  };

  return (
    <div>
      <div className="flex-left">
        <FlatCardList flats={newFlatsList} onClickSelected={onClickSelected} />
      </div>
      <div className="flex-right">
        <Map />
      </div>
    </div>
  );
};

export default App;



    // const currentFlatsList = flats;

 // console.log(currentFlatsList);
    // setNewFlatsList(flatsWhichOneSelected);
