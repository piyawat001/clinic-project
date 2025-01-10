import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// User APIs
export const getUserProfile = (phone) => API.get(`/users/profile/${phone}`);
export const updateUserProfile = (userData) => API.post('/users/profile', userData);

// Booking APIs
export const createBooking = (bookingData) => API.post('/bookings', bookingData);
export const getUserBookings = (userId) => API.get(`/bookings/user/${userId}`);
export const updateBookingStatus = (bookingId, status) => 
  API.patch(`/bookings/${bookingId}/status`, { status });