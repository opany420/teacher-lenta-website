
import React from 'react';
import { tutorData } from '../data/content';

const Hero = ({ onBookSession }) => {
  return (
    <section id="home" className="bg-indigo-600 text-white pt-24 pb-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">Expert Tutoring for Your Child</h2>
        <p className="text-lg mb-6">Personalized and engaging tutoring sessions with {tutorData.name}.</p>
        <button 
          onClick={onBookSession}
          className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300"
        >
          Book a Session
        </button>
        <p className="mt-4 text-sm">Call or WhatsApp: {tutorData.contact.phone}</p>
      </div>
    </section>
  );
};

export default Hero;
