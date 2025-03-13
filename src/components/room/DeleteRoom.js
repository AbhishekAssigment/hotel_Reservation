// RoomList.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RoomService from '../../services/RoomService';
import './Room.css'; // Import CSS file

class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      error: null
    };
  }

  componentDidMount() {
    this.fetchRooms();
  }

  fetchRooms = () => {
    RoomService.getAllRooms()
      .then(response => {
        this.setState({
          rooms: response.data
        });
      })
      .catch(error => {
        console.error('Error:', error);
        this.setState({ error: 'An error occurred while fetching rooms' });
      });
  };

  handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      RoomService.deleteRoom(id)
        .then(() => {
          console.log('Room deleted successfully');
          this.fetchRooms();
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };

  render() {
    const { rooms, error } = this.state;
    return (
      <div className="container">
        <h2>Room List</h2>
        {error && <p>{error}</p>}
        <div className="table-container">
          <table className="content">
            <thead>
              <tr>
                <th>ID</th>
                <th>Room Number</th>
                <th>Type</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map(room => (
                <tr key={room.id}>
                  <td>{room.id}</td>
                  <td>{room.roomNumber}</td>
                  <td>{room.type}</td>
                  <td>{room.price}</td>
                  <td>
                    <Link to={`/edit-room/${room.id}`} className="button">Edit</Link>
                    <button onClick={() => this.handleDelete(room.id)} className="button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="button-group">
          <Link to="/admin" className="button">Back</Link>
        </div>
      </div>
    );
  }
}

export default RoomList;
