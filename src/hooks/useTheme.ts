// src/hooks/useTheme.ts
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // 1. Revisar si el usuario ya guardó una preferencia antes
    const savedTheme = localStorage.getItem('theme');
    // 2. Si existe, usarla. Si no, ¡USAR MODO OSCURO POR DEFECTO!
    return savedTheme || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remover la clase anterior y poner la nueva
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};