import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import BookingModal from './components/BookingModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleConfirmBooking = (url) => {
    window.open(url, '_blank');
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main>
        <Hero onBookSession={handleOpenModal} />
        <About />
        <Services onBookSession={handleOpenModal} />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <BookingModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}

export default App;
