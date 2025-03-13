import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';
import { useNavigate } from "react-router";
import './AdminNavbar.css';

function AdminNavbar() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const adminLogout = () => {
    localStorage.removeItem("myUser"); // Example: Removing user data from local storage
    alert("You have successfully logout.........");
    navigate('/'); // Redirect to the login page or any other desired location
  };
 
  return (
    <>
 
      <nav className="navbar navbar-expand navbar-dark bg-dark">
 
        <Link to={""} className="navbar-brand">
          The Grand Hotel
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Home
            </Link>
          </li>
 
          {/* <li className="nav-item">
            <Link to={"/admin_pack"} className='nav-link'>
              Packages
            </Link>
          </li> */}
 
          {/* <li className="nav-item">
            <Link to={"/add-room"} className='nav-link'>
              Add Room
            </Link>
          </li> */}
 
         
          <li className="nav-item">
            <Link to={"/rooms"} className='nav-link'>
               Rooom's
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to={"/add-staff"} className='nav-link'>
            Add Staff  
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to={"/staff"} className='nav-link'>
              Staff's
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to={"/add-booking"} className='nav-link'>
             AddBooking
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to={"/bookings"} className='nav-link'>
              Booking's
            </Link>
          </li>
   
          <li className="nav-item">
            <Link to={"/inventory"} className='nav-link'>
              Inventory
            </Link>
          </li>
         {/* <li className="nav-item">
            <Link to={"/adduser"} className='nav-link'>
              Add User
            </Link>
        </li> */}
        </div>
        <div className="ms-auto pe-md-5 navbar-nav">
       
          <li className='nav-item'>
            <Link to='/' onClick={adminLogout} className='nav-link'>
               Logout
            </Link>
          </li>
         
        </div>
 
 
 
      </nav>
    </>
  );
}
export default AdminNavbar;