// src/app/services/page.tsx
import React from "react";
import Image from "next/image";
import { LuUniversity } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import { LuSchool } from "react-icons/lu";
import { LuNotebookPen } from "react-icons/lu";
import { LuLaugh } from "react-icons/lu";

type Service = {
    id: number;
    title: string;
    description: string;
    icon: string | React.ReactNode;
};

const servicesData: Service[] = [
    {
        id: 1,
        title: "RBT Trainings",
        description: "Receive comprehensive training in applied behavior analysis techniques.",
        icon: <LuUniversity />, // using a React icon
    },
    {
        id: 2,
        title: "Parent Consults",
        description: "Get expert guidance to support your child’s development at home.",
        icon: <LuLaugh />,
    },
    {
        id: 3,
        title: "Social Stories",
        description: "Learn how to create engaging social stories tailored to your family's needs.",
        icon: <LuBookOpen />,
    },
    {
        id: 4,
        title: "Mentorship",
        description: "Connect with experienced professionals for ongoing mentorship.",
        icon: <LuRocket />,
    },
    {
        id: 5,
        title: "BCBA Supervision Hours",
        description: "Accumulate supervision hours under the guidance of a Board Certified Behavior Analyst.",
        icon: <LuSchool />
        ,
    },
    {
        id: 6,
        title: "Personal Blog",
        description: "Read insightful articles on behavior guidance and autism support.",
        icon: <LuNotebookPen />,
    },
];

const ServiceCard = ({ service }: { service: Service }) => {
    return (
        <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow bg-white">
            <div className="flex items-center justify-center h-16 w-16 mb-4 bg-primary-100 rounded-full">
                {typeof service.icon === "string" ? (
                    <Image src={service.icon} alt={service.title} width={40} height={40} />
                ) : (
                    <div className="text-4xl text-primary">{service.icon}</div>
                )}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
        </div>
    );
};

export default function ServicesPage() {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold">Our Services</h1>
                    <p className="mt-4 text-lg text-gray-700">
                        Discover a range of services designed to help families navigate Autism and promote gentle behavior guidance.
                    </p>
                </header>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}