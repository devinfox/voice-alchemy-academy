import React, { useState } from 'react';
import { FaUser, FaCalendarAlt, FaEnvelope, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './StickyFooterToolbar.css';

function StickyFooterToolbar() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleIconClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="sticky-footer-toolbar">
      <Link to="/" className={`icon-column ${isSettingsOpen ? 'clicked' : ''}`}>
        <FaUser />
      </Link>
      <Link to="/calendar" className={`icon-column ${isSettingsOpen ? 'clicked' : ''}`}>
        <FaCalendarAlt />
      </Link>
      <Link to="/inbox" className={`icon-column ${isSettingsOpen ? 'clicked' : ''}`}>
        <FaEnvelope />
      </Link>
      <Link to="/settings" className={`icon-column ${isSettingsOpen ? 'clicked' : ''}`}>
        <FaCog />
      </Link>
    </div>
  );
}

export default StickyFooterToolbar;
