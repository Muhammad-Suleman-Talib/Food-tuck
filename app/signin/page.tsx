'use client';

import { useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaKey, FaCheckCircle } from 'react-icons/fa';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Reset form submitted message after 3 seconds
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#737171] py-16">
      <div className="bg-gray-50   shadow-lg rounded-lg w-full max-w-md p-8">
        {/* Form Header */}
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

        {/* Form Submission Success Message */}
        {formSubmitted && (
          <div className="flex items-center gap-2 p-4 mb-6 bg-green-100 border border-green-500 text-green-700 rounded-md">
            <FaCheckCircle className="text-green-500 text-lg" />
            <span>{isSignUp ? 'Sign-up successful!' : 'Sign-in successful!'}</span>
          </div>
        )}

        {/* Form Inputs */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition mt-4"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Between Sign In and Sign Up */}
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

export default AuthForm;