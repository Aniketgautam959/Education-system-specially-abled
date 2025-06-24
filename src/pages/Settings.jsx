import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    displayName: '',
    email: '',
    emailNotifications: true,
    darkMode: false,
    fontSize: 'medium',
    accessibility: {
      highContrast: false,
      reducedMotion: false
    }
  });
  const [saved, setSaved] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Load saved settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      // Ensure accessibility object exists
      setSettings({
        ...parsedSettings,
        accessibility: {
          highContrast: parsedSettings.accessibility?.highContrast || false,
          reducedMotion: parsedSettings.accessibility?.reducedMotion || false
        }
      });
    }
    
    // Trigger animations after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle nested accessibility settings
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setSettings(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings to localStorage
    localStorage.setItem('userSettings', JSON.stringify(settings));
    
    // Show success message
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-500 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-poppins">Settings</h1>
          <p className="text-gray-600 mb-8">Customize your experience with AbleVista</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
          <div className="p-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Profile Section */}
              <div className={`transition-all duration-500 transform ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="p-2 bg-blue-100 rounded-lg mr-3 text-blue-600">👤</span>
                  Profile Information
                </h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Display Name</label>
                      <input
                        type="text"
                        name="displayName"
                        value={settings.displayName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={settings.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                    
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Language</label>
                    <select
                      name="language"
                      value={settings.language}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="english">English</option>
                      <option value="spanish">Spanish</option>
                      <option value="french">French</option>
                      <option value="german">German</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div className={`transition-all duration-500 delay-200 transform ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="p-2 bg-blue-100 rounded-lg mr-3 text-blue-600">⚙️</span>
                  Preferences
                </h2>
                <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-700 font-medium">Email Notifications</span>
                      <p className="text-gray-500 text-sm">Receive updates and alerts via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="emailNotifications"
                        checked={settings.emailNotifications}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-700 font-medium">Dark Mode</span>
                      <p className="text-gray-500 text-sm">Switch to dark theme</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="darkMode"
                        checked={settings.darkMode}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Accessibility */}
              <div className={`transition-all duration-500 delay-300 transform ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="p-2 bg-blue-100 rounded-lg mr-3 text-blue-600">🌐</span>
                  Accessibility
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Font Size</label>
                    <div className="flex gap-4">
                      {['small', 'medium', 'large'].map((size) => (
                        <label key={size} className="flex-1">
                          <input
                            type="radio"
                            name="fontSize"
                            value={size}
                            checked={settings.fontSize === size}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className={`text-center p-3 border rounded-xl peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-600 cursor-pointer transition-all ${
                            size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : ''
                          }`}>
                            {size.charAt(0).toUpperCase() + size.slice(1)}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-700 font-medium">High Contrast</span>
                        <p className="text-gray-500 text-sm">Increase contrast for better visibility</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="accessibility.highContrast"
                          checked={settings.accessibility.highContrast}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gray-700 font-medium">Reduced Motion</span>
                        <p className="text-gray-500 text-sm">Minimize animations</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          name="accessibility.reducedMotion"
                          checked={settings.accessibility.reducedMotion}
                          onChange={handleChange}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className={`pt-6 transition-all duration-500 delay-400 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <span className="mr-2">Save Changes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Success Message */}
                <div className={`fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 flex items-center ${
                  saved ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Settings saved successfully!
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;