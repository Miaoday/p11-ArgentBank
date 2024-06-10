import React from "react";
import './feature.css';

function Feature ({image, alt, title, description}){
  return(
    <div className="feature-item">
      <img 
      className="feature-icon" 
      src={image} 
      alt={alt}  
      />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}
export default Feature;