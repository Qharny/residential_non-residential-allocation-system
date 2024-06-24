import React from 'react';
import './ResidentialContent.css';
import Eve from '../../../assets/images/bed.jpg';

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
      name: 'Property 2',
      isAvailable: false,
      description: 'Cozy 2-bedroom bungalow with a private backyard.',
    },
    {
      id: 3,
      name: 'Property 3',
      isAvailable: true,
      description: 'Modern 1-bedroom condo with a rooftop pool.',
    },
    {
      id: 4,
      name: 'Property 4',
      isAvailable: false,
      description: 'Spacious 4-bedroom house with a large backyard.',
    },
  ];

  const handleBookClick = (property) => {
    // handle book click event here
    console.log(`Booking ${property.name}`);
  };

  return (
    <div>
      <h1>Properties</h1>
      <div className="space-list">
        {properties.map((property) => (
          <div key={property.id} className="space-pane">
            <img src={property.image} alt={property.name} />
            <h2>{property.name}</h2>
            <p>{property.isAvailable? 'Available' : 'Unavailable'}</p>
            <p>{property.description}</p>
            <button onClick={() => handleBookClick(property)}>Book</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentialContent;
