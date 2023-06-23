import React from 'react';
import placeholderImage from './placeholder.png';

function Placeholder() {
  return (
    <div className="placeholder-container">
      <img src={placeholderImage} alt="Placeholder" className="placeholder-image" />
    </div>
  );
}

export default Placeholder;
