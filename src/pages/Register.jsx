import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    agreeToTerms: false
  });
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
    }
    
    if (currentStep === 2) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(step)) return;
    
    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Registration successful', formData);
      // Redirect to success page or login
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-3000"></div>
      
      <div className="max-w-5xl mx-auto relative">
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-1.5 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500"></div>
          
          <div className="md:flex">
            {/* Left side - decorative panel */}
            <div className="hidden md:block md:w-2/5 bg-gradient-to-br from-blue-500 to-blue-700 p-12 text-white relative overflow-hidden">
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 rounded-full"></div>
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Welcome to AbleVista</h2>
                  <p className="text-blue-100 mb-8">Join our community and unlock a world of personalized learning experiences designed for every ability.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p>Personalized learning paths</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p>Adaptive learning tools</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p>Supportive community</p>
                  </div>
                </div>
                
                <div className="mt-12">
                  <p>Already have an account?</p>
                  <Link to="/login" className="block mt-2 text-white font-medium border-b-2 border-white/50 hover:border-white inline-block transition-all">
                    Sign in to your account
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right side - form */}
            <div className="md:w-3/5 p-8 sm:p-12">
              <div className="text-center mb-8">
                <Link to="/" className="inline-block">
                  <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                    AbleVista
                  </h1>
                </Link>
                <h2 className="mt-6 text-3xl font-bold text-gray-800">Create Your Account</h2>
                <p className="mt-2 text-gray-600">Join our community of learners today</p>
              </div>
              
              {/* Progress indicator */}
              <div className="mb-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    } transition-all duration-300`}>
                      1
                    </div>
                    <div className="ml-2">
                      <p className={`text-sm font-medium ${step >= 1 ? 'text-blue-500' : 'text-gray-500'}`}>
                        Personal Info
                      </p>
                    </div>
                  </div>
                  
                  <div className={`flex-1 h-1 mx-4 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-200'} transition-all duration-500`}></div>
                  
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                    } transition-all duration-300`}>
                      2
                    </div>
                    <div className="ml-2">
                      <p className={`text-sm font-medium ${step >= 2 ? 'text-blue-500' : 'text-gray-500'}`}>
                        Account Setup
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6 transition-all duration-500 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                          placeholder="Enter your first name"
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                          placeholder="Enter your last name"
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                        placeholder="you@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        I am a
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['student', 'parent', 'teacher', 'school'].map((role) => (
                          <label 
                            key={role} 
                            className={`flex flex-col items-center justify-center p-4 border rounded-xl cursor-pointer transition-all ${
                              formData.role === role 
                                ? 'border-blue-500 bg-blue-50 text-blue-600' 
                                : 'border-gray-200 hover:border-blue-200 hover:bg-blue-50/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="role"
                              value={role}
                              checked={formData.role === role}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <span className="text-2xl mb-2">
                              {role === 'student' ? '👨‍🎓' : role === 'parent' ? '👨‍👩‍👧‍👦' : role === 'teacher' ? '👩‍🏫' : '🏫'}
                            </span>
                            <span className="text-sm font-medium capitalize">{role}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-6 transition-all duration-500 animate-fadeIn">
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.password ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                        placeholder="Create a secure password"
                      />
                      {errors.password && (
                        <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                      )}
                      {formData.password && !errors.password && (
                        <div className="mt-2">
                          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                formData.password.length < 8 ? 'w-1/4 bg-red-500' : 
                                formData.password.length < 10 ? 'w-2/4 bg-yellow-500' : 
                                'w-full bg-green-500'
                              }`}
                            ></div>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {formData.password.length < 8 ? 'Weak' : 
                             formData.password.length < 10 ? 'Good' : 
                             'Strong'} password
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                        placeholder="Confirm your password"
                      />
                      {errors.confirmPassword && (
                        <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>
                      )}
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="agreeToTerms"
                            name="agreeToTerms"
                            type="checkbox"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                            I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
                          </label>
                          {errors.agreeToTerms && (
                            <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {errors.submit && (
                      <div className="bg-red-50 p-4 rounded-xl text-red-500">
                        {errors.submit}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-8 flex justify-between">
                  {/* Button content remains the same */}
                </div>
              </form>
              
              {/* Mobile login link */}
              <div className="mt-8 text-center md:hidden">
                <p className="text-gray-600">Already have an account?</p>
                <Link to="/login" className="mt-2 text-blue-600 font-medium hover:text-blue-700 transition-all">
                  Sign in to your account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
