import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AdminDashboard from './components/adminDashboard';
import UserDashboard from './components/user/Userdashboard';
import Login from './components/Login';
import Signup from './components/Signup';




import RoomList from './components/room/RoomList';
import GetRoom from './components/room/GetRoom';
import AddRoom from './components/room/AddRoom';
import EditRoom from './components/room/EditRoom';
import DeleteRoom from './components/room/DeleteRoom';

import About from './components/About';
import Contact from './components/Contact';

import InventoryList from './components/inventory/InventoryList';
import GetInventory from './components/inventory/GetInventory';
import AddInventory from './components/inventory/AddInventory';
import EditInventory from './components/inventory/EditInventory';
import DeleteInventory from './components/inventory/DeleteInventory';

import StaffList from './components/Staff/StaffList';
import GetStaff from './components/Staff/GetStaff'; // Import GetStaff component
import AddStaff from './components/Staff/AddStaff'; // Import AddStaff component
import EditStaff from './components/Staff/EditStaff'; // Import EditStaff component

import AddBooking from './components/Booking/AddBooking';
import BookingList from './components/Booking/BookingList';
import EditBooking from './components/Booking/EditBooking';
import Home1 from './components/Home1';
// import CheckRoomAvailability from './components/user/CheckRoomAvailability'; // Import CheckRoomAvailability component
import BookRoom from './components/user/BookRoom'; // Import BookRoom component
import SearchResults from './components/user/SearchResults';
import PaymentOpen from "./Payment Component/PaymentOpen";
// import SearchRoom from './components/user/SearchRoom'; // Import SearchRoom component

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  // Function to handle login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Pass loggedIn and handleLogout props to Header */}
         {/* <Header loggedIn={loggedIn} handleLogout={handleLogout} />  */}
        <div className="content">
          <Routes>
          <Route path="/" element={<Home1 />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/rooms" element={<RoomList />} />
            <Route path="/add-room" element={<AddRoom />} />
            <Route path="/room/:id" element={<GetRoom />} />
            <Route path="/edit-room/:id" element={<EditRoom />} />
            <Route path="/delete-room/:id" element={<DeleteRoom />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />

            <Route path="/inventory" element={<InventoryList />} />
            <Route path="/inventory/:id" element={<GetInventory />} />
            <Route path="/add-inventory" element={<AddInventory />} />
            <Route path="/edit-inventory/:id" element={<EditInventory />} />
            <Route path="/delete-inventory/:id" element={<DeleteInventory />} />

            <Route path="/staff" element={<StaffList />} /> 
            <Route path="/staff/:id" element={<GetStaff />} /> 
            <Route path="/add-staff" element={<AddStaff />} /> 
            <Route path="/edit-staff/:id" element={<EditStaff />} /> 

            <Route path="/add-booking" element={<AddBooking />} />
            <Route path="/bookings" element={<BookingList />} />
            <Route path="/edit-booking/:id" element={<EditBooking />} />

{/* payment*/}
{/* 
<Route path="/pay" element={<Payment />} /> */}
<Route path="/Payment" element={<PaymentOpen />} />


            {/* Add routes for user operations */}
            <Route path="/user-dashboard" element={<UserDashboard />} />
            {/* <Route path="/check-room-availability" element={<CheckRoomAvailability />} /> */}
            <Route path="/book-room" element={<BookRoom />} />
            {/* <Route path="/search-room" element={<SearchRoom />} /> */}
            <Route path="/search-results" element={<SearchResults />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
