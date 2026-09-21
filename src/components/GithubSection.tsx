import React from "react";
import { Github, GitCommit, GitBranch, ArrowUpRight, Code, Sparkles } from "lucide-react";
import { personalData, codingShowcase } from "@/data/portfolioData";

export default function GithubSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#111422] to-[#0d0f19] border border-white/[0.08] p-5 sm:p-10 lg:p-16 overflow-hidden">
          {/* Subtle background blur accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
                <Code className="w-3.5 h-3.5" />
                <span>Open Source &amp; Public Repositories</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {codingShowcase.title}
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
                {codingShowcase.subtitle}
              </p>

              <div className="pt-2">
                <a
                  href={personalData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-all duration-200 group text-center"
                  aria-label="Explore Saad Ali's GitHub repositories"
                >
                  <Github className="w-5 h-5" />
                  <span>Explore My GitHub</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick stats / dev highlights */}
            <div className="lg:col-span-4 space-y-2.5 sm:space-y-3 w-full">
              {codingShowcase.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-3.5 sm:p-4 rounded-xl bg-surface-100/60 border border-white/[0.06] flex items-center justify-between"
                >
                  <span className="text-xs text-gray-400 font-mono">
                    {stat.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {stat.value}
                  </span>
                </div>
              ))}

              <div className="p-3.5 sm:p-4 rounded-xl bg-surface-100/30 border border-white/[0.04] text-xs text-gray-400 flex items-center gap-2 overflow-hidden">
                <GitBranch className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span className="font-mono truncate">
                  Saadali114 / Portfolio @ main
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
