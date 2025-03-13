import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import RoomService from '../../services/RoomService';

function BookRoom() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [searchCriteria, setSearchCriteria] = useState({
    checkInDate: '',
    checkOutDate: '',
    capacity: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSearch = () => {
    // Redirect to search page with search criteria
    navigate(`/search?checkInDate=${searchCriteria.checkInDate}&checkOutDate=${searchCriteria.checkOutDate}&capacity=${searchCriteria.capacity}`);
  };

  return (
    <div className="container">
      <h2>Book a Room</h2>
      <div className="form">
        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            className="form-control"
            id="checkInDate"
            required
            value={searchCriteria.checkInDate}
            onChange={handleInputChange}
            name="checkInDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            className="form-control"
            id="checkOutDate"
            required
            value={searchCriteria.checkOutDate}
            onChange={handleInputChange}
            name="checkOutDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Capacity:</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            required
            value={searchCriteria.capacity}
            onChange={handleInputChange}
            name="capacity"
          />
        </div>
        <div className="button-group">
          <button onClick={handleSearch} className="button">Search</button>
        </div>
      </div>
    </div>
  );
}

export default BookRoom;
