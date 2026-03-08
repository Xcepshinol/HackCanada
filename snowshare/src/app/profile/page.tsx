import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

const ProfilePage = () => {
    const { user } = useAuth();

    return (
        <div>
            <Header />
            <main className="p-4">
                <h1 className="text-2xl font-bold">User Profile</h1>
                {user ? (
                    <div className="mt-4">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        {/* Add more user information as needed */}
                    </div>
                ) : (
                    <p className="text-red-500">User not found. Please log in.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;