import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ isCollapsed, onToggle, onContentChange, activeContent }) => {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={onToggle}>
        {isCollapsed ? '>' : '<'}
      </button>
      <nav>
        <ul>
          <li 
            className={activeContent === 'residential' ? 'active' : ''}
            onClick={() => onContentChange('residential')}
          >
            Residential
          </li>
          <li 
            className={activeContent === 'non-residential' ? 'active' : ''}
            onClick={() => onContentChange('non-residential')}
          >
            Non-Residential
          </li>
        </ul>
      </nav>
    </aside>
  );
};