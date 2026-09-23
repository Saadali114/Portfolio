import React from "react";
import { Layout, Server, Database, Wrench, Cpu, Compass } from "lucide-react";
import { skillsData } from "@/data/portfolioData";

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Layout className="w-4 h-4 text-indigo-400" />;
      case "Backend":
        return <Server className="w-4 h-4 text-violet-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-cyan-400" />;
      case "Tools":
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case "AI / Computer Vision":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "Other Technologies":
        return <Compass className="w-4 h-4 text-sky-400" />;
      default:
        return <Layout className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 lg:py-36 relative border-t border-white/[0.04] bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-14 sm:mb-16 max-w-2xl">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Stack • Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Technical Arsenal
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
            Technologies and frameworks applied across full-stack architectures, document processing pipelines, and data systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="p-5 sm:p-6 rounded-2xl card-cinematic flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#111420] flex items-center justify-center border border-white/[0.06] group-hover:scale-105 transition-transform duration-200 flex-shrink-0">
                    {getCategoryIcon(category.category)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {category.category}
                    </h3>
                    <p className="text-xs text-gray-400 font-normal line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Badges / Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-medium font-mono text-gray-300 bg-[#090b11] border border-white/[0.07] group-hover:border-indigo-500/25 transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>{category.skills.length} tools</span>
                <span className="text-indigo-400/70">Verified Working Stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
