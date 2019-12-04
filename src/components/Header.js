import React from 'react';
import Nav from './Nav';
import RNWHeader from '../images/RNWheader.png'
import '../styles/Header.css';

function Header() {

  return (
    <header>
      <Nav />
      <img src={RNWHeader} alt='Redacre Neighborhood Watch' width='100%'/>
    </header>
  )
}

export default Header;