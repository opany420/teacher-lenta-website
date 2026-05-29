
import React from 'react';
import { tutorData } from '../data/content';

const Hero = ({ onBookSession, heroImage }) => {
  return (
    <section id="home" className="bg-indigo-600 text-white pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Expert Tutoring for Your Child</h2>
            <p className="text-lg mb-6 md:mb-8">Personalized and engaging tutoring sessions with {tutorData.name}.</p>
            <button 
              onClick={onBookSession}
              className="bg-white text-indigo-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300 mb-4 md:mb-6 inline-block"
            >
              Book a Session
            </button>
            <p className="mt-4 text-sm">Call or WhatsApp: {tutorData.contact.phone}</p>
          </div>

          {/* Right Column - Hero Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition duration-300">
              <img 
                src={heroImage} 
                alt={tutorData.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
