import React from 'react';
import '../styles/Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav >
        <ul>
          <li>Archives</li>
          <li>Submit</li>
          <li>Features</li>
          <li>SOTM</li>
        </ul>
      </nav>
    )
  }
}

export default Nav;