import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import InventoryService from '../../services/InventoryService';

function AddInventory() {
  const [inventory, setInventory] = useState({
    itemName: '',
    quantity: '',
    price: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setInventory(prevInventory => ({
      ...prevInventory,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let formIsValid = true;

    if (!inventory.itemName) {
      newErrors['itemName'] = 'Item Name is required';
      formIsValid = false;
    }

    if (!inventory.quantity) {
      newErrors['quantity'] = 'Quantity is required';
      formIsValid = false;
    }

    if (!inventory.price) {
      newErrors['price'] = 'Price is required';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await InventoryService.addInventory(inventory);
        console.log('Inventory added successfully');
        window.location.href = '/inventory';
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div style={{
      width: "100%",
      height: "700px",
      backgroundImage:
      'url("https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg")',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      }}>
      <div className="form-container" style={{marginTop:"-20px"}}>
        <div className="form-content" style={{marginTop:"-30%"}}>
          <h2>Add Inventory</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="itemName">Item Name:</label>
              <input
                type="text"
                id="itemName"
                name="itemName"
                value={inventory.itemName}
                onChange={handleChange}
              />
              {errors['itemName'] && <span className="error">{errors['itemName']}</span>}
            </div>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={inventory.quantity}
                onChange={handleChange}
              />
              {errors['quantity'] && <span className="error">{errors['quantity']}</span>}
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={inventory.price}
                onChange={handleChange}
              />
              {errors['price'] && <span className="error">{errors['price']}</span>}
            </div>
            <div className="button-group">
              <button type="submit">Add</button><br></br>
              <NavLink to="/inventory">Cancel</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddInventory;
