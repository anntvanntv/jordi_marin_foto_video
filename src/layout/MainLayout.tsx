import { Outlet } from 'react-router-dom';
import { Header } from "../components/Header";
import { RightNav } from "../components/RightNav";
import { LeftNav } from "../components/LeftNav";
import { Footer } from "../components/Footer";
import { useState } from "react";

export const MainLayout = () => {
   const isMobile = window.innerWidth < 500;
   const [isOpen, setIsOpen] = useState(false);
   

   if (!isMobile) {
      // layout desktop → NO usamos isOpen
      return (
        <div className='main-layout'>
          <Header />
          <div className="wrap">
            <LeftNav />
            <main className='content'><Outlet /></main>
            <RightNav />
          </div>
          <Footer />
        </div>
      );
    }
    
    // Layout móvil → usamos isOpen
    return (
      <div className='main-layout'>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="wrap">
          {!isOpen && <LeftNav isOpen={!isOpen} setIsOpen={setIsOpen} />}
          <main className='content'>
            {isOpen && <Outlet />}
          </main>
          {!isOpen && <RightNav isOpen={!isOpen} setIsOpen={setIsOpen} />}
        </div>
        {!isOpen && <Footer isOpen={!isOpen} setIsOpen={setIsOpen} />}
      </div>
    );
   }