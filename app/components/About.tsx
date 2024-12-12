'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p 
          className="text-lg text-center max-w-3xl mx-auto text-amber-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Gourmet Haven, we believe in creating unforgettable dining experiences. Our passionate chefs combine traditional techniques with innovative flavors to bring you dishes that delight the senses. Using only the freshest, locally-sourced ingredients, we craft each meal with care and precision. Join us for an extraordinary culinary journey that celebrates the art of fine dining.
        </motion.p>
      </div>
    </section>
  )
}

export default About

