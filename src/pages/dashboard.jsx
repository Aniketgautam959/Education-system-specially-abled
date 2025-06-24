// Make sure your App.js or main router file has proper routes defined
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  // Sample data for dashboard widgets
  const courseProgress = [
    { id: 1, name: 'Early Development', progress: 0, color: 'from-blue-500 to-indigo-600' },
    { id: 2, name: 'Language Skills', progress: 0, color: 'from-green-500 to-emerald-600' },
    { id: 3, name: 'Mathematical Concepts', progress: 0, color: 'from-purple-500 to-violet-600' },
  ];

  const upcomingSessions = [
    {
      title: "Language Skills - Basic Communication",
      time: "Today, 2:00 PM",
      duration: "45 minutes",
      icon: "🗣️",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Interactive Learning Session",
      time: "Tomorrow, 10:00 AM",
      duration: "60 minutes",
      icon: "🧩",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Progress Review Meeting",
      time: "Friday, 3:00 PM",
      duration: "30 minutes",
      icon: "📊",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 font-poppins">
      {/* Skip to content link */}
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 bg-white/80 backdrop-blur-md shadow-lg z-10">
        <header className="p-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AbleVista</h2>
        </header>
        
        <nav className="mt-8 px-4" aria-label="Main Navigation">
          <Link to="/dashboard" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 bg-blue-50 text-blue-700 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link to="/courses" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span>My Courses</span>
          </Link>
          <Link to="/progress" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Progress</span>
          </Link>
          <Link to="/resources" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <span>Resources</span>
          </Link>
          <Link to="/settings" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Settings</span>
          </Link>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Need Help?</h3>
            <p className="text-xs text-blue-600 mb-3">Contact our support team for assistance</p>
            <button className="w-full py-2 px-3 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main id="main-content" className="ml-64 p-8">
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden mb-8 transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500"></div>
          <div className="p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Welcome Back, Student!</h1>
                <p className="mt-2 text-gray-800">Here's your learning progress for today</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button 
                  onClick={() => navigate('/courses')} 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
                  tabIndex="0"
                >
                  Continue Learning
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {courseProgress.map((course, index) => (
            <div 
              key={course.id} 
              className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 transition-all duration-500 transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
              aria-labelledby={`course-title-${course.id}`}
            >
              <h3 id={`course-title-${course.id}`} className="text-lg font-semibold text-gray-800">{course.name}</h3>
              <div className="mt-4 relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-50 text-blue-600">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600" aria-live="polite">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200" role="progressbar" aria-valuenow={course.progress} aria-valuemin="0" aria-valuemax="100">
                  <div 
                    style={{ width: `${course.progress}%` }} 
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${course.color} transition-all duration-1000`}
                  ></div>
                </div>
              </div>
              <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center">
                Continue
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Upcoming Sessions */}
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${animate ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'}`}>
          <div className="p-6 sm:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Upcoming Sessions</h2>
              <Link to="/schedule" className="text-sm text-blue-600 hover:text-blue-700">View all</Link>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className={`${session.color} rounded-xl p-4 flex items-center`}>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl mr-4 shadow-sm">
                    {session.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{session.title}</h3>
                    <p className="text-sm opacity-80">{session.time} • {session.duration}</p>
                  </div>
                  <button className="px-3 py-1 bg-white/80 rounded-lg text-sm font-medium hover:bg-white transition-colors">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

// For profile or avatar images
<img 
  src="https://img.freepik.com/free-vector/hand-drawn-autism-awareness-day-illustration_23-2149242513.jpg" 
  alt="Student Profile" 
  className="h-12 w-12 rounded-full object-cover border-2 border-white"
/>

// For course thumbnails
{/* <img 
  src="https://img.freepik.com/free-vector/gradient-autism-awareness-day-illustration_23-2149242527.jpg" 
  alt="Course Thumbnail" 
  className="w-full h-full object-cover"
/> */}