import React from "react";
import { Github, Linkedin, ArrowUp, Terminal } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#07080b] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copy */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white flex-shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white tracking-tight">
                © 2026 {personalData.name}
              </p>
              <p className="text-xs text-gray-400 font-mono">
                Built with Next.js &amp; Tailwind CSS
              </p>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[40px] min-h-[40px] rounded-lg bg-[#0c0e15] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#151926] border border-white/[0.06] transition-colors"
              aria-label="Saad Ali GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[40px] min-h-[40px] rounded-lg bg-[#0c0e15] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#151926] border border-white/[0.06] transition-colors"
              aria-label="Saad Ali LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="#home"
              className="min-h-[40px] flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] border border-white/[0.06] transition-colors"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
