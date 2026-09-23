"use client";

import React, { useState, useEffect } from "react";
import { Github, Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Learning", href: "#learning" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "learning", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080b]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-xl shadow-black/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg p-1"
            aria-label="Saad Ali Homepage"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="font-semibold text-base sm:text-lg tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              {personalData.name}
            </span>
            <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded">
              dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#0c0e15]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    isActive
                      ? "text-white bg-white/[0.08] shadow-sm shadow-white/5"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action / GitHub button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-gray-300 bg-[#0c0e15] hover:bg-[#141722] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-label="Saad Ali GitHub Profile"
            >
              <Github className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-1 sm:gap-2 md:hidden">
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[40px] min-h-[40px] flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors"
              aria-label="Saad Ali GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop & Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 bg-black/70 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-50 bg-[#080a10] border-b border-white/[0.1] px-4 pt-3 pb-6 space-y-1 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-white/[0.06] active:bg-indigo-600/20 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-white/[0.08]">
              <a
                href={personalData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
