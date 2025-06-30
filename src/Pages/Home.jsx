import React from 'react';
import Banner from '../Components/Banner/Banner';
import Features from '../Components/Features/Features';
import HowItWorks from '../Components/Howtoworks/HowToWorks';

const Home = () => {
  return (
    <div>
      <header>
        <Banner />
      </header>
      <main>
        <Features />
        <section>
          <HowItWorks />
        </section>
      </main>
    </div>
  );
};

export default Home;
