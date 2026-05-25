
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { tutorData } from '../data/content';

const FloatingWhatsAppButton = () => {
  const whatsAppUrl = `https://wa.me/${tutorData.contact.phone}?text=Hi%20Teacher%20Lenta!%20I%20would%20like%20to%20book%20a%20tutoring%20session.`;

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-10 flex items-center justify-center animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default FloatingWhatsAppButton;
