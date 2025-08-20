// components/Pricing.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Router } from 'lucide-react'
import { useRouter } from 'next/navigation'

const plans = [
  {
    name: 'Starter',
    price: 9,
    features: [
      '5 hours of content per month',
      'Basic AI voice library',
      'Auto-publish to 3 platforms'
    ],
    isPopular: false
  },
  {
    name: 'Professional',
    price: 29,
    features: [
      '25 hours of content per month',
      'Premium AI voice library',
      'Unlimited platform publishing',
      'Advanced analytics'
    ],
    isPopular: true
  },
  {
    name: 'Enterprise',
    price: 99,
    features: [
      'Unlimited content creation',
      'Custom AI voice training',
      'White-label solutions',
      '24/7 priority support'
    ],
    isPopular: false
  }
]

export const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const router = useRouter()
  return (
    <section id="pricing" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your podcasting needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${plan.isPopular
                  ? 'bg-gradient-to-br from-orange-400/20 to-orange-500/20 border-orange-500/50 scale-105'
                  : 'bg-white/5 border-white/10 hover:border-orange-500/50'
                }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-lg text-gray-400">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 rounded-full font-semibold transition-all cl-formButtonPrimary cl-button  cl-internal-1od8zdn ${plan.isPopular
                      ? 'animate-glow'
                      : ''
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => router.push("/sign-up")}
                >
                  {index === 0 ? 'Get Started' : index === 1 ? 'Start Free Trial' : 'Contact Sales'}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

