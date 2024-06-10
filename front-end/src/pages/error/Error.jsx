import React from 'react';
import { NavLink } from 'react-router-dom';
import Buttons from '../../components/buttons/Buttons';
import './error.css';

function Error () {
  return(
    <main className='main bg-dark error'>
      <div className='header'>
        <h1 className='error-title'>Page 404</h1>
        <h2>Page No Found</h2>
        <NavLink to='/'>
          <Buttons className='edit-button' type='button' buttonName='Back to home' />
        </NavLink>    
      </div>
    </main>
  )
}
export default Error;