import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="flex-grow py-20">
        <Outlet />
      </main>

      <footer className="-mt-10">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
