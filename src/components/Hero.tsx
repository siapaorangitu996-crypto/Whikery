"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center px-6 md:px-12 lg:px-24 overflow-hidden bg-black font-sans">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/background.webp"
          alt="Noto Nature Park"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Subtle Overlay to ensure text readability */}
      <div className="absolute inset-0 z-10 bg-black/10 md:bg-transparent" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto mt-20">
        {/* Badge/Small Title */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-4 mb-6 md:mb-8 lg:mb-10"
        >
          <div className="text-white text-3xl font-light" aria-hidden="true">
             <span className="inline-block scale-y-125 scale-x-90 -mt-1 opacity-80 select-none">山</span>
          </div>
          <span className="text-white text-[0.8rem] md:text-[0.9rem] tracking-[0.05em] font-medium opacity-90 uppercase">
            Journey to new frontiers. Journey to Noto Nature Park
          </span>
        </motion.div>

        {/* Big Title */}
        <div className="overflow-hidden mb-8 md:mb-10">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="text-white text-[15vw] sm:text-[18vw] md:text-[22vw] lg:text-[24vw] xl:text-[26vw] font-serif leading-[0.7] tracking-[0.02em] font-medium drop-shadow-2xl"
          >
            VISITE
          </motion.h1>
        </div>

        {/* Description and Button Container */}
        <div className="max-w-xs md:max-w-md lg:max-w-lg">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 text-[0.9rem] md:text-[1rem] mb-12 md:mb-14 leading-[1.7] font-normal drop-shadow-sm"
          >
            Away from the manic energy of Japan's famous metropolis lies the
            ancient hamlet of Noto. Surprising and captivating in equal measure,
            Noto is a region like no other. Soaring peaks, lakes and endless waterfalls.
          </motion.p>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white text-black flex items-stretch rounded-[2px] overflow-hidden shadow-2xl transition-all duration-300"
          >
            <span className="flex items-center pl-10 pr-8 py-4 text-[0.95rem] font-bold tracking-tight">
              Start the journey
            </span>
            <div className="border-l border-black/10 px-6 flex items-center justify-center group-hover:bg-neutral-50 transition-colors">
              <Play className="w-3.5 h-3.5 fill-current transition-transform group-hover:scale-110" />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
