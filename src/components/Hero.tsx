import React from "react";
import { ArrowDown, Github, Terminal, Sparkles, MapPin, Code2 } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] sm:h-[350px] bg-indigo-600/15 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[300px] h-[180px] sm:h-[250px] bg-violet-600/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Hero text column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Top pill badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for internships &amp; roles</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-gray-400 bg-white/[0.04] border border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalData.location}</span>
              </span>
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-base sm:text-lg md:text-xl font-medium text-indigo-300 flex items-center gap-2">
                <span>{personalData.greeting}</span>
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight sm:leading-[1.15]">
                Building Software. <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-indigo-100 to-violet-300">
                  Learning Every Day.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {personalData.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-200 transform sm:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-center"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalData.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm sm:text-base text-gray-200 bg-surface-100/90 hover:bg-surface-50 border border-white/10 hover:border-indigo-500/40 shadow-sm transition-all duration-200 transform sm:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-center"
              >
                <Github className="w-4 h-4 text-gray-300" />
                <span>GitHub</span>
              </a>
            </div>

            {/* Mini Quick Highlights */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Next.js &amp; TypeScript
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Full-Stack Architecture
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                AI &amp; Vision Integration
              </span>
            </div>
          </div>

          {/* Developer Visual Element / Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group w-full">
              {/* Outer decorative halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-2xl blur-xl group-hover:blur-2xl opacity-75 transition-all duration-500" />

              {/* Code/Terminal Card */}
              <div className="relative rounded-2xl bg-[#0d0f17] border border-white/10 shadow-2xl overflow-hidden w-full">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#131722] border-b border-white/[0.08]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-400 font-mono truncate max-w-[180px] sm:max-w-none">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span className="truncate">developer@saad-ali:~</span>
                  </div>
                  <div className="w-4 sm:w-8" />
                </div>

                {/* Terminal Code Body */}
                <div className="p-3.5 sm:p-5 font-mono text-[11px] sm:text-xs md:text-[13px] leading-relaxed text-gray-300 space-y-2.5 sm:space-y-3 overflow-x-auto">
                  <div className="text-gray-500">
                    // Student &amp; Builder Profile
                  </div>
                  <div>
                    <span className="code-syntax-keyword">const</span>{" "}
                    <span className="code-syntax-func">developer</span> = &#123;
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-gray-400">name:</span>{" "}
                    <span className="code-syntax-string">&quot;Saad Ali&quot;</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-gray-400">education:</span>{" "}
                    <span className="code-syntax-string">&quot;BSc Computer Science (2027)&quot;</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-gray-400">location:</span>{" "}
                    <span className="code-syntax-string">&quot;Mumbai, India&quot;</span>,
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-gray-400">currentFocus:</span> [
                    <div className="pl-3 sm:pl-4 text-emerald-400">
                      &quot;Full-Stack Web Applications&quot;,
                    </div>
                    <div className="pl-3 sm:pl-4 text-emerald-400">
                      &quot;AI Document Processing &amp; OCR&quot;,
                    </div>
                    <div className="pl-3 sm:pl-4 text-emerald-400">
                      &quot;Decentralized Systems&quot;
                    </div>
                    ],
                  </div>
                  <div className="pl-3 sm:pl-4">
                    <span className="text-gray-400">learningMindset:</span>{" "}
                    <span className="code-syntax-string break-all sm:break-normal">
                      &quot;Learn → Build → Test → Deploy → Improve&quot;
                    </span>
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-1.5 text-indigo-400 flex items-center gap-2">
                    <span className="text-gray-500">&gt;</span>
                    <span className="truncate">Ready to collaborate &amp; learn.</span>
                    <span className="w-1.5 h-3.5 bg-indigo-400 animate-pulse flex-shrink-0" />
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="px-3.5 sm:px-4 py-2 bg-[#090b10] border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-indigo-400" />
                    <span>TypeScript 5.x</span>
                  </span>
                  <span className="text-emerald-400">● Live Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
