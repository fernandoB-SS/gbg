// src/components/Hero.tsx
'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LanguageContext } from '@/context/LanguageContext';

const translations = {
    en: {
        headline: "Empowering Families in Autism Support",
        description:
            "Discover resources, training, and guidance for Spanish-speaking families and anyone embracing a gentle care approach.",
        servicesButton: "Our Services",
        blogButton: "Read Our Blog",
    },
    es: {
        headline: "Guianza para Familias en el Apoyo al Autismo",
        description:
            "Descubre recursos, capacitación y orientación para familias de habla hispana y para quienes adoptan un enfoque de cuidado suave.",
        servicesButton: "Nuestros Servicios",
        blogButton: "Lee Nuestro Blog",
    },
};

const Hero = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl text-primary">
                {t.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-700">{t.description}</p>
            <div className="mt-8 flex space-x-4">
                <Link href="/services">
                    <Button variant="default" size="lg">
                        {t.servicesButton}
                    </Button>
                </Link>
                <Link href="/blog">
                    <Button variant="outline" size="lg">
                        {t.blogButton}
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;