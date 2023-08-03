import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../Components/pages/Login';
import Registre from '../Components/pages/Registre';
import Profile from '../Components/pages/Profile';
import Monitoring from '../Components/pages/Monitoring';
import Activity from '../Components/pages/Activity';
import ActivityHistory from '../Components/pages/ActivityHistory';
import Manual from '../Components/pages/Manual';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>} />
        <Route path="/landing" element={<Login />} />
        <Route path="/registre" element={<Registre />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/activity-history" element={<ActivityHistory />} />
        <Route path="/manuel" element={<Manual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
