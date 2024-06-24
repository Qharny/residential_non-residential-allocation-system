import React from 'react';
import './Sidebar.css';
import { FaBars, FaHome, FaBuilding } from 'react-icons/fa';

export const Sidebar = ({ isCollapsed, onToggle, activeContent, onContentChange }) => {
  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={onToggle}>
        <FaBars />
        {!isCollapsed && <span>Toggle Sidebar</span>}
      </button>
      <nav>
        <ul>
          <li 
            className={activeContent === 'residential' ? 'active' : ''}
            onClick={() => onContentChange('residential')}
          >
            <FaHome />
            <span>Residential</span>
          </li>
          <li 
            className={activeContent === 'non-residential' ? 'active' : ''}
            onClick={() => onContentChange('non-residential')}
          >
            <FaBuilding />
            <span>Non-Residential</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};