// AddRoom.js
import React, { useState } from 'react';
import RoomService from '../../services/RoomService'; 
import { NavLink } from 'react-router-dom';
import './Room.css'; 
import AdminNavbar from '../AdminNavbar';


function AddRoom() {
  const [room, setRoom] = useState({
    roomNumber: '',
    roomType: '',
    roomService: '',
    price: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setRoom(prevRoom => ({
      ...prevRoom,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    RoomService.addRoom(room)
      .then(() => {
        console.log('Room added successfully');
        window.alert('Room added successfully');
        window.location.href = '/rooms'; // Redirect to room list page
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
    <AdminNavbar/>
    <div  style={{
      width: "100%",
      height: "700px",
      backgroundImage:
      'url("https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      }}>
    <div className="form-container">
      <div className="form-content">
        <h2>Add Room</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="roomNumber">Room Number:</label>
            <input
              type="text"
              id="roomNumber"
              name="roomNumber"
              value={room.roomNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="roomType">Room Type:</label>
            <select
              id="roomType"
              name="roomType"
              value={room.roomType}
              onChange={handleChange}
            >
              <option value="">Select Room Type</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="roomService">Room Service:</label>
            <select
              id="roomService"
              name="roomService"
              value={room.roomService}
              onChange={handleChange}
            >
              <option value="">Select Room Service</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              value={room.price}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button type="submit">Add</button><br></br>
            <NavLink to="/admin">Back</NavLink>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
}

export default AddRoom;
