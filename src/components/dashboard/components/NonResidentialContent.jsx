import React from 'react';
import './Content.css';

export const NonResidentialContent = () => {
  return (
    <div className="content-cards">
      <div className="card">
        <h3>Commercial Property 1</h3>
        <p>Details about commercial property 1...</p>
      </div>
      <div className="card">
        <h3>Industrial Property 1</h3>
        <p>Details about industrial property 1...</p>
      </div>
      {/* Add more non-residential property cards as needed */}
    </div>
  );
};