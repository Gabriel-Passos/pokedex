import React from 'react';

import './styles.css';

const Header: React.FC = () => {
  return (
    <header id="page-header">
      <div className="header-circle" />

      <div className="three-circles">
        <div className="red-circle" />
        <div className="yellow-circle" />
        <div className="green-circle" />
      </div>
    </header>
  );
}

export default Header;