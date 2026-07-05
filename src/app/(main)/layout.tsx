import Footer from '@/components/layouts/Footer';
import Navbar from '@/components/layouts/Navbar';
import React, { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='max-w-360 w-full mx-auto'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
