// components/Features.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Mic, 
  Scissors, 
  Download, 
  BarChart3, 
  Users, 
  Zap 
} from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'AI Voice Generation',
    description: 'Create natural-sounding voiceovers with our advanced AI technology. Choose from dozens of voices and languages.',
    gradient: 'from-orange-500 to-orange-500'
  },
  {
    icon: Scissors,
    title: 'Smart Editing',
    description: 'Automatically remove filler words, adjust pacing, and enhance audio quality with our intelligent editing tools.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Download,
    title: 'One-Click Publishing',
    description: 'Distribute your podcast to all major platforms including Spotify, Apple Podcasts, and Google Podcasts instantly.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Track your podcast performance with detailed analytics, audience insights, and engagement metrics.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together with your team in real-time. Share projects, leave comments, and manage permissions easily.',
    gradient: 'from-indigo-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process and render your podcasts in minutes, not hours. Our optimized infrastructure ensures rapid turnaround times.',
    gradient: 'from-pink-500 to-rose-500'
  }
]
export const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="features" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to create, edit, and publish professional podcasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}