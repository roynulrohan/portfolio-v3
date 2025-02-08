import { createContext, useContext, useEffect, useState } from 'react';

// Theme mapping for DaisyUI themes
const THEME_MAP = {
    light: 'emerald', // Change this to any light theme you want
    dark: 'forest'      // Change this to any dark theme you want
} as const;

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        // Check if theme is stored in localStorage
        const savedTheme = localStorage.getItem('theme') as Theme;
        // Check user's system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        return savedTheme || (prefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        // Update data-theme attribute when theme changes with the mapped DaisyUI theme
        document.documentElement.setAttribute('data-theme', THEME_MAP[theme]);
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
