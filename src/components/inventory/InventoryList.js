import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InventoryService from '../../services/InventoryService';
import './Inventory.css'; // Import CSS file
import AdminNavbar from '../AdminNavbar';

function InventoryList() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchInventoryItems();
  }, []);

  const fetchInventoryItems = () => {
    InventoryService.getAllInventory()
      .then(response => {
        console.log('Inventory items:', response.data); // Log the response data
        setInventoryItems(response.data);
      })
      .catch(error => {
        console.error('Error:', error.message);
        setError('An error occurred while fetching inventory items');
      });
  };

  const handleDelete = id => {
    if (window.confirm('Are you sure you want to delete this inventory item?')) {
      InventoryService.deleteInventory(id)
        .then(() => {
          console.log('Inventory item deleted successfully');
          fetchInventoryItems();
        })
        .catch(error => {
          console.error('Error:', error.message);
          setError('An error occurred while deleting the inventory item');
        });
    }
  };

  return (
    <>
    <AdminNavbar/>
    <div className="container" style={{backgroundColor:"Turquoise" }}>
      <h2>Inventory List</h2>
      {error && <p>{error}</p>}
      <div className="table-container">
        <table className="content">
          <thead>
            <tr>
              <th>ID</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.itemName}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/edit-inventory/${item.id}`} className="button">Edit</Link>
                  <button onClick={() => handleDelete(item.id)} className="button">Delete</button>
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

export default InventoryList;
