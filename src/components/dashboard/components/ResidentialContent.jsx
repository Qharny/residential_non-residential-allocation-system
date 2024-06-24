import React from 'react';
import { Link } from 'react-router-dom';
import './ResidentialContent.css';
import Eve from '../../../assets/images/bed.jpg';
import login from '../../auth/auth';
const ResidentialContent = () => {
  const properties = [
    {
      id: 1,
      image: Eve,
      name: 'Property 1',
      isAvailable: true,
      description: 'Luxurious 3-bedroom apartment with stunning city views.',
    },
    {
      id: 2,
      image: Eve, // Using Eve as a placeholder for all properties
      name: 'Property 2',
      isAvailable: false,
      description: 'Cozy 2-bedroom bungalow with a private backyard.',
    },
    {
      id: 3,
      image: Eve,
      name: 'Property 3',
      isAvailable: true,
      description: 'Modern 1-bedroom condo with a rooftop pool.',
    },
    {
      id: 4,
      image: Eve,
      name: 'Property 4',
      isAvailable: false,
      description: 'Spacious 4-bedroom house with a large backyard.',
    },
  ];

  return (
    <div>
      <h1>Properties</h1>
      <div className="space-list">
        {properties.map((property) => (
          <div key={property.id} className="space-pane">
            <img src={property.image} alt={property.name} />
            <h2>{property.name}</h2>
            <p>{property.isAvailable ? 'Available' : 'Unavailable'}</p>
            <p>{property.description}</p>
            <Link
              to={{
                pathname: {login},
                state: { property: property }
              }}
            >
              <button>Book</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentialContent;