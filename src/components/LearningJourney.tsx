import React from "react";
import { CheckCircle2, Compass, ArrowRight, Milestone } from "lucide-react";
import { learningMilestones } from "@/data/portfolioData";

export default function LearningJourney() {
  return (
    <section id="learning" className="py-16 sm:py-24 lg:py-28 relative bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-10 sm:mb-14">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Continuous Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            My Learning Journey
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-1">
            I continuously learn by researching core principles, experimenting with architectures, and building real-world projects. This timeline traces my technical milestones and active areas of exploration.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-1" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/[0.1] ml-3 sm:ml-6 pl-5 sm:pl-8 space-y-8 sm:space-y-10">
          {learningMilestones.map((milestone) => {
            const isExploring = milestone.status === "exploring";
            return (
              <div key={milestone.phase} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border ${
                    isExploring
                      ? "bg-violet-950/90 border-violet-400 text-violet-300 ring-4 ring-violet-500/10"
                      : "bg-surface-200 border-indigo-500/40 text-indigo-400"
                  }`}
                >
                  {isExploring ? (
                    <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  )}
                </div>

                {/* Milestone Card */}
                <div className="p-4 sm:p-6 rounded-2xl bg-surface-200/80 border border-white/[0.08] group-hover:border-indigo-500/30 transition-all duration-200 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-indigo-400">
                        {milestone.phase}
                      </span>
                      <span className="text-gray-600">•</span>
                      <h3 className="text-base sm:text-lg font-semibold text-white">
                        {milestone.title}
                      </h3>
                    </div>

                    <span
                      className={`inline-block self-start sm:self-auto px-2.5 py-0.5 rounded-full text-[11px] font-mono ${
                        isExploring
                          ? "bg-violet-500/10 text-violet-300 border border-violet-500/20"
                          : "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      }`}
                    >
                      {isExploring ? "Active Exploration" : "Core Competency"}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400">
                    {milestone.description}
                  </p>

                  {/* Technology Progression Chain */}
                  <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {milestone.items.map((item, itemIdx) => (
                      <React.Fragment key={item}>
                        <span className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium text-gray-200 bg-surface-100 border border-white/[0.08]">
                          {item}
                        </span>
                        {itemIdx < milestone.items.length - 1 && (
                          <ArrowRight className="w-3 h-3 text-gray-500 hidden xs:inline" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on transparency */}
        <div className="mt-10 sm:mt-12 p-3.5 sm:p-4 rounded-xl bg-surface-100/40 border border-white/[0.06] text-xs text-gray-400 max-w-2xl flex items-start sm:items-center gap-2.5 sm:gap-3">
          <Milestone className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <span>
            <strong>Engineering Philosophy:</strong> This timeline reflects my genuine technical path and topics currently under study, not exaggerated claims of industry senior expertise.
          </span>
        </div>
      </div>
    </section>
  );
}
