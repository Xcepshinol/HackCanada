import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    SnowShare
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/listings">Listings</Link>
                        </li>
                        <li>
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link href="/auth/login">Login</Link>
                        </li>
                        <li>
                            <Link href="/auth/register">Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;