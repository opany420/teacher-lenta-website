
import React, { useState } from 'react';
import { tutorData } from '../data/content';

const BookingModal = ({ isOpen, onClose, onConfirm }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    childGrade: '',
    subject: '',
    preferredMode: 'Online',
    preferredDate: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = `
      *New Tutoring Request*
      Parent Name: ${formData.parentName}
      Child's Grade/Age: ${formData.childGrade}
      Subject: ${formData.subject}
      Preferred Mode: ${formData.preferredMode}
      Preferred Date: ${formData.preferredDate}
      Message: ${formData.message}
    `;
    const whatsAppUrl = `https://wa.me/${tutorData.contact.phone}?text=${encodeURIComponent(bookingDetails)}`;
    onConfirm(whatsAppUrl);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Book a Session</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Parent's Name</label>
            <input type="text" name="parentName" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Child's Grade/Age</label>
            <input type="text" name="childGrade" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Subject</label>
            <input type="text" name="subject" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Preferred Mode</label>
            <select name="preferredMode" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
              <option>Online</option>
              <option>In-Person</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Preferred Date</label>
            <input type="date" name="preferredDate" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Additional Message</label>
            <textarea name="message" rows="3" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg"></textarea>
          </div>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full">Cancel</button>
            <button type="submit" className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
