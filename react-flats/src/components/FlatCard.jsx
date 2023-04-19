import React, { useState } from 'react';

const FlatCard = (props) => {
  const [ isSelected, setIsSelected ] = useState(false);
  const { flat } = props;
  const bgImg = {
    backgroundImage:
    `url(${flat.imageUrl}), linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2))`
  };
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={`card ${isSelected ? "active" : ""}`} style={bgImg} onClick={handleClick}>
      <div className="card__price">{`${flat.price}${flat.priceCurrency}`}</div>
      <div className="card__description">
        <h2>{flat.name}</h2>
      </div>
    </div>
  );
};

export default FlatCard;
