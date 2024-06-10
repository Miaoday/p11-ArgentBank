import React from "react";

function Buttons({className, type, onClick, buttonName}){
  return (
    <button className={className} type={type} onClick={onClick} >
      {buttonName}
    </button>
  )

}
export default Buttons;