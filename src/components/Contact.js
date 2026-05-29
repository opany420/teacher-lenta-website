
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { contactInfo } from '../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childGrade: '',
    preferredMode: 'Online',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.parentName.trim() || !formData.childGrade.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    // Build WhatsApp message
    const whatsappMessage = `Hello Teacher Lenta! 👋

📋 *New Booking Request*

👤 *Parent's Name:* ${formData.parentName}
🎓 *Child's Grade/Age:* ${formData.childGrade}
📚 *Preferred Mode:* ${formData.preferredMode}
💬 *Message:* ${formData.message}

Sent from your website.`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp
    window.open(`https://wa.me/254795770464?text=${encodedMessage}`, '_blank');

    // Show success message
    toast.success('Your message has been sent to Teacher Lenta via WhatsApp!');
    
    // Clear form
    setFormData({ parentName: '', childGrade: '', preferredMode: 'Online', message: '' });
    
    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="parentName" className="block text-gray-700 font-bold mb-2">Parent's Name *</label>
              <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="childGrade" className="block text-gray-700 font-bold mb-2">Child's Grade/Age *</label>
              <input type="text" id="childGrade" name="childGrade" value={formData.childGrade} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
            </div>
            <div className="mb-4">
              <label htmlFor="preferredMode" className="block text-gray-700 font-bold mb-2">Preferred Mode</label>
              <select id="preferredMode" name="preferredMode" value={formData.preferredMode} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg">
                <option>Online</option>
                <option>In-Person</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full px-3 py-2 border rounded-lg" required></textarea>
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300 disabled:bg-indigo-400">
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          <div className="w-full md:w-1/2">
             <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                    Have questions or ready to book a session? Reach out via WhatsApp for a quick response or send me an email.
                </p>
                <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                        <a key={index} href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-indigo-600">
                            <span className="text-2xl mr-4">{info.icon}</span>
                            <div>
                                <p className="font-bold">{info.label}</p>
                                <p>{info.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
