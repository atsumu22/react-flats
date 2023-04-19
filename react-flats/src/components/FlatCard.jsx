import React from 'react';

const FlatCard = (props) => {
  const { flat, onClickSelected } = props;
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
};

export default FlatCard;
