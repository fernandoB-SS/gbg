// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-6 border-t border-gray-200">
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <p className="text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Gentle Behavior Guidance. All rights reserved.
                </p>
                <div className="mt-2 flex justify-center space-x-4">
                    <Link href="/privacy" className="text-gray-600 hover:text-primary">
                        Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-gray-600 hover:text-primary">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;