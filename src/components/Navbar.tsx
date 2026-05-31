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
      <Link href="/" className="text-2xl font-serif font-bold text-white">
        Notosan
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-10 xl:space-x-14 text-[0.95rem] font-medium text-white/90">
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
        {/* Register Button (Desktop) */}
        <Link
          href="#"
          className="hidden md:block px-8 py-2.5 border border-white/40 text-white text-[0.9rem] font-medium hover:bg-white/10 transition-colors rounded-[2px]"
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
              aria-label="Close menu"
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
              className="mt-4 px-10 py-3 border border-white text-white text-xl font-light hover:bg-white/10 transition-colors"
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
