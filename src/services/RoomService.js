// RoomService.js
import axios from 'axios';

const ROOM_API_BASE_URL = 'http://localhost:8081/api/rooms';

class RoomService {
  getAllRooms() {
    return axios.get(ROOM_API_BASE_URL);
  }

  addRoom(room) {
    return axios.post(ROOM_API_BASE_URL, room);
  }

  getRoomById(roomId) {
    return axios.get(`${ROOM_API_BASE_URL}/${roomId}`);
  }

  updateRoom(roomId, room) {
    return axios.put(`${ROOM_API_BASE_URL}/${roomId}`, room);
  }

  deleteRoom(roomId) {
    return axios.delete(`${ROOM_API_BASE_URL}/${roomId}`);
  }

  // Update the searchRooms method to accept search parameters
  // searchRooms(searchParams) {
  //   return axios.post(`${ROOM_API_BASE_URL}/search`, searchParams);
  // }

  searchRooms() {
    return axios.get(ROOM_API_BASE_URL);
  }
}

export default new RoomService();
