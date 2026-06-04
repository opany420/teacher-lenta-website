import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Features from './components/Features';
import Tutorials from './components/Tutorials';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import BookingModal from './components/BookingModal';
import LiveBanner from './components/LiveBanner';
import lenta1 from './assets/lenta1.jpg';
import lenta2 from './assets/lenta2.jpg';
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
      <LiveBanner />
      <Navbar />
      <main>
        <Hero onBookSession={handleOpenModal} heroImage={lenta1} />
        <About aboutImage={lenta2} />
        <Gallery />
        <Services onBookSession={handleOpenModal} />
        <Tutorials />
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
