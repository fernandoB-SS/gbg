// src/app/about/page.tsx
import React from "react";
import Image from "next/image";
import Image1 from "@/assets/about-team.png";
export default function AboutPage() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-5xl text-center">
                <h1 className="text-4xl font-bold">About Gentle Behavior Guidance</h1>
                <p className="mt-4 text-lg text-gray-700">
                    Our mission is to provide you with useful information and tools that help you better understand Autism and navigate the diagnostic process and daily challenges.
                    We are committed to supporting and guiding families—especially Spanish-speaking ones—on their journey toward gentle care and informed support.
                </p>
                <p className="mt-6 text-md text-gray-600">
                    We offer a range of services including RBT Trainings, Parent Consults, Social Stories, Mentorship, BCBA Supervision Hours, and an insightful blog.
                    Our approach is rooted in compassion, evidence-based practices, and a genuine desire to empower families.
                </p>
                <div className="mt-8">
                    {/* Replace with your own image; ensure the image exists in the public/images folder */}
                    <Image
                        src={Image1}
                        alt="Our Team"
                        width={800}
                        height={400}
                        className="mx-auto rounded-lg shadow-md"
                    />
                </div>
                <p className="mt-6 text-sm text-gray-500">
                    © {new Date().getFullYear()} Gentle Behavior Guidance. All rights reserved.
                </p>
            </div>
        </section>
    );
}