import React, { useState } from 'react';
import './SettingsPage.css'

function SettingsPage() {
  const [profilePhoto, setProfilePhoto] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleProfilePhotoChange = (event) => {
    // Handle profile photo change logic
    // e.g., setProfilePhoto(event.target.value)
  };

  const handleNameChange = (event) => {
    // Handle name change logic
    // e.g., setName(event.target.value)
  };

  const handlePaymentMethodChange = (event) => {
    // Handle payment method change logic
    // e.g., setPaymentMethod(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submission logic to update user's settings
    // e.g., make an API request to update user's profile information
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Profile Photo</label>
          <input type="file" onChange={handleProfilePhotoChange} />
        </div>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Payment Method</label>
          <input type="text" value={paymentMethod} onChange={handlePaymentMethodChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default SettingsPage;
