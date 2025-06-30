import React from 'react';
import Banner from '../Components/Banner/Banner';
import Features from '../Components/Features/Features';
import HowItWorks from '../Components/Howtoworks/HowToWorks';
import Testimonial from '../Components/Testimonial/Testimonial';
import BlogSection from '../Components/BlogSection/BlogSection';

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
        <section>
          <Testimonial />
        </section>
        <section>
          <BlogSection />
        </section>
      </main>
    </div>
  );
};

export default Home;
