"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavItem {
  name: string
  link: string
  icon?: React.ReactNode
}

interface FloatingNavProps {
  navItems: NavItem[]
  className?: string
  onReserve: () => void
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
  onReserve,
}) => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex max-w-fit fixed top-12 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-amber-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link-${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-amber-50 items-center flex space-x-1 hover:text-amber-200 transition-colors duration-200"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
        </Link>
      ))}
      <button 
        onClick={onReserve}
        className="border text-sm font-medium relative border-amber-200 text-amber-50 px-4 py-2 rounded-full hover:bg-amber-700 transition-colors duration-200"
      >
        <span>Reserve</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-amber-400 to-transparent h-px" />
      </button>
    </motion.div>
  )
}

