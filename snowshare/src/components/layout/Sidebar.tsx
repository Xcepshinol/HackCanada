import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <aside className="w-64 h-full bg-gray-800 text-white">
            <div className="p-4">
                <h2 className="text-lg font-bold">SnowShare</h2>
                <nav className="mt-4">
                    <ul>
                        <li className="py-2">
                            <a href="/dashboard" className="hover:text-gray-400">Dashboard</a>
                        </li>
                        <li className="py-2">
                            <a href="/listings" className="hover:text-gray-400">Listings</a>
                        </li>
                        <li className="py-2">
                            <a href="/rentals" className="hover:text-gray-400">Rentals</a>
                        </li>
                        <li className="py-2">
                            <a href="/bookings" className="hover:text-gray-400">Bookings</a>
                        </li>
                        <li className="py-2">
                            <a href="/profile" className="hover:text-gray-400">Profile</a>
                        </li>
                        <li className="py-2">
                            <a href="/auth/login" className="hover:text-gray-400">Login</a>
                        </li>
                        <li className="py-2">
                            <a href="/auth/register" className="hover:text-gray-400">Register</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;