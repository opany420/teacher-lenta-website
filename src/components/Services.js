
import React from 'react';
import { services, tutorData } from '../data/content';

const Services = ({ onBookSession }) => {
  const whatsAppBookLink = `https://wa.me/${tutorData.contact.phone}?text=Hi%20Teacher%20Lenta!%20I%20would%20like%20to%20book%20a%20tutoring%20session.`;

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-4xl font-bold text-indigo-600 mb-4">£{service.price}<span className="text-lg text-gray-500">/hr</span></p>
              <ul className="text-gray-600 mb-6 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onBookSession}
                className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300 mb-3"
              >
                Book Now
              </button>
              <a 
                href={whatsAppBookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 text-center block"
              >
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
