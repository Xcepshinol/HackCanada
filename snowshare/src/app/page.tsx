import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to SnowShare</h1>
            <p className="text-lg mb-8">Your platform for sharing and requesting help in the community.</p>
            <a href="/auth/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Login
            </a>
            <a href="/auth/register" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Register
            </a>
        </div>
    );
};

export default HomePage;