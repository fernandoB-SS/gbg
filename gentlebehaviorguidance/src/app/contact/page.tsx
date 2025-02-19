'use client';
import React, { useState, useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const translations = {
    en: {
        heading: "Contact Us",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        sendMessage: "Send Message",
        sending: "Sending...",
        fillAllFields: "Please fill in all fields.",
        validEmail: "Please enter a valid email address.",
        successMessage: "Your message has been sent successfully!",
        genericError: "Something went wrong.",
    },
    es: {
        heading: "Contáctanos",
        name: "Nombre",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Mensaje",
        sendMessage: "Enviar Mensaje",
        sending: "Enviando...",
        fillAllFields: "Por favor, completa todos los campos.",
        validEmail: "Por favor, ingresa un correo electrónico válido.",
        successMessage: "¡Tu mensaje ha sido enviado exitosamente!",
        genericError: "Algo salió mal.",
    },
};

export default function ContactPage() {
    const { language } = useContext(LanguageContext);
    const t = translations[language];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    // Update form state on change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Client-side validation function
    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError(t.fillAllFields);
            return false;
        }
        // Simple email regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError(t.validEmail);
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) return;

        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setSuccess(t.successMessage);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setError(data.error || t.genericError);
            }
        } catch (err) {
            console.error(err);
            setError(t.genericError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">{t.heading}</h1>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                {error && <p className="mb-4 text-red-600">{error}</p>}
                {success && <p className="mb-4 text-green-600">{success}</p>}
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium">{t.name}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">{t.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block mb-1 font-medium">{t.subject}</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full border border-gray-300 p-2 rounded"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium">{t.message}</label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full border border-gray-300 p-2 rounded h-32"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? t.sending : t.sendMessage}
                </button>
            </form>
        </div>
    );
}