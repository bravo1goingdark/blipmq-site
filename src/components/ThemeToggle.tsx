import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { FiMoon, FiSun } from 'react-icons/fi'

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const cycleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={cycleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
      aria-label="Toggle theme"
      title={`Current theme: ${resolvedTheme}`}
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FiMoon className="w-5 h-5 text-gray-600" />
      )}
    </motion.button>
  )
}
