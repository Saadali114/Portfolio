import React from "react";
import { Layout, Server, Database, Wrench, Cpu, Check } from "lucide-react";
import { skillsData } from "@/data/portfolioData";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case "Backend":
        return <Server className="w-5 h-5 text-violet-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "Tools":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case "AI / Other":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Check className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 relative bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-10 sm:mb-14">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills & Technologies
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-1">
            Technologies I use to build robust, modern web systems, explore AI solutions, and solve engineering challenges.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-1" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="p-4 sm:p-6 rounded-2xl bg-surface-200/80 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-100 flex items-center justify-center border border-white/[0.06] group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                    {getCategoryIcon(category.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      {category.category}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Badges / Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium font-mono text-gray-200 bg-surface-100/90 border border-white/[0.08] hover:border-indigo-400/40 hover:text-white hover:bg-indigo-950/20 transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>{category.skills.length} core technologies</span>
                <span className="text-indigo-400/80">Active Stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
