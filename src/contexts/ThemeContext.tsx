// import React, { createContext, useContext, useState, useEffect } from 'react'; 

// export type Theme = 'default' | 'modern' | 'creative';

// interface ThemeContextType {
//   theme: Theme;
//   setTheme: (theme: Theme) => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>(() => {
//     const saved = localStorage.getItem('acadia-theme');
//     return (saved as Theme) || 'modern'; // 👈 default is modern
//   });
  

//   useEffect(() => {
//     localStorage.setItem('acadia-theme', theme);
//     document.documentElement.setAttribute('data-theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 'default' | 'modern' | 'creative';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // === Optional env-based forcing (nice for dev/prod control) ===
  const forced = (import.meta.env.VITE_FORCE_THEME as Theme | undefined) || 'modern';

  // We keep state only so components reading `useTheme()` work,
  // but we ignore localStorage/user changes when a forced theme is set.
  const [theme, setTheme] = useState<Theme>(forced);

  useEffect(() => {
    // Always apply & persist the forced theme
    document.documentElement.setAttribute('data-theme', forced);
    localStorage.setItem('acadia-theme', forced);
  }, [forced]);

  // If you truly never want runtime switching, return a no-op setter:
  const value: ThemeContextType = { theme: forced, setTheme: () => {} };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
