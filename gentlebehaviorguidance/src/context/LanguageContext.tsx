// src/context/LanguageContext.tsx
'use client';
import { createContext, useState, ReactNode } from "react";

export type Language = "en" | "es";

interface LanguageContextProps {
    language: Language;
    setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
    language: "en",
    setLanguage: () => { },
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};