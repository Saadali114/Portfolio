import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-10 sm:mb-12 max-w-xl">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Academics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Education
          </h2>
        </div>

        {/* Clean Editorial Education Card */}
        <div className="max-w-3xl rounded-2xl card-cinematic p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {personalData.education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-y-1 gap-x-3 sm:gap-x-4 text-xs sm:text-sm text-gray-400 font-mono">
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

            {/* Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-auto flex-shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalData.education.status}</span>
            </span>
          </div>

          <div className="mt-5 pt-5 border-t border-white/[0.05] text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
            Grounded in core theoretical computer science, algorithmic foundations, database systems, and full-stack software development.
          </div>
        </div>
      </div>
    </section>
  );
}
