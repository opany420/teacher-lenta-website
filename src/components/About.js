
import React from 'react';
import { tutorData } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg">{tutorData.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
