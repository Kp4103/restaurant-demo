"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const menuItems = [
  { 
    name: "Truffle Infused Risotto", 
    price: "$25", 
    description: "Creamy Arborio rice infused with black truffle, finished with Parmesan",
    image: "/images/truffle.webp?height=200&width=20"
  },
  { 
    name: "Seared Scallops", 
    price: "$30", 
    description: "Pan-seared scallops with saffron sauce and micro greens",
    image: "/images/scallops.jpg"
  },
  { 
    name: "Wagyu Beef Carpaccio", 
    price: "$35", 
    description: "Thinly sliced Wagyu beef with arugula, capers, and truffle oil",
    image: "/images/beef.webp"
  },
  { 
    name: "Lobster Thermidor", 
    price: "$40", 
    description: "Succulent lobster meat in a rich, creamy sauce, gratinated to perfection",
    image: "/images/lobster.webp"
  },
  { 
    name: "Foie Gras Terrine", 
    price: "$28", 
    description: "Smooth foie gras terrine with fig compote and toasted brioche",
    image: "/images/terrine.webp"
  },
  { 
    name: "Chocolate Soufflé", 
    price: "$15", 
    description: "Light and airy chocolate soufflé served with vanilla crème anglaise",
    image: "/images/souffle.jpeg"
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-amber-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Menu
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuItems.map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl overflow-hidden border shadow-lg flex flex-col">
                <CardItem
                  translateZ="100"
                  className="w-full h-48 relative"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </CardItem>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-amber-800 dark:text-white mb-2"
                    >
                      {item.name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-amber-700 text-sm max-w-sm mb-4 dark:text-neutral-300"
                    >
                      {item.description}
                    </CardItem>
                  </div>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <button className="rounded-full bg-amber-600 dark:bg-white dark:text-black text-white text-sm px-4 py-2 font-bold hover:bg-amber-700 transition-colors duration-300">
                      {item.price}
                    </button>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

