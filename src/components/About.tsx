import React from "react";
import { BookOpen, Hammer, CheckCircle2, Rocket, RefreshCw, GraduationCap, MapPin, Target, ArrowRight } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function About() {
  const stepIcons = [
    <BookOpen key="learn" className="w-4 h-4 text-indigo-400" />,
    <Hammer key="build" className="w-4 h-4 text-violet-400" />,
    <CheckCircle2 key="test" className="w-4 h-4 text-emerald-400" />,
    <Rocket key="deploy" className="w-4 h-4 text-cyan-400" />,
    <RefreshCw key="improve" className="w-4 h-4 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Editorial • Perspective
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {personalData.aboutHeading}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {personalData.aboutText}
          </p>
        </div>

        {/* Two-Column Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Background & Objective */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl card-cinematic space-y-4">
              <h3 className="text-lg font-semibold text-white tracking-tight flex items-center gap-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>Career Objective &amp; Approach</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {personalData.careerGoal}
              </p>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personalData.location}</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Expected Graduation 2027</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The 5-Step Engineering Loop */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl card-cinematic space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  The Engineering Cycle
                </h3>
                <span className="text-xs font-mono text-gray-500">Iterative Growth</span>
              </div>

              <div className="space-y-2.5 pt-2">
                {personalData.learningEthos.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#090b11] border border-white/[0.04] hover:border-indigo-500/25 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#111420] flex items-center justify-center flex-shrink-0 border border-white/[0.06]">
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
                      <span className="text-xs font-mono text-gray-600 hidden sm:inline">
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
