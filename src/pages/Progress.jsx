import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Sample data
const stats = [
  {
    icon: "📚",
    value: "3",
    label: "Active Courses"
  },
  {
    icon: "🎯",
    value: "0%",
    label: "Average Progress"
  },
  {
    icon: "🏆",
    value: "0",
    label: "Achievements Earned"
  }
];

const activities = [
  {
    icon: "✅",
    title: "Mathematics Progress",
    description: "Completed Basic Arithmetic Module",
    
  },
  {
    icon: "📝",
    title: "Language Skills",
    description: "Started new chapter in Communication Development",
   
  },
  
  {
    icon: "🌟",
    title: "Achievement Unlocked",
    description: "Earned 'Quick Learner' badge in Mathematics",
    
  }
];

// Sample user data for demonstration
const sampleUserData = {
  courses: [
    { id: 1, name: 'Introduction to Mathematics', progress: 0, totalModules: 0, completedModules: 0},
    { id: 2, name: 'Basic Science Concepts', progress: 0, totalModules: 0, completedModules: 0 },
    { id: 3, name: 'Language Arts Fundamentals', progress: 0, totalModules: 8, completedModules:0 },
  ],
  achievements: [
    { id: 1, name: 'Quick Learner', icon: '🚀', date: '2023-10-15', description: 'Completed 5 modules in a single day' },
    { id: 2, name: 'Perfect Score', icon: '🏆', date: '2023-10-10', description: 'Achieved 100% in Mathematics Quiz' },
    { id: 3, name: 'Consistent Learner', icon: '📚', date: '2023-10-05', description: 'Logged in for 7 consecutive days' },
  ],
  upcomingAssignments: [
    { id: 1, name: 'Mathematics Quiz', dueDate: '2023-10-25', course: 'Introduction to Mathematics', priority: 'high' },
    { id: 2, name: 'Science Project', dueDate: '2023-11-05', course: 'Basic Science Concepts', priority: 'medium' },
    { id: 3, name: 'Essay Submission', dueDate: '2023-10-30', course: 'Language Arts Fundamentals', priority: 'low' },
  ],
  weeklyActivity: [65, 45, 70, 8], // Percentage activity for each day of the week
  skillsProgress: [
    { name: 'Problem Solving', level: 60 },
    { name: 'Critical Thinking', level: 45 },
    { name: 'Creativity', level: 70 },
  ]
};

const Progress = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate API call to fetch user data
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUserData(sampleUserData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Trigger animations after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  // Calculate overall progress
  const calculateOverallProgress = () => {
    if (!userData) return 0;
    
    const totalModules = userData.courses.reduce((sum, course) => sum + course.totalModules, 0);
    const completedModules = userData.courses.reduce((sum, course) => sum + course.completedModules, 0);
    
    return Math.round((completedModules / totalModules) * 100);
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-blue-600 font-medium">Loading your progress...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      
      <div className="max-w-7xl mx-auto relative px-2 sm:px-4 md:px-0">
        {/* Header */}
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mb-4 sm:mb-8 transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500"></div>
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Your Learning Progress</h1>
                <p className="mt-2 text-gray-600">Track your achievements and stay on top of your learning journey</p>
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
        
        {/* Navigation Tabs */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md mb-4 sm:mb-8 overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide">
            {['overview', 'courses', 'achievements', 'assignments', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab 
                    ? 'text-blue-600 border-b-2 border-blue-500' 
                    : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-500 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl text-2xl">{stat.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-8">
            {/* Overall Progress Widget */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Overall Progress</h2>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        className="text-gray-200" 
                        strokeWidth="8" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r="40" 
                        cx="50" 
                        cy="50" 
                      />
                      <circle 
                        className="text-blue-500" 
                        strokeWidth="8" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r="40" 
                        cx="50" 
                        cy="50" 
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - calculateOverallProgress() / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-800">{calculateOverallProgress()}%</span>
                        <span className="block text-xs sm:text-sm text-gray-500">Completed</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="bg-blue-50 rounded-xl p-2 sm:p-4">
                    <p className="text-xs sm:text-sm text-gray-500">Total Courses</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-800">{userData.courses.length}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-2 sm:p-4">
                    <p className="text-xs sm:text-sm text-gray-500">Achievements</p>
                    <p className="text-lg sm:text-2xl font-bold text-gray-800">{userData.achievements.length}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Recent Activities Widget */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'}`}>
              <div className="p-4 sm:p-6 md:p-8">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">Recent Activities</h2>
                <div className="space-y-2 sm:space-y-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-2 sm:p-4 hover:bg-blue-50 rounded-xl transition-colors">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl">
                        {activity.icon}
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-800">{activity.title}</h4>
                        <p className="text-xs sm:text-base text-gray-600">{activity.description}</p>
                      </div>
                      <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Weekly Activity Widget */}
            <div className="space-y-4 sm:space-y-8">
              {/* Upcoming Assignments Widget */}
              <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">Upcoming Assignments</h2>
                    {userData.upcomingAssignments.length > 3 && (
                      <Link to="/assignments" className="text-xs sm:text-sm text-blue-600 hover:text-blue-700">View all</Link>
                    )}
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    {userData.upcomingAssignments.map(assignment => (
                      <div key={assignment.id} className="bg-gray-50 rounded-xl p-2 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 sm:mr-4 ${getPriorityColor(assignment.priority)}`}></div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base font-medium text-gray-800">{assignment.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-500">{assignment.course}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs sm:text-sm font-medium text-gray-700">Due</p>
                          <p className="text-xs sm:text-sm text-gray-500">{formatDate(assignment.dueDate)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Achievements Widget */}
              <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-10'}`}>
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-800">Recent Achievements</h2>
                    {userData.achievements.length > 3 && (
                      <Link to="/achievements" className="text-sm text-blue-600 hover:text-blue-700">View all</Link>
                    )}
                  </div>
                  <div className="space-y-4">
                    {userData.achievements.map(achievement => (
                      <div key={achievement.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 flex items-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mr-4">
                          {achievement.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{achievement.name}</h3>
                          <p className="text-xs text-gray-500">{achievement.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{formatDate(achievement.date)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Skills Progress Widget */}
              <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'}`}>
                <div className="p-4 sm:p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">Skills Progress</h2>
                  <div className="space-y-6">
                    {userData.skillsProgress.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium text-gray-800">{skill.name}</h3>
                          <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2.5 rounded-full transition-all duration-1000" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements Widget */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-10'}`}>
              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Recent Achievements</h2>
                  {userData.achievements.length > 3 && (
                    <Link to="/achievements" className="text-sm text-blue-600 hover:text-blue-700">View all</Link>
                  )}
                </div>
                <div className="space-y-4">
                  {userData.achievements.map(achievement => (
                    <div key={achievement.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 flex items-center">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mr-4">
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{achievement.name}</h3>
                        <p className="text-xs text-gray-500">{achievement.description}</p>
                        <p className="text-xs text-gray-400 mt-1">{formatDate(achievement.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Skills Progress Widget */}
            <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'}`}>
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Skills Progress</h2>
                <div className="space-y-6">
                  {userData.skillsProgress.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-medium text-gray-800">{skill.name}</h3>
                        <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-blue-500 h-2.5 rounded-full transition-all duration-1000" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;