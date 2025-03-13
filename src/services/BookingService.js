// BookingService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8082/api/bookings';

class BookingService {
  getAllBookings() {
    return axios.get(BASE_URL);
  }

  getBookingById(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  addBooking(data) {
    return axios.post(BASE_URL, data);
  }

  updateBooking(id, data) {
    return axios.put(`${BASE_URL}/${id}`, data);
  }

  deleteBooking(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

export default new BookingService();
