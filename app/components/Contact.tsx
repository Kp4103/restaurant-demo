'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message data to your backend
    console.log('Message submitted:', { name, email, message })
    toast({
      title: "Message Sent!",
      description: "Your message has been sent successfully. We'll get back to you soon!",
      duration: 5000,
    })
    // Clear the form
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-amber-800 font-medium mb-2">Name</label>
            <Input 
              type="text" 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white border-amber-300 focus:ring-amber-500 focus:border-amber-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-amber-800 font-medium mb-2">Email</label>
            <Input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white border-amber-300 focus:ring-amber-500 focus:border-amber-500" 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-amber-800 font-medium mb-2">Message</label>
            <Textarea 
              id="message" 
              rows={4} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-white border-amber-300 focus:ring-amber-500 focus:border-amber-500" 
              required
            />
          </div>
          <Button 
            type="submit" 
            className="bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-300"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

