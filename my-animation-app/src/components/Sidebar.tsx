import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
  <div className="sidebar">
    <Link to="/run">Run</Link>
    <Link to="/jump">Jump</Link>
    <Link to="/walk">Walk</Link>
  </div>
);

export default Sidebar;
