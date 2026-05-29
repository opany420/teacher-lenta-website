
import React from 'react';
import { tutorData } from '../data/content';

const About = ({ aboutImage }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - About Image with Border Frame */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                {/* Orange/Red Border Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg p-1" style={{transform: 'rotate(-2deg)'}}></div>
                <div className="relative bg-white rounded-lg overflow-hidden shadow-xl" style={{transform: 'rotate(2deg)'}}>
                  <div className="w-56 h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 overflow-hidden">
                    <img 
                      src={aboutImage} 
                      alt={tutorData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - About Text */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">{tutorData.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
