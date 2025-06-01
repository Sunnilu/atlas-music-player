import { useEffect, useState } from 'react';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <footer className="py-6 text-center font-custom text-sm text-gray-700 dark:text-text-light">
      <p>&copy; 2024 Atlas School. All rights reserved.</p>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="mt-2 text-xs text-primary underline hover:text-accent dark:text-text-light"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </footer>
  );
};

export default Footer;
