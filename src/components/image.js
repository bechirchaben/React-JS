import React from "react";

const Image = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} style={{ width: "(35)%", height: "auto" }} />;
};

export default Image;
