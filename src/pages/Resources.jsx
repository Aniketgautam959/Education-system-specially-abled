import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [animate, setAnimate] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'games', name: 'Interactive Games' },
    { id: 'videos', name: 'Video Lessons' },
    { id: 'worksheets', name: 'Worksheets' },
    { id: 'audio', name: 'Audio Books' },
    { id: 'materials', name: 'Study Materials' },
    { id: 'tests', name: 'Practice Tests' },
  ];

  const resources = [
    {
      title: "Interactive Games",
      description: "Educational games designed to enhance learning experience through play and engagement",
      icon: "🎮",
      category: "games",
      popular: true,
      level: "Beginner"
    },
    {
      title: "Video Lessons",
      description: "Recorded sessions and tutorials with visual demonstrations of key concepts",
      icon: "🎥",
      category: "videos",
      popular: true,
      level: "All Levels"
    },
    {
      title: " Worksheets",
      description: "Practice materials you can download and print for offline learning",
      icon: "📝",
      category: "worksheets",
      popular: false,
      level: "Intermediate"
    },
    {
      title: "Audio Books",
      description: "Listen and learn at your own pace with narrated educational content",
      icon: "🎧",
      category: "audio",
      popular: false,
      level: "All Levels"
    },
    {
      title: "Study Materials",
      description: "Comprehensive learning documents covering curriculum topics in depth",
      icon: "📚",
      category: "materials",
      popular: true,
      level: "Advanced"
    },
    {
      title: "Practice Tests",
      description: "Self-assessment materials to test your knowledge and prepare for exams",
      icon: "✍️",
      category: "tests",
      popular: false,
      level: "All Levels"
    },
    
    // Additional resources
    
    
    
    
    
  ];

  // Filter resources based on search term and active category
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mb-8 transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500"></div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Learning Resources</h1>
                <p className="mt-2 text-gray-600">Discover tools and materials to enhance your learning journey</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link to="/dashboard" className="inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-md mb-8 p-6 transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex overflow-x-auto scrollbar-hide space-x-2 pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category.id 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Resources Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'}`}>
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <div 
                key={index} 
                className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:shadow-xl hover:-translate-y-1 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 50}ms` }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-4xl p-3 bg-blue-50 rounded-xl">{resource.icon}</div>
                    {resource.popular && (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Popular</span>
                    )}
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {resource.level}
                    </span>
                    <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                      Access
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">No resources found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
        
        {/* Help Section */}
        <div className={`mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-xl overflow-hidden text-white transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
          <div className="p-8 md:flex items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-2">Need help finding resources?</h2>
              <p className="text-blue-100">Our learning specialists can help you find the perfect materials for your learning style and needs.</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition-colors shadow-md">
                Get Personalized Help
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

// For resource thumbnails
<img 
  src="https://img.freepik.com/free-vector/hand-drawn-autism-awareness-day-illustration_23-2149242510.jpg" 
  alt="Resource Material" 
  className="w-full h-full object-cover"
/>