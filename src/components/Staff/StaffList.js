// StaffList.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import StaffService from '../../services/StaffService';
import './StaffList.css';
import AdminNavbar from '../AdminNavbar';
function StaffList() {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = () => {
    StaffService.getAllStaff()
      .then(response => {
        setStaffList(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this staff?')) {
      StaffService.deleteStaff(id)
        .then(() => {
          console.log('Staff deleted successfully');
          fetchStaffList();
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
    <div className="container" style={{width:"600px",backgroundColor:"Turquoise"}}>
      <h2>Staff List</h2>
      <div className="table-container">
        <table className="content">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr> 
          </thead>
          <tbody>
            {staffList.map(staff => (
              <tr key={staff.id}>
                <td>{staff.id}</td>
                <td>{staff.name}</td>
                <td>{staff.position}</td>
                <td>
                  <NavLink to={`/edit-staff/${staff.id}`} className="button">Edit</NavLink> {/* Edit button using NavLink */}
                  <button onClick={() => handleDelete(staff.id)} className="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-group">
        <NavLink to="/add-staff" className="button">Add Staff</NavLink> {/* Add button using NavLink */} <br></br>
        <NavLink to="/admin" className="button">Back</NavLink> {/* Back button using NavLink */}
      </div>
    </div>
    </div>
</>
  );
}

export default StaffList;
