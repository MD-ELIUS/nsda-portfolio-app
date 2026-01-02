import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'; // Import

const RootLayout = () => {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col max-w-[1400px] mx-auto">
            <Navbar />
            <ScrollToTop /> {/* Add this */}
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
