// SearchResults.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RoomService from '../../services/RoomService';
import './SearchResult.css';
import { Link } from "react-router-dom";


function SearchResults() {
  const location = useLocation();
  const searchParams = location.state;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchSearchResults();
  }, [searchParams]);

  const fetchSearchResults = () => {
    RoomService.searchRooms(searchParams)
      .then(response => {
        setSearchResults(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container" style={{backgroundColor:"Turquoise"}}>
      <h2>Search Results</h2>
      <div className="table-container">
        <table className="content">
          <thead>
            <tr>
              <th>Room Number</th>
              <th>Room Type</th>
              <th>Room Service</th> {/* Add Service Type header */}
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map(room => (
              <tr key={room.id}>
                <td>{room.roomNumber}</td>
                <td>{room.roomType}</td>
                <td>{room.roomService}</td> {/* Display Service Type */}
                <td>{room.price}</td>
                <td>
                  <button className="button">
                   <Link to="/Payment" style={{backgroundColor:"pink"}}> Book</Link>
                   </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchResults;
