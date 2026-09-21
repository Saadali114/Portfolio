import React from "react";
import { FileText, CheckCircle, Database, ShieldCheck, MapPin, Scan, Cpu, Layers } from "lucide-react";

export function ILDRVSVisual() {
  return (
    <div className="w-full h-full min-h-[250px] sm:min-h-[290px] bg-[#0c0f18] rounded-2xl border border-white/[0.08] p-3 sm:p-4 flex flex-col justify-between overflow-hidden relative select-none">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500/80 flex-shrink-0" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80 flex-shrink-0" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80 flex-shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 ml-1 truncate">
            ILDRVS://document-analyzer
          </span>
        </div>
        <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
          <CheckCircle className="w-3 h-3" />
          <span>Verified</span>
        </div>
      </div>

      {/* Main Visual Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-2.5 sm:my-3 relative z-10">
        {/* Left: Document Scan with OCR Bounding Box */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-[#121624] border border-white/[0.06] space-y-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 font-mono">
            <span className="flex items-center gap-1 truncate">
              <Scan className="w-3 h-3 text-indigo-400 flex-shrink-0" />
              <span className="truncate">Land Record Scan</span>
            </span>
            <span className="text-indigo-400 text-[10px]">Multilingual</span>
          </div>

          <div className="p-2 rounded bg-[#0a0d15] border border-indigo-500/30 font-mono text-[9px] sm:text-[10px] space-y-1 sm:space-y-1.5 text-gray-300">
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Record ID:</span>
              <span className="text-white font-medium">LR-MUM-884</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Survey No:</span>
              <span className="text-indigo-300 truncate max-w-[110px]">Plot 142/B</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">OCR Conf:</span>
              <span className="text-emerald-400">98.4% Acc.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">GIS Sync:</span>
              <span className="text-cyan-400">Matched</span>
            </div>
          </div>
        </div>

        {/* Right: Validation & Digital Record */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-[#121624] border border-white/[0.06] flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 font-mono">
            <span className="flex items-center gap-1 truncate">
              <Cpu className="w-3 h-3 text-violet-400 flex-shrink-0" />
              <span>Pipeline</span>
            </span>
            <span className="text-emerald-400 text-[10px]">Live</span>
          </div>

          <div className="space-y-1 text-[9px] sm:text-[10px] font-mono">
            <div className="flex items-center justify-between p-1.5 rounded bg-[#0a0d15] border border-white/[0.04]">
              <span className="text-gray-400 truncate">OCR Extraction</span>
              <span className="text-emerald-400 flex-shrink-0">Done</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-[#0a0d15] border border-white/[0.04]">
              <span className="text-gray-400 truncate">Gov Comparison</span>
              <span className="text-emerald-400 flex-shrink-0">Verified</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-[#0a0d15] border border-white/[0.04]">
              <span className="text-gray-400 truncate">PostgreSQL Sync</span>
              <span className="text-cyan-400 flex-shrink-0">Structured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400 relative z-10">
        <span className="flex items-center gap-1.5 truncate">
          <MapPin className="w-3 h-3 text-indigo-400 flex-shrink-0" />
          <span className="truncate">GIS Reference Layer</span>
        </span>
        <span className="text-indigo-400 flex-shrink-0 ml-2">Structured Record</span>
      </div>
    </div>
  );
}

export function BlockchainScholarshipVisual() {
  return (
    <div className="w-full h-full min-h-[250px] sm:min-h-[290px] bg-[#0c0f18] rounded-2xl border border-white/[0.08] p-3 sm:p-4 flex flex-col justify-between overflow-hidden relative select-none">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/[0.08] relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500/80 flex-shrink-0" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80 flex-shrink-0" />
          <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80 flex-shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono text-gray-400 ml-1 truncate">
            dApp://scholarship.eth
          </span>
        </div>
        <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20 flex-shrink-0">
          <ShieldCheck className="w-3 h-3" />
          <span>Validated</span>
        </div>
      </div>

      {/* Main Visual Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-2.5 sm:my-3 relative z-10">
        {/* Left: Student & Verification Role */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-[#121624] border border-white/[0.06] space-y-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 font-mono">
            <span>Role Auth</span>
            <span className="text-indigo-400 text-[10px]">Admin / User</span>
          </div>

          <div className="p-2 rounded bg-[#0a0d15] border border-violet-500/30 font-mono text-[9px] sm:text-[10px] space-y-1 sm:space-y-1.5 text-gray-300">
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Applicant:</span>
              <span className="text-white font-medium">0x71C...49A2</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Grant:</span>
              <span className="text-violet-300 truncate max-w-[110px]">Merit-CS-24</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">State:</span>
              <span className="text-emerald-400">Criteria Met</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tx:</span>
              <span className="text-cyan-400 truncate max-w-[95px]">0x8f4d92a1...</span>
            </div>
          </div>
        </div>

        {/* Right: Blockchain Ledger Flow */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-[#121624] border border-white/[0.06] flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-gray-400 font-mono">
            <span className="flex items-center gap-1 truncate">
              <Layers className="w-3 h-3 text-violet-400 flex-shrink-0" />
              <span>Smart Contract</span>
            </span>
            <span className="text-emerald-400 text-[10px]">Solidity</span>
          </div>

          <div className="space-y-1 text-[9px] sm:text-[10px] font-mono">
            <div className="flex items-center justify-between p-1.5 rounded bg-[#0a0d15] border border-white/[0.04]">
              <span className="text-gray-400 truncate">Doc Hash</span>
              <span className="text-emerald-400 flex-shrink-0">Verified</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-[#0a0d15] border border-white/[0.04]">
              <span className="text-gray-400 truncate">Disbursement</span>
              <span className="text-indigo-400 flex-shrink-0">Transparent</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded bg-[#0a0d15] border border-white/[0.04]">
              <span className="text-gray-400 truncate">MongoDB Cache</span>
              <span className="text-cyan-400 flex-shrink-0">Synced</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-400 relative z-10">
        <span className="flex items-center gap-1.5 truncate">
          <Database className="w-3 h-3 text-violet-400 flex-shrink-0" />
          <span className="truncate">Decentralized Protocol</span>
        </span>
        <span className="text-emerald-400 flex-shrink-0 ml-2">Audit Verified</span>
      </div>
    </div>
  );
}
