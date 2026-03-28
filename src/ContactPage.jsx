// src/ContactPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    designation: ''
  });
  

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle the input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    

    console.log("DEMO BOOKED DATA:", formData);
    
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white py-12 px-6 flex flex-col items-center">
      
    
      <div className="w-full max-w-md mb-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Back to Home
        </Link>
      </div>

      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-2xl">
        
       
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-5xl text-[#D32F2F] mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2">Demo Requested</h2>
            <p className="text-gray-400">Thank you, {formData.name}. Our team will contact you shortly at {formData.email}.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-2">Book a Demo</h2>
            <p className="text-gray-400 mb-8">See Vitto's AI-native infrastructure in action.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#D32F2F]" 
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Work Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#D32F2F]" 
                  placeholder="john@institution.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Designation / Job Title</label>
                <input 
                  type="text" 
                  name="designation" 
                  required 
                  value={formData.designation} 
                  onChange={handleChange} 
                  className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:outline-none focus:border-[#D32F2F]" 
                  placeholder="CTO, Head of Credit, etc."
                />
              </div>

              <button type="submit" className="w-full bg-[#D32F2F] hover:bg-red-700 text-white font-bold py-3 rounded transition-colors mt-4">
                Request Demo
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}