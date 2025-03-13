// RoomList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RoomService from '../../services/RoomService';
import './Room.css'; // Import CSS file
import AdminNavbar from '../AdminNavbar';


function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    RoomService.getAllRooms()
      .then(response => {
        setRooms(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred while fetching rooms');
      });
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      RoomService.deleteRoom(id)
        .then(() => {
          console.log('Room deleted successfully');
          fetchRooms();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <>
      <AdminNavbar/>
    <div className="container" style={{backgroundColor:"Turquoise"}}>
      <h2>Room List</h2>
      {error && <p>{error}</p>}
      <div className="table-container">
        <table className="content">
          <thead>
            <tr>
              <th>ID</th>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Room Service</th>
              <th>Price</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => (
              <tr key={room.id}>
                <td>{room.id}</td>
                <td>{room.roomNumber}</td>
                <td>{room.roomType}</td>
                <td>{room.roomService}</td>
                <td>{room.price}</td>
                <td>
                  <Link to={`/edit-room/${room.id}`} className="button">Edit</Link>
                  <Link to={`/room/${room.id}`} className="button">View</Link>
                  <button onClick={() => handleDelete(room.id)} className="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-group">
        <Link to="/admin" className="button">Dashboard</Link>
      </div>
    </div>
    </>
  );
}

export default RoomList;
