import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center space-x-2 px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800">
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'light'
            ? 'bg-white text-yellow-500 shadow-sm dark:bg-gray-700'
            : 'text-gray-500 hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400'
        }`}
        title="Light mode"
      >
        <FiSun size={20} />
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'dark'
            ? 'bg-white text-indigo-500 shadow-sm dark:bg-gray-700'
            : 'text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400'
        }`}
        title="Dark mode"
      >
        <FiMoon size={20} />
      </button>
      <button
        onClick={() => handleThemeChange('system')}
        className={`p-2 rounded-md transition-colors ${
          theme === 'system'
            ? 'bg-white text-green-500 shadow-sm dark:bg-gray-700'
            : 'text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400'
        }`}
        title="System theme"
      >
        <FiMonitor size={20} />
      </button>
    </div>
  );
};

export default ThemeToggle;
