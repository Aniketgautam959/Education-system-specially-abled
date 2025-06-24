import React from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
const Navbar = () => (
  <div className="fixed w-full top-4 z-50 px-4">
    <nav className="max-w-7xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200/20 rounded-2xl shadow-lg">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">AbleVista</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-poppins">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
            <a href="#offerings" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">What We Offer</a>
            <a href="#courses" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Courses</a>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Dashboard</Link>
            <Link to="/register" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:shadow-md transition-all duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

// Hero Component
const Hero = () => (
  <section id="home" className="mt-12 pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white font-poppins">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Empowering</span> Special Abilities Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Learning</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Able Vista is a comprehensive education ecosystem designed to support specially-abled students, including those with ADHD, Autism, and Aphasia, through the use of an advanced web application.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link to="/register" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 text-center transform hover:-translate-y-1">
              Start Learning Today
            </Link>
            <Link to="/dashboard" className="bg-white border border-gray-200 text-gray-800 px-8 py-4 rounded-xl hover:shadow-lg hover:border-blue-200 transition-all duration-300 text-center transform hover:-translate-y-1">
              Go to Dashboard
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/3 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -z-10 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl border-4 border-white transform hover:rotate-2 transition-transform duration-300">
            <img 
              src="https://image.lexica.art/full_webp/03d6ad17-86eb-48ef-a8a2-315a9fe2a2f7" 
              alt="Inclusive Education for Special Needs" 
              className="h-50 w-50 object-cover rounded-xl" 
            />
          </div>
          <div className="absolute -bottom-3 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-xl text-white shadow-lg z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <p className="font-bold">Personalized Learning</p>
            <p className="text-sm">Tailored for every ability</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// About Component
const About = () => (
  <section id="about" className="py-20 bg-white font-poppins">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">About Us</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Our Mission & Vision</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            At AbleVista, we believe every child deserves access to quality education tailored to their unique needs. 
            Our platform combines innovative technology with specialized teaching methods to create an inclusive learning environment.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            We envision a world where every specially abled child can reach their full potential through 
            personalized education and supportive learning experiences. We're committed to breaking down barriers and creating opportunities for all.
          </p>
        </div>
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Community Today</h3>
        <p className="max-w-2xl mx-auto mb-8">
          Be part of our growing community of educators, parents, and students committed to inclusive education.
        </p>
        <Link to="/register" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          Sign Up Now
        </Link>
      </div>
    </div>
  </section>
);

// In Offerings component
const Offerings = () => (
  <section id="offerings" className="py-16 bg-gray-50 font-poppins">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Personalized Learning",
            description: "Our customized curriculum adapts to each child's unique learning style and needs. We utilize advanced assessment tools to understand your child's strengths and areas for improvement, creating a truly personalized educational journey.",
            image: "https://image.lexica.art/full_webp/deaab390-c8e5-4e82-8d3d-856251d3d276"
          },
          {
            title: "Expert Support",
            description: "Access dedicated guidance from our team of specialized educators and therapists committed to your child's development. Our experts provide regular feedback and adjustments to ensure optimal learning outcomes.",
            image: "https://image.lexica.art/full_webp/49ea01ac-ea31-400d-8201-b8a913ab3e88"
          },
          {
            title: "Interactive Platform",
            description: "Experience our engaging digital platform filled with interactive activities, games, and exercises designed to make learning both fun and effective. Our interface is intuitive and accessible for children of all abilities.",
            image: "https://image.lexica.art/full_webp/16d7a35d-b986-4e3a-8eae-2175596f6f16"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
            <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 h-48 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">{item.title}</h3>
            <p className="text-gray-600 mb-6">{item.description}</p>
            <button className="text-blue-600 font-semibold hover:text-indigo-600 transition-colors duration-300 flex items-center">
              Learn More 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// In Courses component
const Courses = () => (
  <section id="courses" className="py-16 bg-white font-poppins">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12">Our Courses</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Autism",
            description: "A comprehensive foundation program designed for young learners aged 3-6 years. This course focuses on essential developmental milestones, incorporating play-based learning methods and sensory activities to build a strong educational foundation.",
            duration: "6 months",
           
            image: "https://image.lexica.art/full_webp/c4c284a7-e7f3-469f-96bd-cdaef63deed8"
          },
          {
            title: "Aphasia",
            description: "An immersive communication and vocabulary building program that helps children develop strong language abilities. Using multi-sensory approaches, we help children improve their verbal and non-verbal communication skills through engaging activities.",
            duration: "12 months",
           
            image: "https://image.lexica.art/full_webp/4f8023e3-a4f6-4722-9ce2-aa85b8b42683"
          },
          {
            title: "ADHD",
            description: "A practical course focused on developing essential daily living and social interaction skills. This program helps children build independence and confidence through real-world scenarios and guided practice sessions.",
            duration: "12 months",
           
            image: "https://image.lexica.art/full_webp/0fb3fb1c-1b3f-4015-bcdd-2cc734f8961e"
          }
        ].map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
            <div className="mb-4 bg-gradient-to-r from-blue-50 to-indigo-50 h-48 rounded-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">{course.title}</h3>
            <p className="text-gray-600 mb-6">{course.description}</p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Duration: {course.duration}
                </p>
                <p className="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Level: {course.level}
                </p>
              </div>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-md transition-all duration-300">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 font-poppins">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AbleVista</span>
          <p className="mt-4">Empowering special abilities through innovative learning solutions.</p>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors duration-300">About</a></li>
            <li><a href="#courses" className="hover:text-blue-400 transition-colors duration-300">Courses</a></li>
            <li><Link to="/dashboard" className="hover:text-blue-400 transition-colors duration-300">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              contact@ablevista.com
            </li>
            <li className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +1 (555) 123-4567
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p>&copy; {new Date().getFullYear()} AbleVista. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App Component with background pattern
const Landing = () => {
  return (
    <div className="min-h-screen font-['DM_Sans'] bg-gradient-to-br from-blue-50 via-white to-indigo-50"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M54.627,0.183 a5,5 0 0 0 -5,5 a5,5 0 0 0 5,5 a5,5 0 0 0 5,-5 a5,5 0 0 0 -5,-5 M54.627,25.183 a5,5 0 0 0 -5,5 a5,5 0 0 0 5,5 a5,5 0 0 0 5,-5 a5,5 0 0 0 -5,-5 M29.627,50.183 a5,5 0 0 0 -5,5 a5,5 0 0 0 5,5 a5,5 0 0 0 5,-5 a5,5 0 0 0 -5,-5' fill='%234F46E5' fill-opacity='0.05'/%3E%3C/svg%3E")`,
           backgroundAttachment: 'fixed'
         }}>
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <Courses />
      <Footer />
    </div>
  );
};

export default Landing;


// Hero section with main image
<div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-16 pb-32">
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
      <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span className="block">Learning for</span>
          <span className="block text-blue-600">Every Ability</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          AbleVista provides personalized learning experiences designed for students with diverse learning needs and abilities.
        </p>
        <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="/register" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a href="#features" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
          <img
            className="w-full rounded-lg"
            src="https://img.freepik.com/free-vector/gradient-world-autism-day-illustration_23-2149242523.jpg"
            alt="Students learning with assistive technology"
          />
        </div>
      </div>
    </div>
  </div>
</div>

{/* Features section with images */}
<div id="features" className="py-16 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
      <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
        Designed for Every Learning Style
      </p>
      <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
        Our platform adapts to individual needs, providing the right tools for every student.
      </p>
    </div>

    <div className="mt-16">
      <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div className="relative">
          <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-autism-awareness-day-illustration_23-2149242509.jpg"
              alt="Personalized Learning"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold text-gray-900">
            <span className="absolute inset-0"></span>
            Personalized Learning Paths
          </h3>
          <p className="text-base text-gray-500">
            Customized curriculum that adapts to individual learning styles and needs.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-autism-awareness-day-illustration_23-2149242514.jpg"
              alt="Interactive Tools"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold text-gray-900">
            <span className="absolute inset-0"></span>
            Interactive Learning Tools
          </h3>
          <p className="text-base text-gray-500">
            Engaging activities designed to enhance comprehension and retention.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-80 bg-white rounded-lg shadow-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-world-autism-day-illustration_23-2149242516.jpg"
              alt="Progress Tracking"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <h3 className="mt-6 text-xl font-bold text-gray-900">
            <span className="absolute inset-0"></span>
            Comprehensive Progress Tracking
          </h3>
          <p className="text-base text-gray-500">
            Monitor achievements and growth with detailed analytics and reports.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Testimonial section with image */}
<div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative lg:col-span-1">
        <div className="relative h-full">
          <img
            className="h-full w-full object-cover rounded-xl shadow-xl"
            src="https://img.freepik.com/free-vector/hand-drawn-world-autism-day-illustration_23-2149242521.jpg"
            alt="Student success story"
          />
        </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:col-span-1">
        <blockquote>
          <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>
              "AbleVista has transformed how my child engages with learning. The personalized approach and adaptive tools have made education accessible and enjoyable."
            </p>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="mt-3 text-center md:mt-0 md:flex md:items-center">
                <div className="text-base font-medium text-gray-900">Parent of a student with ADHD</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>

{/* Testimonial section with image */}
<div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 lg:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative lg:col-span-1">
        <div className="relative h-full">
          <img
            className="h-full w-full object-cover rounded-xl shadow-xl"
            src="https://img.freepik.com/free-vector/hand-drawn-world-autism-day-illustration_23-2149242521.jpg"
            alt="Student success story"
          />
        </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:col-span-1">
        <blockquote>
          <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>
              "AbleVista has transformed how my child engages with learning. The personalized approach and adaptive tools have made education accessible and enjoyable."
            </p>
          </div>
          <footer className="mt-8">
            <div className="md:flex md:items-center md:justify-center">
              <div className="mt-3 text-center md:mt-0 md:flex md:items-center">
                <div className="text-base font-medium text-gray-900">Parent of a student with ADHD</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>