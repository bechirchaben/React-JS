import React from "react";

const Price = ({ price }) => {
  return <p>Price: ${price.toFixed(2)}</p>;
};

export default Price;
