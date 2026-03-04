"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 lg:px-24 md:py-10"
    >
      <div className="text-[1.3rem] md:text-[1.5rem] font-bold text-white tracking-tight">
        Notosan
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-12 xl:space-x-16 text-[0.85rem] font-medium text-white">
        <Link href="#" className="hover:text-white/80 transition-colors duration-300">Community</Link>
        <Link href="#" className="hover:text-white/80 transition-colors duration-300">About</Link>
        <Link href="#" className="hover:text-white/80 transition-colors duration-300">Support</Link>
        <Link href="#" className="hover:text-white/80 transition-colors duration-300">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="hidden sm:block border border-white/50 px-8 md:px-12 py-[0.6rem] md:py-[0.8rem] rounded-[2px] text-[0.8rem] md:text-[0.85rem] font-medium text-white hover:bg-white/10 transition-all duration-300"
        >
          Register
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 bg-black/95 z-[60] flex flex-col items-center justify-center space-y-8"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <X size={32} />
          </button>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium">Community</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium">About</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium">Support</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium">Contact</Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-white text-2xl font-medium border border-white/40 px-10 py-3 rounded-sm">Register</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
