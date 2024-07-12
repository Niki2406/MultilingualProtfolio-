
import React, { useState } from 'react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, toEmail: 'nikiranga1998@gmail.com' }),
      });
      if (response.ok) {
        console.log('Email sent successfully!');
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        console.error('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-gray-800'}`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-pink-500 text-center mb-8">Contact</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className={`border border-pink-500 p-6 rounded-lg ${darkMode ? 'bg-blue-950' : 'bg-slate-300'}`}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`block w-full px-3 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-gray-800'}`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`block w-full px-3 py-2 border border-pink-500 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-gray-800'}`}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className={`block w-full px-3 py-2 border border-pink-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent ${darkMode ? 'bg-indigo-950 text-white' : 'bg-slate-200 text-gray-800'}`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="block w-full py-3 px-6 rounded-full bg-pink-500 text-white font-bold text-lg hover:bg-pink-600 transition-colors duration-300"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
