// src/components/Hero.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure you have installed shadcn/ui and added the Button component

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-background">
            <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl text-primary">
                Empowering Families in Autism Support
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-700">
                Discover resources, training, and guidance for Spanish-speaking families and anyone embracing a gentle care approach.
            </p>
            <div className="mt-8 flex space-x-4">
                <Link href="/services">
                    <Button variant="default" size="lg">
                        Our Services
                    </Button>
                </Link>
                <Link href="/blog">
                    <Button variant="outline" size="lg">
                        Read Our Blog
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;