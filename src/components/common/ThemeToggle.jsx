import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <motion.div
      className="fixed top-20 right-4 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full p-0 bg-background/80 backdrop-blur-sm border-border hover:bg-accent"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDarkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  )
}

export default ThemeToggle

