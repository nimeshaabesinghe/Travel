import React from 'react';
import './Services.css';

const Services = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Luxury Sedan',
      description: 'Comfortable sedans perfect for city tours and airport transfers',
      capacity: '4 passengers',
      features: ['Air Conditioning', 'WiFi', 'Professional Driver']
    },
    {
      id: 2,
      name: 'SUV',
      description: 'Spacious SUVs ideal for family trips and adventure tours',
      capacity: '7 passengers',
      features: ['Extra Luggage Space', 'All-Terrain', 'Entertainment System']
    },
    {
      id: 3,
      name: 'Mini Bus',
      description: 'Perfect for group travels and corporate events',
      capacity: '15 passengers',
      features: ['Reclining Seats', 'AC', 'Large Storage']
    },
    {
      id: 4,
      name: 'Luxury Coach',
      description: 'Premium coaches for large groups and long-distance travel',
      capacity: '45 passengers',
      features: ['Restroom', 'Refreshments', 'Entertainment', 'WiFi']
    }
  ];

  const places = [
    {
      id: 1,
      name: 'Beach Paradise',
      description: 'Pristine beaches with crystal clear waters and white sand',
      highlights: ['Snorkeling', 'Sunset Views', 'Water Sports']
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      description: 'Breathtaking mountain landscapes and hiking trails',
      highlights: ['Trekking', 'Wildlife', 'Fresh Air']
    },
    {
      id: 3,
      name: 'Cultural Heritage Sites',
      description: 'Ancient temples, museums, and historical landmarks',
      highlights: ['Guided Tours', 'Photography', 'Local Cuisine']
    },
    {
      id: 4,
      name: 'Adventure Parks',
      description: 'Thrilling activities and nature exploration',
      highlights: ['Zip-lining', 'Rock Climbing', 'Safari Tours']
    },
    {
      id: 5,
      name: 'City Tours',
      description: 'Explore vibrant cities and urban attractions',
      highlights: ['Shopping', 'Dining', 'Nightlife']
    },
    {
      id: 6,
      name: 'Countryside Escapes',
      description: 'Peaceful rural areas with scenic beauty',
      highlights: ['Farm Visits', 'Local Markets', 'Nature Walks']
    }
  ];

  return (
    <div className="services">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Discover our range of vehicles and destinations</p>
      </div>

      <section className="vehicles-section">
        <div className="container">
          <h2>Our Vehicles</h2>
          <p className="section-description">
            Choose from our fleet of well-maintained, comfortable vehicles for your journey
          </p>
          <div className="vehicles-grid">
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="vehicle-card">
                <h3>{vehicle.name}</h3>
                <p className="vehicle-description">{vehicle.description}</p>
                <p className="capacity">👥 {vehicle.capacity}</p>
                <ul className="features-list">
                  {vehicle.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                <button className="btn-book">Book Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="places-section">
        <div className="container">
          <h2>Popular Destinations</h2>
          <p className="section-description">
            Explore amazing places and create unforgettable memories
          </p>
          <div className="places-grid">
            {places.map(place => (
              <div key={place.id} className="place-card">
                <h3>{place.name}</h3>
                <p className="place-description">{place.description}</p>
                <div className="highlights">
                  {place.highlights.map((highlight, index) => (
                    <span key={index} className="highlight-tag">{highlight}</span>
                  ))}
                </div>
                <button className="btn-explore">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
