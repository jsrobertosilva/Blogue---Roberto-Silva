import React from 'react'
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-8 mx-auto"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity }
          }}
        >
          <Code className="w-10 h-10 text-white" />
        </motion.div>
        
        <motion.h2
          className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Roberto Silva
        </motion.h2>
        
        <motion.div
          className="flex space-x-1 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen

