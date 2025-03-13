// InventoryService.js
import axios from "axios";

const INVENTORY_API_BASE_URL = "http://localhost:8083/api/inventory";

class InventoryService {
  getAllInventory() {
    return axios.get(INVENTORY_API_BASE_URL);
  }

  getInventoryById(id) {
    return axios.get(`${INVENTORY_API_BASE_URL}/${id}`);
  }

  addInventory(inventory) {
    return axios.post(INVENTORY_API_BASE_URL, inventory);
  }

  updateInventory(id, inventory) {
    return axios.put(`${INVENTORY_API_BASE_URL}/${id}`, inventory);
  }

  deleteInventory(id) {
    return axios.delete(`${INVENTORY_API_BASE_URL}/${id}`);
  }
}

export default new InventoryService();
