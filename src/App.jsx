import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Registration from './pages/Registration';
import Dashboard from './pages/dashboard';
import MyCourses from './pages/MyCourses';
import Progress from './pages/Progress';
import Resources from './pages/Resources';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<MyCourses/>}/>
          <Route path="/progress" element={<Progress/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/settings" element={<Settings/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
