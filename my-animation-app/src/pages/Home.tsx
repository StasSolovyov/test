import React from 'react';
import Sidebar from '../components/Sidebar';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Sidebar />
      <h1>Welcome to Animation App</h1>
    </div>
  );
};

export default Home;
