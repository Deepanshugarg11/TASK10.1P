import React from 'react';
import './CenteredBar.css';

function CenteredBar() {
  return (
    <div className="CenterBar">
      <p>Dev@Deakin</p>
      <div className="Content">
        <input type="text" placeholder="Search" className="SearchInput" />
      </div>
     <p> Post </p>
     <p> Login </p>
    </div>
  );
}

export default CenteredBar;