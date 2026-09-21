import React from "react";
import { BookOpen, Hammer, CheckCircle2, Rocket, RefreshCw, GraduationCap, MapPin, Target } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function About() {
  const stepIcons = [
    <BookOpen key="learn" className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />,
    <Hammer key="build" className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />,
    <CheckCircle2 key="test" className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />,
    <Rocket key="deploy" className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />,
    <RefreshCw key="improve" className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-10 sm:mb-14">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Bio text column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-8 rounded-2xl bg-surface-200/70 border border-white/[0.08] backdrop-blur-md space-y-4">
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                {personalData.aboutText}
              </p>

              <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>Based in {personalData.location}</span>
                </div>
                <div className="hidden sm:block text-gray-600">•</div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>BSc Computer Science (Expected 2027)</span>
                </div>
              </div>
            </div>

            {/* Career Objective Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-violet-950/20 border border-indigo-500/20 space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2 text-indigo-300 font-medium text-xs sm:text-sm">
                <Target className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>Primary Focus &amp; Objective</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {personalData.careerGoal}
              </p>
            </div>
          </div>

          {/* Learning Methodology Flow column */}
          <div className="lg:col-span-5 space-y-4 w-full">
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-200/60 border border-white/[0.08]">
              <div className="mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-white">
                  Continuous Learning Loop
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  How I approach every new technology, architecture, and project
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {personalData.learningEthos.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-surface-100/50 border border-white/[0.05] hover:border-indigo-500/30 transition-all duration-200"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-surface-300 flex items-center justify-center flex-shrink-0 border border-white/[0.08]">
                      {stepIcons[index]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-indigo-400">
                          {item.step}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-400 truncate">
                        {item.desc}
                      </p>
                    </div>
                    {index < personalData.learningEthos.length - 1 && (
                      <span className="text-xs font-mono text-gray-500 hidden sm:inline">
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
