import React from "react";
import { Github, ExternalLink, Sparkles, Check, AlertCircle, Cpu, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { ILDRVSVisual, BlockchainScholarshipVisual } from "./ProjectVisuals";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-2 mb-10 sm:mb-16">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Flagship Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mt-1">
            Real-world software systems focusing on full-stack architecture, AI-powered document intelligence, and decentralized workflows.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-1" />
        </div>

        {/* Project Cards List */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="card-glow rounded-2xl sm:rounded-3xl bg-[#0e101a] border border-white/[0.08] p-4 sm:p-7 lg:p-10 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle ambient accent glow behind card */}
              <div
                className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[140px] pointer-events-none -z-0 opacity-20 ${
                  idx === 0 ? "bg-indigo-600" : "bg-violet-600"
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
                {/* Visual / Screenshot mockup column */}
                <div className="lg:col-span-6 order-2 lg:order-1 group-hover:scale-[1.01] transition-transform duration-300 w-full">
                  {project.id === "ildrvs" ? (
                    <ILDRVSVisual />
                  ) : (
                    <BlockchainScholarshipVisual />
                  )}
                </div>

                {/* Content column */}
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 sm:space-y-6">
                  {/* Badge & Title */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 sm:px-3 py-1 rounded-md text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-gray-500">
                        Project 0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Problem & Solution breakdown */}
                  <div className="grid grid-cols-1 gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-xl bg-surface-100/60 border border-white/[0.05] text-xs sm:text-sm">
                    <div className="space-y-1">
                      <div className="font-semibold text-rose-400/90 flex items-center gap-1.5 text-xs sm:text-sm">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Problem:</span>
                      </div>
                      <p className="text-gray-300 pl-5 leading-relaxed text-xs">
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-1 pt-2 border-t border-white/[0.04]">
                      <div className="font-semibold text-emerald-400 flex items-center gap-1.5 text-xs sm:text-sm">
                        <Check className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Solution:</span>
                      </div>
                      <p className="text-gray-300 pl-5 leading-relaxed text-xs">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlight Features */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                      Key Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                      Technologies Used:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium text-gray-200 bg-surface-200 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all duration-200 text-center"
                        title={
                          project.isPlaceholderDemo
                            ? "Demo concept preview placeholder"
                            : "Launch Live Demo"
                        }
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-gray-200 bg-surface-100 hover:bg-surface-50 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200 text-center"
                    >
                      <Github className="w-4 h-4 text-gray-300" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
