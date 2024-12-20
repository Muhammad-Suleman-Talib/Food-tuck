'use client';

import { useState, useEffect } from 'react';
import { FaUser, FaLock, FaEnvelope, FaKey, FaCheckCircle } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const AuthForms = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Loader state
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
  
    useEffect(() => {
      setIsClient(true);
    }, []); 
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setFormSubmitted(true);
      setIsLoading(true);
      onLoginSuccess();
      // Simulate API call or form submission logic here
      // Directly redirect after form submission
      setIsLoading(false);
      console.log('Form submitted');
      try {
        router.push('/'); // Navigate to the home page
      } catch (error) {
        console.error('Router push failed, falling back to location.href:', error);
        window.location.href = '/'; // Fallback navigation
      }
    };
  
    if (!isClient) return null;
  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#737171] to-gray-900 py-12 px-4">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="text-yellow-500">{isSignUp ? 'Create' : 'Welcome'}</span>{' '}
              {isSignUp ? 'Account' : 'Back'}
            </h1>
            <p className="text-sm text-gray-600">
              {isSignUp
                ? 'Sign up to explore our delicious menu and exclusive offers.'
                : 'Sign in to continue enjoying our food and services.'}
            </p>
          </div>
  
          {formSubmitted && !isLoading && (
            <div className="flex items-center gap-3 p-4 mb-6 bg-green-100 border border-green-500 text-green-700 rounded-md">
              <FaCheckCircle className="text-green-500 text-2xl" />
              <div>
                <p className="font-medium">
                  {isSignUp ? 'You have successfully signed up!' : 'Welcome back! You are now logged in.'}
                </p>
                <p className="text-sm text-gray-600">
                  {isSignUp ? 'Start exploring our features.' : 'Enjoy your experience!'}
                </p>
              </div>
            </div>
          )}
  
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div className="relative">
                  <FaUser className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  placeholder="Your Password"
                  required
                  className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>
  
            {isSignUp && (
              <div className="mb-4">
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <FaKey className="absolute top-2/4 left-3 transform -translate-y-2/4 text-gray-400" />
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    required
                    className="w-full pl-10 p-2 border rounded-md focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
            )}
  
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition mt-4 flex items-center justify-center"
            >
              {isLoading ? (
                <span className="loader" />
              ) : isSignUp ? (
                'Sign Up'
              ) : (
                'Sign In'
              )}
            </button>
          </form>
  
          <div className="text-center mt-6">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button
                  onClick={() => setIsSignUp(false)}
                  className="text-yellow-500 font-medium hover:underline"
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button
                  onClick={() => setIsSignUp(true)}
                  className="text-yellow-500 font-medium hover:underline"
                >
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };
  

export default AuthForms;
