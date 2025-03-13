// StaffService.js
import axios from "axios";

const STAFF_API_BASE_URL = "http://localhost:8084/api/staff";

class StaffService {
  getAllStaff() {
    return axios.get(STAFF_API_BASE_URL);
  }

  getStaffById(id) {
    return axios.get(STAFF_API_BASE_URL + "/" + id);
  }

  addStaff(staff) {
    return axios.post(STAFF_API_BASE_URL, staff);
  }

  updateStaff(id, staff) {
    return axios.put(STAFF_API_BASE_URL + "/" + id, staff);
  }

  deleteStaff(id) {
    return axios.delete(STAFF_API_BASE_URL + "/" + id);
  }
}

export default new StaffService();
