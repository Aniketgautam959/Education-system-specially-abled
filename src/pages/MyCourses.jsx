import React from 'react';

const MyCourses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-24 pb-16 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Learning Path
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continue your journey with personalized learning experiences
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {progressStats.map((stat, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Active Courses */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Active Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {activeCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-blue-100">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-90"></div>
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-sm opacity-90">{course.instructor}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <div className="flex justify-between items-center">
                  <button className="inline-flex items-center px-4 py-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Continue Learning
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <span className="text-sm text-gray-500">{course.duration} left</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remove the Recommended Courses section and its related code */}
      </div>
    </div>
  );
};

const progressStats = [
  {
    icon: "📚",
    value: "3",
    label: "Active Courses"
  },
  {
    icon: "🎯",
    value: "0%",
    label: "Average Score"
  },
  {
    icon: "⭐",
    value: "0",
    label: "Achievements"
  }
];

const activeCourses = [
  {
    title: " Attention Deficit Hyperactivity Disorder (ADHD)  ",
  
    progress: 0,
    duration: "2h 30m",
    description: "This course characterizes ADHD symptoms and behaviors, discusses different types of attention, and explores various treatments and interventions.",
    image: "https://img.freepik.com/free-vector/mathematics-concept-illustration_114360-3972.jpg"
  },
  {
    title: "Autism Spectrum Disorder (ASD)",
  
    progress: 0,
    duration: "3h 15m",
    description: "Enhance communication skills with personalized language exercises Provides insights into how autistic students process information and learn.",
    image: "https://img.freepik.com/free-vector/language-learning-concept-illustration_114360-6565.jpg"
  },
  {
    title: "Aphasia (Language and Speech Disorder)",
    
    progress: 0,
    duration: "1h 45m",
    description: "Express yourself through guided artistic activities and exercises  and Offers strategies to support learning through alternative communication methods.",
    image: "https://img.freepik.com/free-vector/art-therapy-concept-illustration_114360-7899.jpg"
  }
];

// Remove the recommendedCourses array

export default MyCourses;