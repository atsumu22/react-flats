import React from 'react';
// import FlatCard from './FlatCard';

const FlatCardList = (props) => {
  const { flats, onClickSelected } = props;

  return (
    <div>
      <div className="d-flex">
        { flats.map((flat, index) => {
          const bgImg = {
            backgroundImage:
              `url(${flat.imageUrl}), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
          };
          return (
            <div className={`card${flat.selected ? " active" : ""}${" " + index}`} style={bgImg} onClick={() => onClickSelected(index)} >
              <div className="card__price">{`${flat.price}${flat.priceCurrency}`}</div>
              <div className="card__description">
                <h2>{flat.name}</h2>
              </div>
            </div>
          );
          // <FlatCard flat={flat} onClickSelected={onClickSelected} index={index} />
        })}
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
