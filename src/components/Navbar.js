
import React, { useState } from 'react';
import { tutorData } from '../data/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">{tutorData.name}</h1>
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-indigo-600">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-indigo-600">About</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-indigo-600">Services</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-indigo-600">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600">Contact</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <button onClick={() => scrollToSection('home')} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 w-full text-left">Home</button>
          <button onClick={() => scrollToSection('about')} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 w-full text-left">About</button>
          <button onClick={() => scrollToSection('services')} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 w-full text-left">Services</button>
          <button onClick={() => scrollToSection('testimonials')} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 w-full text-left">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 w-full text-left">Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
