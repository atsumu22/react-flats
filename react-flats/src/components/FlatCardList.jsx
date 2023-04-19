import React from 'react';
import FlatCard from './FlatCard';

const FlatCardList = (props) => {
  const { flats } = props;

  return (
    <div>
      <div className="d-flex">
        { flats.map(flat => <FlatCard flat={flat} />)}
      </div>
    </div>
  );
};

export default FlatCardList;






  // const onClickSelected = () => {
    // alert("clicked");
  // };

   // <div>
    //   <div className="d-flex">
    //     { flats.map((flat, index) =>
    //       <FlatCard
    //         key={flat}
    //         flat={flat}
    //         isSelected={isSelected}
    //         onClickSelected={onClickSelected(index={index})}
    //       />)
    //     }
    //   </div>
    // </div>
