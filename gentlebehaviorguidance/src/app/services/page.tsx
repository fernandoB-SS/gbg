'use client';
import React, { useState, useContext } from "react";
import Image from "next/image";
import {
    LuUniversity,
    LuBookOpen,
    LuRocket,
    LuSchool,
    LuNotebookPen,
    LuLaugh,
} from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { LanguageContext } from "@/context/LanguageContext";

type Service = {
    id: number;
    title: string;
    description: string;
    icon: string | React.ReactNode;
    modalContent?: React.ReactNode;
};

const servicesDataEn: Service[] = [
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

const servicesDataEs: Service[] = [
    {
        id: 1,
        title: "Entrenamientos RBT",
        description: "Recibe capacitación integral en técnicas de análisis de conducta aplicada.",
        icon: <LuUniversity />,
        modalContent: (
            <div>
                <p className="mb-4">
                    El manual oficial de RBT de la Behavior Analyst Certification Board establece estándares rigurosos en desempeño, ética y supervisión. Como BCBA con credencial LBA, nuestro programa de capacitación está diseñado para prepararte completamente para la certificación RBT.
                </p>
                <p className="mb-4">
                    Nuestro currículo integral cubre temas esenciales como la recopilación de datos, estrategias de intervención conductual, pautas éticas y protocolos de supervisión.
                </p>
                <p>
                    Para más detalles y para revisar los estándares de la junta, por favor consulta el{" "}
                    <a
                        href="https://www.bacb.com/wp-content/uploads/2022/01/RBTHandbook_241226-a.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        manual oficial de RBT (PDF)
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 2,
        title: "Consultas para Padres",
        description: "Obtén orientación experta para apoyar el desarrollo de tu hijo en casa.",
        icon: <LuLaugh />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Nuestro servicio de Consultas para Padres ofrece orientación personalizada basada en prácticas basadas en evidencia. Incorporamos estándares éticos y las mejores prácticas según lo indicado por la Behavior Analyst Certification Board.
                </p>
                <p>
                    Benefíciate de estrategias personalizadas y consejos prácticos para apoyar el desarrollo de tu hijo en casa. Para detalles adicionales sobre las pautas éticas y las prácticas recomendadas, por favor visita el{" "}
                    <a
                        href="https://www.bacb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        sitio web de la BACB
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 3,
        title: "Historias Sociales",
        description: "Aprende cómo crear historias sociales atractivas adaptadas a las necesidades de tu familia.",
        icon: <LuBookOpen />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Las Historias Sociales son un enfoque creativo y basado en la evidencia diseñado para mejorar la comunicación social y el comportamiento, especialmente en individuos con autismo.
                </p>
                <p>
                    En línea con las mejores prácticas y los principios promovidos por la Behavior Analyst Certification Board, nuestro servicio te guía en la creación de narrativas personalizadas que fomenten la comprensión social y las interacciones positivas.
                </p>
            </div>
        ),
    },
    {
        id: 4,
        title: "Mentoría",
        description: "Conéctate con profesionales experimentados para una mentoría continua.",
        icon: <LuRocket />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Nuestro programa de Mentoría te conecta con analistas de comportamiento experimentados que se adhieren a los estándares profesionales y éticos establecidos por la Behavior Analyst Certification Board.
                </p>
                <p>
                    Recibe orientación continua, recursos y consejos de carrera diseñados para ayudarte a sobresalir en el campo del análisis de conducta aplicada. Para saber más sobre estos estándares, visita el{" "}
                    <a
                        href="https://www.bacb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        sitio web de la BACB
                    </a>.
                </p>
            </div>
        ),
    },
    {
        id: 5,
        title: "Horas de Supervisión BCBA",
        description: "Acumula horas de supervisión bajo la guía de un Analista de Comportamiento Certificado (BCBA).",
        icon: <LuSchool />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Nuestro servicio de Horas de Supervisión BCBA está diseñado para ayudarte a cumplir con los requisitos de experiencia práctica para la certificación BCBA. Brindamos supervisión que se alinea con los rigurosos estándares de la Behavior Analyst Certification Board.
                </p>
                <p>
                    A través de sesiones estructuradas, obtendrás conocimientos valiosos y experiencia práctica que contribuirán a tu desarrollo profesional.
                </p>
            </div>
        ),
    },
    {
        id: 6,
        title: "Blog Personal",
        description: "Lee artículos perspicaces sobre orientación conductual y apoyo al autismo.",
        icon: <LuNotebookPen />,
        modalContent: (
            <div>
                <p className="mb-4">
                    Nuestro Blog Personal ofrece comentarios de expertos, estudios de caso y las últimas tendencias en análisis de conducta. Cubrimos una variedad de temas, desde pautas éticas hasta estrategias prácticas de intervención.
                </p>
                <p>
                    Mantente actualizado con contenido informado por los estándares y mejores prácticas avalados por la Behavior Analyst Certification Board. Para obtener más información, no dudes en visitar el{" "}
                    <a
                        href="https://www.bacb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        sitio web de la BACB
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
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-lg p-8 max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
            >
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
    const { language } = useContext(LanguageContext);
    const servicesData = language === "en" ? servicesDataEn : servicesDataEs;

    const openModal = (service: Service) => setSelectedService(service);
    const closeModal = () => setSelectedService(null);

    return (
        <>
            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl font-bold">
                            {language === "en" ? "Our Services" : "Nuestros Servicios"}
                        </h1>
                        <p className="mt-4 text-lg text-gray-700">
                            {language === "en"
                                ? "Discover a range of services designed to help families navigate Autism and promote gentle behavior guidance."
                                : "Descubre una gama de servicios diseñados para ayudar a las familias a enfrentar el autismo y promover una orientación conductual suave."}
                        </p>
                    </header>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {servicesData.map((service) => (
                            <ServiceCard key={service.id} service={service} onClick={openModal} />
                        ))}
                    </div>
                </div>
            </section>

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