// src/components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/LOGO.png';
import { Button } from '@/components/ui/button'; // Importing the shadcn UI Button

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            {/* Logo and title */}
            <div className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={100} height={100} />
                <span className="text-xl font-semibold">Gentle Behavior Guidance</span>
            </div>
            {/* Navigation */}
            <nav className="flex items-center gap-4">
                <Link href="/" className="text-gray-700 hover:text-primary">
                    Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-primary">
                    About
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-primary">
                    Services
                </Link>
                {/* Contact Link */}
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Header;