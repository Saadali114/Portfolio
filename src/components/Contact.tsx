"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-10 sm:mb-14">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mt-1">
            I&apos;m always interested in learning, building, and connecting with other developers.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Email quick action card */}
          <div className="lg:col-span-7 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-surface-200/90 border border-white/[0.08] backdrop-blur-md space-y-5 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Send a Message or Inquire
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Reach out for software engineering opportunities, internships, or technical collaboration.
              </p>
            </div>

            {/* Email Box with Copy & Send */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-surface-100/80 border border-white/[0.06] space-y-3">
              <span className="text-xs font-mono text-gray-400">
                Primary Contact Address:
              </span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-lg bg-[#090a0f] border border-white/[0.08]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-gray-200 truncate break-all">
                    {personalData.links.email}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-md text-xs font-medium text-gray-300 bg-white/[0.06] hover:bg-white/[0.1] hover:text-white active:bg-white/[0.15] transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-mono">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalData.links.email}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-md text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 font-mono">
                * Configurable placeholder in portfolio data file for easy customization.
              </p>
            </div>

            {/* Quick response pledge */}
            <div className="flex items-center gap-2.5 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>Available for internships, project discussions, and technical networking.</span>
            </div>
          </div>

          {/* Social Channels column */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Professional Links
            </h3>

            {/* GitHub Card */}
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface-200/70 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-surface-100 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center text-gray-300 group-hover:text-white border border-white/[0.06] flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                    GitHub
                  </h4>
                  <p className="text-xs text-gray-400 truncate">
                    Explore repositories &amp; projects
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-all flex-shrink-0 ml-2" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalData.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-surface-200/70 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-surface-100 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center text-gray-300 group-hover:text-white border border-white/[0.06] flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                      LinkedIn
                    </h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.05] text-gray-400 flex-shrink-0">
                      Placeholder
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">
                    Connect professionally
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-all flex-shrink-0 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
