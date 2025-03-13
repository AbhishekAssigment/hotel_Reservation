// EditBooking.js
import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'; // Import NavLink and useParams
import BookingService from '../../services/BookingService';
import './AddBooking.css';
function EditBooking() {
  const initialBookingState = {
    id: null,
    customerName: '',
    customerContact: '',
    customerAddress: '',
    roomNumber: '',
    checkInDate: '',
    checkOutDate: '',
    totalPrice: ''
  };

  const [currentBooking, setCurrentBooking] = useState(initialBookingState);
  const { id } = useParams(); // Get the id from URL params

  useEffect(() => {
    getBooking(id);
  }, [id]);

  const getBooking = id => {
    BookingService.getBookingById(id)
      .then(response => {
        setCurrentBooking(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentBooking({ ...currentBooking, [name]: value });
  };

  const updateBooking = () => {
    const updatedBooking = {
      ...currentBooking,
      totalPrice: parseFloat(currentBooking.totalPrice) // Convert totalPrice to a number
    };

    BookingService.updateBooking(updatedBooking.id, updatedBooking)
      .then(response => {
        console.log('Booking updated successfully:', response.data);
        window.location = "/bookings"; // Redirect to bookings list after updating
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div  style={{
      width: "100%",
      height: "700px",
      backgroundImage:
      'url("https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      }}>
    <div className="container" style={{width:"40%", backgroundColor:"Turquoise"}}>
      <h2>Edit Booking</h2>
      <div className="form" style={{width:"90%"}}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            required
            value={currentBooking.customerName}
            onChange={handleInputChange}
            name="customerName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerContact">Customer Contact:</label>
          <input
            type="text"
            className="form-control"
            id="customerContact"
            required
            value={currentBooking.customerContact}
            onChange={handleInputChange}
            name="customerContact"
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerAddress">Customer Address:</label>
          <input
            type="text"
            className="form-control"
            id="customerAddress"
            required
            value={currentBooking.customerAddress}
            onChange={handleInputChange}
            name="customerAddress"
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomNumber">Room Number:</label>
          <input
            type="text"
            className="form-control"
            id="roomNumber"
            required
            value={currentBooking.roomId}
            onChange={handleInputChange}
            name="roomNumber"
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date:</label>
          <input
            type="date"
            className="form-control"
            id="checkInDate"
            required
            value={currentBooking.checkInDate}
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
            value={currentBooking.checkOutDate}
            onChange={handleInputChange}
            name="checkOutDate"
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Total Price:</label>
          <input
            type="text"
            className="form-control"
            id="totalPrice"
            required
            value={currentBooking.totalPrice}
            onChange={handleInputChange}
            name="totalPrice"
          />
        </div>
        <div className="button-group">
          <button onClick={updateBooking} className="button">Update</button><br></br>
          <NavLink to="/bookings" className="button">Cancel</NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EditBooking;
