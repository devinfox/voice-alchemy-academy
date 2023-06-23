import React from 'react';
import './Button.css';

function Button({ label, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
