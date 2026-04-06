import React from 'react';
import Hero from '../components/sections/Hero';
import NewsUpdates from '../components/sections/NewsUpdates'; // Import it here

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <NewsUpdates />
    </div>
  );
};

export default Home;