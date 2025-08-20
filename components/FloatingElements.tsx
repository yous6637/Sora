// components/FloatingElements.tsx
'use client'

import { motion } from 'framer-motion'

export const FloatingElements = () => {
  return (
    <>
      <motion.div 
        className="absolute top-1/4 left-10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="w-4 h-4 bg-red-500 rounded-full mb-2 animate-pulse"></div>
          <div className="text-xs text-gray-300">Recording...</div>
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-10"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
            <div className="text-xs text-gray-300">AI Voice</div>
          </div>
        </div>
      </motion.div>
    </>
  )
}