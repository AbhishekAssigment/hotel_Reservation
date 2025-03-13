import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import RoomService from '../../services/RoomService';
import './Room.css';

const GetRoom = () => {
  const { id } = useParams();
  const [room, setRoom] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    RoomService.getRoomById(id)
      .then(response => {
        setRoom(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred while fetching room details');
      });
  }, [id]);

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
    <div className="container " style={{width:"400px", backgroundColor:"Coral"}}>
      <div className="room-details">
        <div className="room-detail">
          <div className="room-detail-label">Room Number:</div>
          <div className="room-detail-value">{room.roomNumber}</div>
        </div>
        <div className="room-detail">
          <div className="room-detail-label">Price:</div>
          <div className="room-detail-value">{room.price}</div>
        </div>
        <div className="room-detail">
          <div className="room-detail-label">Room Type:</div>
          <div className="room-detail-value">{room.roomType}</div>
        </div>
        <div className="room-detail">
          <div className="room-detail-label">Room Service:</div>
          <div className="room-detail-value">{room.roomService}</div>
        </div>
        <div className="button-group">
          <Link to={`/edit-room/${id}`} className="button">Edit</Link><br></br>
          <Link to="/rooms" className="button">Back</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GetRoom;
