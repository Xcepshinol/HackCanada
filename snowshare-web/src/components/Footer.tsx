import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-100 text-slate-600 py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} SnowShare. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="/privacy" className="text-sky-600 hover:underline">Privacy Policy</a>
                    <a href="/terms" className="text-sky-600 hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;