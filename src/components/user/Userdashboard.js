// UserDashboard.js
import React, { useState } from 'react';
import './UserDashboard.css';
import UserNavbar from '../UserNavbar';

function UserDashboard() {
  const [searchParams, setSearchParams] = useState({
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    roomService: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = () => {
    // Redirect to search results page with search parameters
    window.location.href = '/search-results';
  };

  return (
    <div  style={{
      width: "100%",
      height: "700px",
      backgroundImage:
      'url("https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg?t=st=1714307441~exp=1714311041~hmac=b47f02bfd4d423de47216b1fc24768cecf808be74fdd44c4a207b8ac0bbbe663&w=900")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      }}>
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <div className="search-form">
        <h3>Room Availability Search</h3>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={searchParams.checkInDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date:</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={searchParams.checkOutDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            value={searchParams.roomType}
            onChange={handleInputChange}
          >
            <option value="">Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="roomService">Room Service:</label>
          <select
            id="roomService"
            name="roomService"
            value={searchParams.roomService}
            onChange={handleInputChange}
          >
            <option value="">Select Room Service</option>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>
        </div>
        <button onClick={handleSearch} className="button">Search</button>
      </div>
    </div>
    </div>
  );
}

export default UserDashboard;
