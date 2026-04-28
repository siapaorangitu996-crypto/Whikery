"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Community", href: "#" },
    { name: "About", href: "#" },
    { name: "Support", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 lg:px-24 md:py-10"
    >
      <Link href="/" className="text-[1.4rem] md:text-[1.6rem] font-semibold text-white tracking-tight">
        Notosan
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-12 xl:space-x-16 text-[0.95rem] font-normal text-white/80">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-white transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="#"
          className="hidden sm:block border border-white/30 px-10 md:px-14 py-[0.7rem] rounded-[4px] text-[0.95rem] font-medium text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          Register
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black/95 z-[60] flex flex-col items-center justify-center space-y-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-white p-2"
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-light tracking-wide hover:text-white/70 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setIsOpen(false)}
              className="text-white text-xl font-medium border border-white/30 px-12 py-3 rounded-sm hover:bg-white hover:text-black transition-all"
            >
              Register
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
