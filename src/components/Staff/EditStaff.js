// EditStaff.js
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom'; // Import NavLink
import StaffService from '../../services/StaffService';

function EditStaff() {
  const { id } = useParams();
  const [staff, setStaff] = useState({
    name: '',
    position: ''
  });

  useEffect(() => {
    StaffService.getStaffById(id)
      .then(response => {
        setStaff(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleChange = event => {
    const { name, value } = event.target;
    setStaff(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    StaffService.updateStaff(id, staff)
      .then(() => {
        console.log('Staff updated successfully');
        window.location = '/staff';
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
      'url("https://img.freepik.com/free-photo/view-luxurious-hotel-interior-space_23-2150683453.jpg?t=st=1714307441~exp=1714311041~hmac=b47f02bfd4d423de47216b1fc24768cecf808be74fdd44c4a207b8ac0bbbe663&w=900")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      }}>
    <div className="form-container">
      <div className="form-content">
        <h2>Edit Staff</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={staff.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={staff.position}
              onChange={handleChange}
            />
          </div>
          <div className="button-group">
            <button type="submit">Update Staff</button><br></br>
            <NavLink to="/staff" className="button">Back</NavLink> {/* Back button using NavLink */}
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default EditStaff;
