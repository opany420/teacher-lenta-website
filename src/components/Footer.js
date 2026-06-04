
import React from 'react';
import { tutorData } from '../data/content';
import AdminModal from './AdminModal';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <p>&copy; {new Date().getFullYear()} {tutorData.name}. All Rights Reserved.</p>
        </div>
        <div className="text-center">
          <AdminModal />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
