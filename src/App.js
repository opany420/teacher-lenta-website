import React, { useState, useEffect } from 'react';
import './App.css';
import { FaPhone, FaBook, FaHome, FaStar, FaCheckCircle, FaUsers, FaBolt, FaAward } from 'react-icons/fa';

const App = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* NAVBAR */}
      <nav className={`transition-all duration-300 ${isSticky ? 'fixed top-0 w-full shadow-lg bg-white z-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Teacher Lenta
          </div>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-red-600 transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-red-600 transition">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-red-600 transition">Services</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-red-600 transition">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-red-600 transition">Contact</button>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition font-semibold flex items-center gap-2">
            <FaPhone size={18} /> Call Now
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-float">✨</div>
          <div className="absolute top-1/3 right-20 text-5xl animate-float" style={{animationDelay: '0.5s'}}>⭐</div>
          <div className="absolute bottom-20 left-1/4 text-6xl animate-float" style={{animationDelay: '1s'}}>✨</div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Expert iPrimary & Key Stage 2 Tutoring
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Helping your child build skills, confidence, and a love for learning.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg">
              Book a Session
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition text-lg flex items-center justify-center gap-2">
              <FaPhone size={20} /> Call: 0795770464
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
              <div className="text-center">
                <FaBook size={80} className="text-red-600 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Professional Tutor Photo</p>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900">Meet Teacher Lenta</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With years of experience in education, I'm passionate about helping children discover their potential. Specializing in iPrimary and Key Stage 2, I create personalized learning experiences that make education fun, engaging, and effective.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My approach focuses on building confidence, fostering curiosity, and ensuring every child gets the support they need to excel. I believe every student is unique, and education should be tailored to their individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES/PRICING SECTION */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border-l-4 border-blue-600">
              <FaBook className="text-blue-600 text-5xl mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Online Tutoring</h3>
              <p className="text-4xl font-bold text-red-600 mb-4">£7/hour</p>
              <p className="text-gray-700 mb-6">Flexible sessions from anywhere. Perfect for busy schedules. Learn at your own pace with personalized attention and recorded lessons.</p>
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-semibold w-full">
                Book Now
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border-l-4 border-orange-600">
              <FaHome className="text-orange-600 text-5xl mb-4" />
              <h3 className="text-3xl font-bold mb-4 text-gray-900">In-Person Tutoring</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">£10/hour</p>
              <p className="text-gray-700 mb-6">One-on-one sessions in a supportive environment. Direct interaction for deeper understanding. Face-to-face learning with proven results.</p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition font-semibold w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <FaAward className="text-red-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Knowledge</h3>
              <p className="text-gray-700">Qualified and experienced in iPrimary and Key Stage 2 curriculum.</p>
            </div>
            <div className="text-center p-6">
              <FaBolt className="text-orange-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Scheduling</h3>
              <p className="text-gray-700">Sessions tailored to your family's availability and needs.</p>
            </div>
            <div className="text-center p-6">
              <FaUsers className="text-blue-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Child-Friendly Approach</h3>
              <p className="text-gray-700">Patient, encouraging, and fun learning environment.</p>
            </div>
            <div className="text-center p-6">
              <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-700">Consistent improvements in grades and confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">What Parents Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', quote: 'My daughter\'s confidence in maths has improved dramatically. Teacher Lenta is patient and makes learning fun!' },
              { name: 'Michael Chen', quote: 'Best tutoring experience we\'ve had. Professional, reliable, and results-driven. Highly recommended!' },
              { name: 'Emma Thompson', quote: 'Our son went from struggling to enjoying English lessons. The personalized approach really works!' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400 fill-yellow-400" size={20} />)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 text-gray-900">Get in Touch</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Get the best education services at your doorstep</p>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Parent Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Child's Grade</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600" placeholder="e.g., Year 4" />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Preferred Mode</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600">
                  <option>Select Mode</option>
                  <option>Online</option>
                  <option>In-Person</option>
                  <option>Both</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">Message</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 h-32" placeholder="Tell us about your needs..."></textarea>
              </div>
              <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-bold text-lg">
                Submit
              </button>
            </form>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <FaPhone className="text-red-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900">Phone</p>
                    <p className="text-gray-700 text-lg">0795770464</p>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-4">Service Areas</p>
                  <p className="text-gray-700">📍 Online: Worldwide</p>
                  <p className="text-gray-700">📍 In-Person: Available upon request</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-2">Available</p>
                  <p className="text-gray-700">Flexible scheduling to suit your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Teacher Lenta</h3>
              <p className="text-gray-400">Transforming education, building futures.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">About</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Services</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Online Tutoring</li>
                <li>In-Person Tutoring</li>
                <li>Custom Programs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400">📞 0795770464</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Teacher Lenta. All rights reserved. | Dedicated to quality education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
