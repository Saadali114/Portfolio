import React from "react";
import { CheckCircle, ShieldCheck, MapPin, Scan, Cpu, Layers, Database } from "lucide-react";

export function ILDRVSVisual() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#090b11] rounded-2xl border border-white/[0.07] p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden relative select-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-ambient-grid opacity-30 pointer-events-none" />

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] relative z-10">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 flex-shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 flex-shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 flex-shrink-0" />
          <span className="text-[11px] font-mono text-gray-400 ml-1.5 truncate">
            ILDRVS://document-analyzer/v1.2
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
          <CheckCircle className="w-3 h-3" />
          <span>OCR Verified</span>
        </div>
      </div>

      {/* Main Visual Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 relative z-10">
        {/* Left: Document Scan with OCR Bounding Box */}
        <div className="p-3 rounded-xl bg-[#0e111a] border border-white/[0.05] space-y-2">
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
            <span className="flex items-center gap-1.5 truncate">
              <Scan className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
              <span className="truncate">Historical Archive Scan</span>
            </span>
            <span className="text-indigo-400 text-[10px]">Multilingual</span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#06070a] border border-indigo-500/25 font-mono text-[10px] space-y-1.5 text-gray-300">
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Record ID:</span>
              <span className="text-white font-medium">LR-MUM-884</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Survey No:</span>
              <span className="text-indigo-300 truncate max-w-[110px]">Plot 142/B-Zone 4</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">OCR Conf:</span>
              <span className="text-emerald-400">98.4% Acc.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">GIS Sync:</span>
              <span className="text-cyan-400">Cadastral OK</span>
            </div>
          </div>
        </div>

        {/* Right: Validation & Digital Record */}
        <div className="p-3 rounded-xl bg-[#0e111a] border border-white/[0.05] flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
            <span className="flex items-center gap-1.5 truncate">
              <Cpu className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
              <span>Pipeline Stage</span>
            </span>
            <span className="text-emerald-400 text-[10px]">Active</span>
          </div>

          <div className="space-y-1 text-[10px] font-mono">
            <div className="flex items-center justify-between p-1.5 rounded-md bg-[#06070a] border border-white/[0.04]">
              <span className="text-gray-400 truncate">AI Document Parsing</span>
              <span className="text-emerald-400 flex-shrink-0">Done</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-[#06070a] border border-white/[0.04]">
              <span className="text-gray-400 truncate">Government Comparison</span>
              <span className="text-emerald-400 flex-shrink-0">Matched</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-[#06070a] border border-white/[0.04]">
              <span className="text-gray-400 truncate">PostgreSQL / Prisma</span>
              <span className="text-cyan-400 flex-shrink-0">Structured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400 relative z-10">
        <span className="flex items-center gap-1.5 truncate">
          <MapPin className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
          <span className="truncate">GIS Reference Coordinate Layer</span>
        </span>
        <span className="text-indigo-400 flex-shrink-0 ml-2">Structured Record</span>
      </div>
    </div>
  );
}

export function BlockchainScholarshipVisual() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[#090b11] rounded-2xl border border-white/[0.07] p-3.5 sm:p-5 flex flex-col justify-between overflow-hidden relative select-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-ambient-grid opacity-30 pointer-events-none" />

      {/* Top Bar Mockup */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] relative z-10">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 flex-shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 flex-shrink-0" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 flex-shrink-0" />
          <span className="text-[11px] font-mono text-gray-400 ml-1.5 truncate">
            dApp://scholarship-contract.eth
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20 flex-shrink-0">
          <ShieldCheck className="w-3 h-3" />
          <span>Contract Signed</span>
        </div>
      </div>

      {/* Main Visual Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3 relative z-10">
        {/* Left: Role Authentication */}
        <div className="p-3 rounded-xl bg-[#0e111a] border border-white/[0.05] space-y-2">
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
            <span>Role Authentication</span>
            <span className="text-indigo-400 text-[10px]">User / Admin</span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#06070a] border border-violet-500/25 font-mono text-[10px] space-y-1.5 text-gray-300">
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Applicant:</span>
              <span className="text-white font-medium">0x71C...49A2</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Scholarship:</span>
              <span className="text-violet-300 truncate max-w-[110px]">Merit-CS-2024</span>
            </div>
            <div className="flex justify-between border-b border-white/[0.04] pb-1">
              <span className="text-gray-500">Status:</span>
              <span className="text-emerald-400">Criteria Met</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tx Hash:</span>
              <span className="text-cyan-400 truncate max-w-[100px]">0x8f4d92a1...</span>
            </div>
          </div>
        </div>

        {/* Right: Blockchain Ledger Flow */}
        <div className="p-3 rounded-xl bg-[#0e111a] border border-white/[0.05] flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between text-[11px] text-gray-400 font-mono">
            <span className="flex items-center gap-1.5 truncate">
              <Layers className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
              <span>Audit Trail</span>
            </span>
            <span className="text-emerald-400 text-[10px]">Hardhat &amp; Solidity</span>
          </div>

          <div className="space-y-1 text-[10px] font-mono">
            <div className="flex items-center justify-between p-1.5 rounded-md bg-[#06070a] border border-white/[0.04]">
              <span className="text-gray-400 truncate">Document Hash</span>
              <span className="text-emerald-400 flex-shrink-0">Verified</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-[#06070a] border border-white/[0.04]">
              <span className="text-gray-400 truncate">Disbursement State</span>
              <span className="text-indigo-400 flex-shrink-0">Transparent</span>
            </div>
            <div className="flex items-center justify-between p-1.5 rounded-md bg-[#06070a] border border-white/[0.04]">
              <span className="text-gray-400 truncate">MongoDB Sync</span>
              <span className="text-cyan-400 flex-shrink-0">Synchronized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status bar */}
      <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400 relative z-10">
        <span className="flex items-center gap-1.5 truncate">
          <Database className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
          <span className="truncate">Decentralized Verification Protocol</span>
        </span>
        <span className="text-emerald-400 flex-shrink-0 ml-2">Zero Tampering</span>
      </div>
    </div>
  );
}
