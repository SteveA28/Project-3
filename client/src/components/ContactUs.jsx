import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Specify your backend server endpoint here
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      // Handle success response
      console.log('Form submitted successfully');
      alert('Message sent successfully.');

      // Optionally reset form fields here
      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      // Handle error situation
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  // Style objects
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundColor: '#f9f9f9', 
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '500px',
    margin: 'auto', 
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    boxSizing: 'border-box', 
  };

  const fieldStyle = {
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
  };

  const labelStyle = {
    marginBottom: '10px',
    width: '100%', 
    textAlign: 'left', 
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%', 
    boxSizing: 'border-box', 
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#0056b3',
    color: '#ffffff',
    cursor: 'pointer',
    width: '100%', 
  };

  return (
    <div style={formContainerStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={fieldStyle}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
        </div>
        <div style={fieldStyle}>
          <label htmlFor="message" style={labelStyle}>Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required style={{ ...inputStyle, height: '150px' }}></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;

