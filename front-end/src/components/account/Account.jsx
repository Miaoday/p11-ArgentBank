import React from "react";
import Buttons from "../buttons/Buttons";
import './account.css';

function Account({title, amount, description}) {
  return(
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Buttons className='transaction-button' type='button' buttonName='View transactions'/>
      </div>
    </section>
    )
}
export default Account;