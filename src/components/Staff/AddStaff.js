import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import StaffService from '../../services/StaffService';
import './AddStaff.css';
function AddStaff() {
  const initialStaffState = {
    name: '',
    position: '',
    salary: '' // New field for salary
  };

  const [staff, setStaff] = useState(initialStaffState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setStaff({ ...staff, [name]: value });
  };

  const saveStaff = () => {
    const data = {
      name: staff.name,
      position: staff.position,
      salary: staff.salary // Include salary in data
    };

    StaffService.addStaff(data)
      .then(response => {
        console.log('Staff created successfully:', response.data);
        setSubmitted(true);
        setStaff(response.data); // Update staff state with response data
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
    <div className="container1">
      <h2 style={{marginLeft:"40px"}}>Add Staff</h2>
      <div className="form" style={{backgroundColor:"lightgreen"}}>
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {staff.name}
            </div>
            <div>
              <label>
                <strong>Position:</strong>
              </label>{" "}
              {staff.position}
            </div>
            <div>
              <label>
                <strong>Salary:</strong>
              </label>{" "}
              {staff.salary}
            </div>
            <NavLink to={"/staff/" + staff.id} className="button">
              View
            </NavLink>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={staff.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position:</label>
              <input
                type="text"
                className="form-control"
                id="position"
                required
                value={staff.position}
                onChange={handleInputChange}
                name="position"
              />
            </div>
            <div className="form-group">
              <label htmlFor="salary">Salary:</label> {/* Salary field */}
              <input
                type="number"
                className="form-control"
                id="salary"
                required
                value={staff.salary}
                onChange={handleInputChange}
                name="salary"
              />
            </div>
            <div className="button-group">
              <button onClick={saveStaff} className="button">
                Submit
              </button>
              <br></br>
              <NavLink to="/staff" className="button">
                Cancel
              </NavLink>{" "}
              {/* Redirect to staff list */}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default AddStaff;
