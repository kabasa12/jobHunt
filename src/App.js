import React from 'react';
import './App.css';
import JobsContainerComp from './components/jobs/jobsContainer-component'
import logo from './assets/logo.png'
function App() {
  return (
    <div>
      <div className="topNav">
        <div className="logo"><img src={logo} alt="logo"/></div>
      </div>
      <JobsContainerComp/>
    </div>
  );
}

export default App;
