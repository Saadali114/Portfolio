import React from "react";
import { Github, Check, AlertCircle, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/portfolioData";
import { ILDRVSVisual, BlockchainScholarshipVisual } from "./ProjectVisuals";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36 relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="space-y-3 mb-16 sm:mb-20 max-w-3xl">
          <span className="text-xs font-mono font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Flagship Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Real-world systems focusing on AI-assisted document intelligence, geospatial cadastral verification, and decentralized smart contract workflows.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="card-cinematic rounded-3xl p-5 sm:p-8 lg:p-10 relative group overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Visual Preview Column */}
                <div className="lg:col-span-6 order-2 lg:order-1 group-hover:scale-[1.01] transition-transform duration-300 w-full">
                  {project.id === "ildrvs" ? (
                    <ILDRVSVisual />
                  ) : (
                    <BlockchainScholarshipVisual />
                  )}
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                  {/* Badge & Title */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20">
                        {project.badge}
                      </span>
                      <span className="text-xs font-mono text-gray-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Problem & Solution Breakdown */}
                  <div className="grid grid-cols-1 gap-2.5 sm:gap-3 p-4 rounded-xl bg-[#08090f] border border-white/[0.05] text-xs sm:text-sm">
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

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                      Key Capabilities:
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
                      Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium text-gray-200 bg-[#06070a] border border-white/[0.07]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target={project.liveDemoUrl.startsWith("http") ? "_blank" : undefined}
                        rel={project.liveDemoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
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
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-gray-200 bg-[#0c0e15] hover:bg-[#141722] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200 text-center"
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
