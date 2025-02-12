// src/app/services/page.tsx
'use client';
import React, { useState } from "react";
import Image from "next/image";
import { LuUniversity } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";
import { LuRocket } from "react-icons/lu";
import { LuSchool } from "react-icons/lu";
import { LuNotebookPen } from "react-icons/lu";
import { LuLaugh } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"; // Icon for the close button

type Service = {
    id: number;
    title: string;
    description: string;
    icon: string | React.ReactNode;
    modalContent?: React.ReactNode; // Optional modal content for each service
};

const servicesData: Service[] = [
    {
        id: 1,
        title: "RBT Trainings",
        description: "Receive comprehensive training in applied behavior analysis techniques.",
        icon: <LuUniversity />,
        modalContent: (
            <div>
                <p className="mb-4">
                    The official RBT Handbook from the Behavior Analyst Certification Board establishes rigorous performance, ethical, and supervision standards. As a BCBA with an LBA credential, our training program is designed to fully prepare you for RBT certification.
                </p>
                <p className="mb-4">
                    Our comprehensive curriculum covers essential topics such as data collection, behavior intervention strategies, ethical guidelines, and supervision protocols.
                </p>
                <p>
                    For more details and to review the board’s standards, please refer to the{" "}
                    <a
                        href="https://www.bacb.com/wp-content/uploads/2022/01/RBTHandbook_241226-a.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        official RBT Handbook (PDF)
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 2,
        title: "Parent Consults",
        description: "Get expert guidance to support your child’s development at home.",
        icon: <LuLaugh />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Our Parent Consults service offers personalized guidance based on evidence-based practices. We incorporate ethical standards and best practices as outlined by the Behavior Analyst Certification Board.
                </p>
                <p>
                    Benefit from tailored strategies and actionable advice to support your child’s development at home. For additional details on ethical guidelines and recommended practices, please visit the{" "}
                    <a
                        href="https://www.bacb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        BACB website
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 3,
        title: "Social Stories",
        description: "Learn how to create engaging social stories tailored to your family's needs.",
        icon: <LuBookOpen />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Social Stories are a creative, evidence-based approach designed to improve social communication and behavior, especially for individuals with autism.
                </p>
                <p>
                    In line with best practices and the principles promoted by the Behavior Analyst Certification Board, our service guides you in crafting personalized narratives that foster social understanding and positive interactions.
                </p>
            </div>
        ),
    },
    {
        id: 4,
        title: "Mentorship",
        description: "Connect with experienced professionals for ongoing mentorship.",
        icon: <LuRocket />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Our Mentorship program connects you with seasoned behavior analysts who adhere to the professional and ethical standards set by the Behavior Analyst Certification Board.
                </p>
                <p>
                    Receive ongoing guidance, resources, and career advice designed to help you excel in the field of applied behavior analysis. Learn more about these standards by visiting the{" "}
                    <a
                        href="https://www.bacb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        BACB website
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 5,
        title: "BCBA Supervision Hours",
        description: "Accumulate supervision hours under the guidance of a Board Certified Behavior Analyst.",
        icon: <LuSchool />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Our BCBA Supervision Hours service is designed to help you meet the practical experience requirements for BCBA certification. We provide supervision that aligns with the rigorous standards of the Behavior Analyst Certification Board.
                </p>
                <p>
                    Through structured sessions, you’ll gain valuable insights and hands-on experience that contribute to your professional development.
                </p>
            </div>
        ),
    },
    {
        id: 6,
        title: "Personal Blog",
        description: "Read insightful articles on behavior guidance and autism support.",
        icon: <LuNotebookPen />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Our Personal Blog offers expert commentary, case studies, and the latest trends in behavior analysis. We cover a range of topics, from ethical guidelines to practical intervention strategies.
                </p>
                <p>
                    Stay updated with content that is informed by the standards and best practices endorsed by the Behavior Analyst Certification Board. For further insights, feel free to explore the{" "}
                    <a
                        href="https://www.bacb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        BACB website
                    </a>.
                </p>
            </div>
        ),
    },
];

type ServiceCardProps = {
    service: Service;
    onClick: (service: Service) => void;
};

const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
    return (
        <div
            onClick={() => onClick(service)}
            className="cursor-pointer rounded-lg border border-gray-200 p-6 shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg bg-white"
        >
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

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        // Overlay covering the entire viewport; clicking on it closes the modal.
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            {/* Modal content: clicking inside stops propagation to prevent closing */}
            <div
                className="relative bg-white rounded-lg p-8 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button in the top right corner */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    <IoMdClose size={24} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default function ServicesPage() {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const openModal = (service: Service) => setSelectedService(service);
    const closeModal = () => setSelectedService(null);

    return (
        <>
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
                            <ServiceCard key={service.id} service={service} onClick={openModal} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal renders when a service is selected */}
            <Modal isOpen={!!selectedService} onClose={closeModal}>
                {selectedService && (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
                        <p className="mb-4">{selectedService.description}</p>
                        {selectedService.modalContent && (
                            <div className="mt-4">{selectedService.modalContent}</div>
                        )}
                    </div>
                )}
            </Modal>
        </>
    );
}