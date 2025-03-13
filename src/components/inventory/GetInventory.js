// GetInventory.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InventoryService from '../../services/InventoryService';

function GetInventory() {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    InventoryService.getInventoryById(id)
      .then(response => {
        setInventory(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Inventory Details</h2>
      <div>
        <strong>Item Name:</strong> {inventory.itemName}
      </div>
      <div>
        <strong>Quantity:</strong> {inventory.quantity}
      </div>
      <div>
        <strong>Price:</strong> {inventory.price}
      </div>
    </div>
  );
}

export default GetInventory;
