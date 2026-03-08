import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';

const DashboardPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-grow">
                <Sidebar />
                <main className="flex-grow p-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p>Here you can view nearby requests and relevant information.</p>
                    {/* Additional dashboard content goes here */}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default DashboardPage;