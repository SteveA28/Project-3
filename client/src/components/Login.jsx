import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../contexts/AuthContext'; // Import useAuth

function LoginForm() {
  const { login } = useAuth(); // Use useAuth hook to access login function
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    login(); // Call login function from AuthContext
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      {/* Left: Image */}
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Placeholder Image" className="object-cover w-full h-full" />
      </div>
      {/* Right: Login Form */}
      <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form onSubmit={handleSubmit}> {/* Updated to use handleSubmit */}
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
          </div>
          {/* Login Button */}
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
