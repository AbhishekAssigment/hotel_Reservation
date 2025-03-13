// AddBooking.js
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink and useNavigate
import BookingService from '../../services/BookingService';
 import "./AddBooking.css";
function AddBooking() {
  const navigate = useNavigate(); // Initialize navigate
  const initialBookingState = {
    customerName: '',
    customerContact: '',
    customerAddress: '',
    roomNumber: '',
    checkInDate: '',
    checkOutDate: '',
    totalPrice: ''
  };

  const [booking, setBooking] = useState(initialBookingState);
  const [error, setError] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  const saveBooking = () => {
    const data = {
      customerName: booking.customerName,
      customerContact: booking.customerContact,
      customerAddress: booking.customerAddress,
      roomNumber: booking.roomNumber,
      checkInDate: booking.checkInDate,
      checkOutDate: booking.checkOutDate,
      totalPrice: booking.totalPrice
    };

    console.log("Data to be sent:", data);

    BookingService.addBooking(data)
      .then(response => {
        console.log('Booking created successfully:', response.data);
        setBooking(initialBookingState);
        setError('');
        navigate('/bookings'); // Redirect to bookings list after adding a booking
      })
      .catch(error => {
        if (error.response) {
          console.error('Error response:', error.response);
          setError(error.response.data.message || 'An error occurred');
        } else if (error.request) {
          console.error('Error request:', error.request);
          setError('Request error: Please try again later');
        } else {
          console.error('Error:', error.message);
          setError('An error occurred: Please try again later');
        }
      });
  };

  return (
    <div  style={{
      width: "100%",
      height: "900px",
      backgroundImage:
      'url("https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg?t=st=1714307441~exp=1714311041~hmac=b47f02bfd4d423de47216b1fc24768cecf808be74fdd44c4a207b8ac0bbbe663&w=900")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      marginTop:"-20px"
      }}>
    <div className="container" style={{width:"40%", backgroundColor:"Turquoise"}}>
      <h2>Add Booking</h2>
      <div className="form" style={{width:"90%"}}>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            required
            value={booking.customerName}
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
            value={booking.customerContact}
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
            value={booking.customerAddress}
            onChange={handleInputChange}
            name="customerAddress"
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomNumber">Room Number</label>
          <input
            type="text"
            className="form-control"
            id="roomNumber"
            required
            value={booking.roomNumber}
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
            value={booking.checkInDate}
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
            value={booking.checkOutDate}
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
            value={booking.totalPrice}
            onChange={handleInputChange}
            name="totalPrice"
          />
        </div>
        <div className="button-group">
          <button onClick={saveBooking} className="button">Submit</button><br></br>
          <NavLink to="/bookings" className="button">Cancel</NavLink>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddBooking;
