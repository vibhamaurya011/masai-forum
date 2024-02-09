import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    avatar: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3030/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      console.log('Response Status:', response.status);
    
      if (response.ok) {
        // Registration successful
        alert('User registered successfully');
        // Redirect or perform any other action as needed
      } else {
        // Registration failed
        const data = await response.json();
        console.error('Registration failed:', data.error);
        alert('Registration failed:', data.error);
      }
    } catch (error) {
      console.error('Error during registration:', error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-8'>
      <h1 className='font-medium text-lg'>Nice to see you</h1>
      <label>Name</label>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
        className='p-2 bg-gray-100 rounded-lg outline-none'
        type="text"
        placeholder='Enter Name'
        required
      />
      <label>Email</label>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className='p-2 bg-gray-100 rounded-lg outline-none'
        type="email"
        placeholder='Enter Email'
        required
      />
      <label>Password</label>
      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
        className='p-2 bg-gray-100 rounded-lg outline-none'
        type="password"
        placeholder='Enter Password'
        required
      />
      <label>Avatar</label>
      <input
        name="avatar"
        value={formData.avatar}
        onChange={handleChange}
        className='p-2 bg-gray-100 rounded-lg outline-none'
        type="text"
        placeholder='Enter Image URL'
      />
      <button type="submit" className='bg-blue-800 text-white p-2 rounded-lg'>
        Signup
      </button>
      <div>
        <span>I have an account?</span>
        <Link className='text-blue-500 ml-2'>Sign in now</Link>
      </div>
    </form>
  );
}

export default Signup;
