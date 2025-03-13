// BookingList.js
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; // Import NavLink and Link
import BookingService from '../../services/BookingService';
import AdminNavbar from '../AdminNavbar';

function BookingList() {
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetchBookingList();
  }, []);

  const fetchBookingList = () => {
    BookingService.getAllBookings()
      .then(response => {
        setBookingList(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      BookingService.deleteBooking(id)
        .then(() => {
          console.log('Booking deleted successfully');
          fetchBookingList();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
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
    <div className="container" style={{backgroundColor:"Turquoise"}}>
      <h2>Booking List</h2>
      <div className="table-container">
        <table className="content">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Customer Contact</th>
              <th>Customer Address</th>
              <th>Room Number</th>
              <th>Check-In Date</th>
              <th>Check-Out Date</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookingList.map(booking => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.customerName}</td>
                <td>{booking.customerContact}</td>
                <td>{booking.customerAddress}</td>
                <td>{booking.roomNumber}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{booking.totalPrice}</td>
                <td>
                  <Link to={`/edit-booking/${booking.id}`} className="button">Edit</Link>
                  <button onClick={() => handleDelete(booking.id)} className="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-group">
        <NavLink to="/add-booking" className="button">Add Booking</NavLink><br></br>
        <NavLink to="/admin" className="button">Back</NavLink>
      </div>
    </div>
    </div>
    </>
  );
}

export default BookingList;
