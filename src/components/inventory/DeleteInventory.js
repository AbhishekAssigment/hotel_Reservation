import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InventoryService from '../../services/InventoryService';

const DeleteInventory = () => {
  const { id } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    InventoryService.deleteInventory(id)
      .then(() => {
        setMessage('Inventory deleted successfully');
        window.location.href = '/inventory'; // Redirect to the inventory list page
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('An error occurred while deleting the inventory');
      });
  }, [id]);

  return (
    <div>
      <h2>Delete Inventory</h2>
      <p>{message}</p>
    </div>
  );
};

export default DeleteInventory;
