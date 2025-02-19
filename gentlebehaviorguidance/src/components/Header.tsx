// src/components/Header.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import Logo from '@/assets/LOGO.png';

const translations = {
    en: {
        title: "Gentle Behavior Guidance",
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            contact: "Contact",
        },
        languageLabel: "English",
    },
    es: {
        title: "Gentle Behavior Guidance",
        nav: {
            home: "Inicio",
            about: "Quienes somos",
            services: "Servicios",
            contact: "Contacto",
        },
        languageLabel: "Español",
    },
};

const Header = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    const t = translations[language];

    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
                <Image src={Logo} alt="Logo" width={100} height={100} />
                <span className="text-xl font-semibold">{t.title}</span>
            </div>
            <div className="flex items-center gap-4">
                <nav className="flex items-center gap-4">
                    <Link href="/" className="text-gray-700 hover:text-primary">{t.nav.home}</Link>
                    <Link href="/about" className="text-gray-700 hover:text-primary">{t.nav.about}</Link>
                    <Link href="/services" className="text-gray-700 hover:text-primary">{t.nav.services}</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-gray-800">{t.nav.contact}</Link>
                </nav>
                <div className="ml-4 flex items-center">
                    <button
                        onClick={toggleLanguage}
                        className="relative inline-flex items-center h-6 rounded-full w-12 bg-gray-300 focus:outline-none"
                    >
                        <span className="sr-only">Toggle language</span>
                        <span
                            className={`${language === 'es' ? 'translate-x-6' : 'translate-x-0'
                                } inline-block w-6 h-6 transform bg-primary rounded-full transition-transform duration-200`}
                        />
                    </button>
                    <span className="ml-2 text-gray-700">{t.languageLabel}</span>
                </div>
            </div>
        </header>
    );
};

export default Header;