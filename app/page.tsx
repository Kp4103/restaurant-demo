"use client"

import { useState } from 'react'
import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Menu from '@/app/components/Menu'
import Map from '@/app/components/Map'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'
import AnimatedBackground from '@/app/components/AnimatedBackground'
import { ReservationForm } from '@/app/components/ReservationForm'
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false)

  return (
    <main className="min-h-screen bg-amber-50 relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero onReserve={() => setIsReservationOpen(true)} />
        <About />
        <Menu />
        <Map />
        <Contact />
        <Footer />
      </div>
      <ReservationForm isOpen={isReservationOpen} setIsOpen={setIsReservationOpen} />
      <Toaster />
    </main>
  )
}

