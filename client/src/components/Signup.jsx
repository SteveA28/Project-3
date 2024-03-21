import React, { useState } from 'react';

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Form data submitted:', formData);
        alert('Signup successful!');
    };

    // CSS styles
    const styles = `
        .signup-container {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f9f9f9;
        }

        .signup-container h2 {
            text-align: center;
        }

        .signup-container form {
            display: flex;
            flex-direction: column;
        }

        .signup-container form > div {
            margin-bottom: 10px;
        }

        .signup-container label {
            font-weight: bold;
        }

        .signup-container input {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 3px;
            font-size: 16px;
        }

        .signup-container button {
            padding: 10px;
            border: none;
            border-radius: 3px;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }

        .signup-container button:hover {
            background-color: #0056b3;
        }
    `;

    return (
        <div className="signup-container" style={{ margin: '50px auto', width: '400px', display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <h2>Signup</h2>
            <style>{styles}</style>
            <form onSubmit={handleSubmit}>
                <div style={{display:'flex',gap:"25px"}}>
                    
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{display:'flex',gap:"63px"}}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div style={{display:'flex',gap:"29px"}}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
