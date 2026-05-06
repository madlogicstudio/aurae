'use client';

import { useEffect, useState } from 'react';

type ThemeToggleProps = {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ThemeToggle({isDark, setIsDark}: ThemeToggleProps) {
    

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark';
        setIsDark(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button className='flex flex-row items-center justify-center fadeIn hovered' onClick={toggleTheme}>
        {isDark ? 
            <i className="bx bx-sun text-[length:var(--icon-size)] cursor-pointer" /> 
            : 
            <i className="bx bx-moon text-[length:var(--icon-size)] cursor-pointer" />
        }
        </button>
    );
}