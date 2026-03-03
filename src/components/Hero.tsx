"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.webp')" }}
      />

      {/* Subtle Overlay to ensure readability */}
      <div className="absolute inset-0 z-10 bg-black/10" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto mt-20 lg:mt-28">
        {/* Badge/Small Title */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-4 mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex flex-col gap-1 items-start">
            <div className="w-5 h-[1px] bg-white/70" />
            <div className="w-3 h-[1px] bg-white/70" />
            <div className="w-5 h-[1px] bg-white/70" />
          </div>
          <span className="text-white text-[0.8rem] md:text-[0.9rem] tracking-tight font-medium drop-shadow-sm">
            Journey to new frontiers. Journey to Noto Nature Park
          </span>
        </motion.div>

        {/* Big Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[15rem] xl:text-[19rem] font-serif leading-[0.75] mb-10 md:mb-12 tracking-[-0.03em] font-normal drop-shadow-lg"
        >
          VISITE
        </motion.h1>

        {/* Description and Button Container */}
        <div className="max-w-xs md:max-w-md">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white/80 text-[0.75rem] md:text-[0.85rem] mb-8 md:mb-10 leading-[1.6] font-normal drop-shadow-sm"
          >
            Away from the manic energy of Japan's famous metropolis lies the
            ancient hamlet of Noto. Surprising and captivating in equal measure,
            Noto is a region like no other. Soaring peaks, lakes and endless waterfalls.
          </motion.p>

          <motion.button
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="group bg-white text-black pl-1.5 pr-6 md:pr-8 py-1.5 rounded-sm flex items-center gap-4 md:gap-6 text-[0.8rem] md:text-[0.85rem] font-bold hover:bg-neutral-100 transition-all duration-300 shadow-xl"
          >
            <div className="bg-black text-white p-2 px-2.5 md:px-3 rounded-sm">
              <Play className="w-3 h-3 fill-current" />
            </div>
            Start the journey
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
