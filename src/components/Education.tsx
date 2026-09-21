import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section className="py-14 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-8 sm:mb-10">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-1" />
        </div>

        {/* Clean Education Card */}
        <div className="max-w-3xl rounded-2xl bg-surface-200/80 border border-white/[0.08] p-5 sm:p-8 hover:border-indigo-500/30 transition-all duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {personalData.education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 sm:gap-x-4 text-xs sm:text-sm text-gray-400 mt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span>{personalData.education.location}</span>
                  </span>
                  <span className="hidden sm:inline text-gray-600">•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                    <span>Expected Graduation: {personalData.education.expectedGraduation}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Status badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalData.education.status}</span>
            </span>
          </div>

          <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/[0.06] text-xs sm:text-sm text-gray-400 leading-relaxed">
            Focused on core computer science foundations, algorithms, full-stack web architectures, and real-world system implementations.
          </div>
        </div>
      </div>
    </section>
  );
}
