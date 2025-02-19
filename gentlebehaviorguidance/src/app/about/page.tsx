'use client';
import React, { useContext } from "react";
import Image from "next/image";
import Image1 from "@/assets/about-team.png";
import { LanguageContext } from "@/context/LanguageContext";

const translations = {
    en: {
        title: "About Gentle Behavior Guidance",
        mission:
            "Our mission is to provide you with useful information and tools that help you better understand Autism and navigate the diagnostic process and daily challenges. We are committed to supporting and guiding families—especially Spanish-speaking ones—on their journey toward gentle care and informed support.",
        services:
            "We offer a range of services including RBT Trainings, Parent Consults, Social Stories, Mentorship, BCBA Supervision Hours, and an insightful blog. Our approach is rooted in compassion, evidence-based practices, and a genuine desire to empower families.",
    },
    es: {
        title: "Acerca de Gentle Behavior Guidance",
        mission:
            "Nuestra misión es brindarte información y herramientas útiles que te ayuden a comprender mejor el autismo y a navegar el proceso de diagnóstico y los desafíos diarios. Estamos comprometidos a apoyar y guiar a las familias—especialmente a las de habla hispana—en su camino hacia un cuidado suave e informado.",
        services:
            "Ofrecemos una variedad de servicios que incluyen Entrenamientos RBT, Consultas para Padres, Historias Sociales, Mentoría, Horas de Supervisión BCBA y un blog informativo. Nuestro enfoque se basa en la compasión, prácticas basadas en evidencia y un genuino deseo de empoderar a las familias.",
    },
};

export default function AboutPage() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-5xl text-center">
                <h1 className="text-4xl font-bold">{t.title}</h1>
                <p className="mt-4 text-lg text-gray-700">{t.mission}</p>
                <p className="mt-6 text-md text-gray-600">{t.services}</p>
                <div className="mt-8">
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