"use client";

import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { personalData, contactSectionData } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-4 mb-16 sm:mb-20 max-w-2xl">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Inquiries • Collaboration
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {contactSectionData.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {contactSectionData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Email Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl card-cinematic space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-normal">
                Open to software engineering internships, technical collaborations, and project discussions.
              </p>
            </div>

            {/* Email Box with Copy & Send */}
            <div className="p-4 rounded-xl bg-[#07080b] border border-white/[0.05] space-y-3">
              <span className="text-xs font-mono text-gray-400">
                Primary Contact:
              </span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-3 rounded-lg bg-[#0c0e15] border border-white/[0.06]">
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
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2.5 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>Actively available for internships and software engineering roles.</span>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
              Connected Networks
            </h3>

            {/* GitHub Card */}
            <a
              href={personalData.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 sm:p-5 rounded-2xl card-cinematic group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#111420] flex items-center justify-center text-gray-300 group-hover:text-white border border-white/[0.06] flex-shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                    GitHub
                  </h4>
                  <p className="text-xs text-gray-400 truncate">
                    Source repositories &amp; open source code
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
              className="flex items-center justify-between p-4 sm:p-5 rounded-2xl card-cinematic group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[#111420] flex items-center justify-center text-gray-300 group-hover:text-white border border-white/[0.06] flex-shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors truncate">
                      LinkedIn
                    </h4>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex-shrink-0">
                      Connect
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate">
                    Professional profile &amp; network
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
