"use client";

import React, { useState, useEffect } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconInfoCircle, IconMenu2, IconMapPin, IconMail } from "@tabler/icons-react";
import { ReservationForm } from "@/app/components/ReservationForm";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <IconHome className="h-4 w-4 text-amber-50" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <IconInfoCircle className="h-4 w-4 text-amber-50" />,
  },
  {
    name: "Menu",
    link: "#menu",
    icon: <IconMenu2 className="h-4 w-4 text-amber-50" />,
  },
  {
    name: "Location",
    link: "#location",
    icon: <IconMapPin className="h-4 w-4 text-amber-50" />,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: <IconMail className="h-4 w-4 text-amber-50" />,
  },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} onReserve={() => setIsReservationOpen(true)} />
      <div
        className={`fixed top-2 left-0 w-full z-[5000] transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="py-2">
          <div className="container mx-auto px-10">
            <h1 className="text-2xl font-extrabold logo-text">
              <span className="text-amber-400">Gourmet</span>{" "}
              <span className="text-amber-500">Haven</span>
            </h1>
          </div>
        </div>
      </div>
      <ReservationForm isOpen={isReservationOpen} setIsOpen={setIsReservationOpen} />
    </div>
  );
}

