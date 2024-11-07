import React, { useState } from 'react';

function AddDestination() {
  const [destinationName, setDestinationName] = useState('');
  const [locationName, setLocationName] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDestination = {
      destination_name: destinationName,
      location_name: locationName,
      amount: amount,
    };

    try {
      const response = await fetch('http://localhost:5000/add-destination', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDestination),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(`Success: ${data.message}`);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Network error: Could not add destination');
    }
  };

  return (
    <div className="add-destination-container">
      <h2>Add New Destination</h2>
      <form className="destination-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destinationName">Destination Name:</label>
          <input
            type="text"
            id="destinationName"
            value={destinationName}
            onChange={(e) => setDestinationName(e.target.value)}
            required
            placeholder="Enter destination name"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="locationName">Location Name:</label>
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            required
            placeholder="Enter location name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            placeholder="Enter amount"
          />
        </div>

        <button type="submit" className="submit-button">Add Destination</button>
      </form>

      {message && <p className="response-message">{message}</p>}
    </div>
  );
}

export default AddDestination;
