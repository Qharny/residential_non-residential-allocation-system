import React from 'react';
import './Content.css';

export const ResidentialContent = () => {
  return (
    <div className="content-cards">
      <div className="card">
        <h3>Residential Property 1</h3>
        <p>Details about residential property 1...</p>
      </div>
      <div className="card">
        <h3>Residential Property 2</h3>
        <p>Details about residential property 2...</p>
      </div>
      {/* Add more residential property cards as needed */}
    </div>
  );
};