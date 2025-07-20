import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { motion as Motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted successfully!");

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section data-aos='fade-up' data-aos-delay='250' id='contact' className='py-20 px-4 bg-gradient-to-b from-white to-gray-100'>
      <div className='max-w-lg mx-auto relative'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-gray-800 mb-2'>
            Get In <span className='text-red-600'>Touch</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className='space-y-6 bg-gray-200/85 p-8 rounded-xl shadow-lg border border-gray-100'>
          <Motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor='name' className='block text-gray-700 mb-2'>Name</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FiUser className='text-gray-400' />
              </div>
              <input
                id='name'
                name='name'
                type='text'
                value={formData.name}
                onChange={handleChange}
                className='w-full pl-10 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent'
                placeholder='Enter your name'
                required
              />
            </div>
          </Motion.div>

          <Motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor='email' className='block text-gray-700 mb-2'>Email</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <FiMail className='text-gray-400' />
              </div>
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full pl-10 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent'
                placeholder='Enter your email'
                required
              />
            </div>
          </Motion.div>

          <Motion.div whileHover={{ scale: 1.01 }}>
            <label htmlFor='message' className='block text-gray-700 mb-2'>Message</label>
            <div className='relative'>
              <div className='absolute top-3 left-0 pl-3 flex items-start pointer-events-none'>
                <FiMessageSquare className='text-gray-400 mt-1' />
              </div>
              <textarea
                id='message'
                name='message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                className='w-full pl-10 pr-4 py-3 border-gray-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent'
                placeholder='Write your message'
                required
              />
            </div>
          </Motion.div>

          <Motion.button
            type='submit'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className='w-full py-3 px-6 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-all'
          >
            Send Message
          </Motion.button>
        </form>
      </div>

      <div className='mt-8 text-center text-gray-800'>
        <p>Or email me directly at: <span className='text-gray-950 font-bold'>navanethakrishnan14@gmail.com</span></p>
        <p>Contact me: <span className='text-gray-950 font-bold'>6374776596,8220344911</span></p>
      </div>
    </section>
  );
};

export default Contact;


