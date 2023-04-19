import React from 'react';
import FlatCardList from './FlatCardList';
import Map from './Map';
import flats from './flats';

const App = () => {
  // const [ isSelected, setIsSelected ] = useState(false);
  // const [ newFlatsList, setNewFlatsList ] = useState(flats);

  // const onClickSelected = (index) => {
  //   console.log([...FlatCards]);
  // };

  return (
    <div>
      <div className="flex-left">
        <FlatCardList flats={flats} />
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
