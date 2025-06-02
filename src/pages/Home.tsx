import React from 'react';
import Hero from '../components/home/Hero.tsx';
import Stats from '../components/home/Stats.tsx';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Stats />
    </main>
  );
};

export default Home;