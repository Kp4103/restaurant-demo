'use client'
import { motion } from 'framer-motion'

const Hero = ({ onReserve }: { onReserve: () => void }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to Gourmet Haven
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Experience culinary excellence in every bite
        </motion.p>
        <motion.button 
          className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.6 }}
          onClick={onReserve}
        >
          Reserve a Table
        </motion.button>
      </div>
    </section>
  )
}

export default Hero

