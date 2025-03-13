import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './adminDashboard.css';
import AdminNavbar from './AdminNavbar';
 
function AdminDashboard() {
  const [selectedOperation, setSelectedOperation] = useState('');
 
  const handleOperationClick = (operation) => {
    setSelectedOperation(operation);
  };
 
  const handleBack = () => {
    setSelectedOperation('');
  };
 
  return (
    <>
      <AdminNavbar/>
    <div  style={{
      width: "100%",
      height: "700px",
      backgroundImage:
      'url("https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg?t=st=1714307441~exp=1714311041~hmac=b47f02bfd4d423de47216b1fc24768cecf808be74fdd44c4a207b8ac0bbbe663&w=900")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      marginTop: "-20px"
      }}>
    <div className="dashboard-container" style={{backgroundColor:"purple"}}>
      <h2 style={{marginLeft:"200px"}}>Admin Dashboard</h2>
      {!selectedOperation && (
        <div className="button-group">
          <button onClick={() => handleOperationClick('room')}>Room</button>
          <br />
          <br />
          <button onClick={() => handleOperationClick('inventory')}>Inventory</button>
          <br />
          <br />
          <button onClick={() => handleOperationClick('staff')}>Staff</button>
          <br />
          <br />
          <button onClick={() => handleOperationClick('booking')}>Booking</button> {/* Button for booking operations */}
        </div>
      )}
      {selectedOperation === 'room' && (
        <div>
          {/* <h3>Room</h3> */}
          <div className="button-group">
            <Link to="/add-room" className="button">Add Room</Link>
            <br />
            <br />
            <Link to="/rooms" className="button">View Rooms</Link>
            <br />
            <br />
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
      {selectedOperation === 'inventory' && (
        <div>
          {/* <h3>Inventory</h3> */}
          <div className="button-group">
            <Link to="/add-inventory" className="button">Add Inventory</Link>
            <br />
            <br />
            <Link to="/inventory" className="button">View Inventory</Link>
            <br />
            <br />
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
      {selectedOperation === 'staff' && (
        <div>
          {/* <h3>Staff</h3> */}
          <div className="button-group">
            <Link to="/add-staff" className="button">Add Staff</Link>
            <br />
            <br />
            <Link to="/staff" className="button">View Staff</Link>
            <br />
            <br />
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
      {selectedOperation === 'booking' && (
        <div>
          {/* <h3>Booking</h3> Heading for Booking Operations */}
          <div className="button-group">
            <Link to="/add-booking" className="button">Add Booking</Link> {/* Add Booking button */}
            <br />
            <br />
            <Link to="/bookings" className="button">View Bookings</Link> {/* View Bookings button */}
            {/* Add more buttons for other booking operations */}
            <br />
            <br />
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
    </div>
    </div>
    </>
  );
}
 
export default AdminDashboard;