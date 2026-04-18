import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LLMDocumentExtraction() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-600 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Soft Ambient Tint */}
      <div className="fixed -top-24 -right-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed -bottom-24 -left-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-zinc-900 text-xl font-bold tracking-tighter flex items-center gap-2">
            Wahyu Dwi Nugraha
          </Link>
          <Link href="/" className="text-[10px] font-black uppercase tracking-widest border border-zinc-900 px-6 py-2 rounded-full text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all">
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            Engineering Project 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-[1.1] mb-8">
            LLM-Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-emerald-600">
              Document Extraction
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-light italic">
            Developed and containerized a robust document verification microservice accelerating processing speeds by 10x.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">The Objective</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <p className="text-zinc-500 leading-relaxed font-light text-lg text-justify">
                Developed and containerized a robust document verification microservice powered by multimodal LLMs using Docker and Apache Airflow, accelerating processing speeds by 10x and minimizing verification errors. This approach achieves high extraction accuracy in zero-shot or few-shot scenarios, completely eliminating the reliance on traditional template-based methods.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">System Highlight</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <p className="text-zinc-500 leading-relaxed font-light text-lg text-justify">
              Architected an automated document extraction and synchronization pipeline centered on a Backend Orchestrator and managed by Apache Airflow. This design decouples the scheduled ingestion of raw company data from the intensive LLM-driven analysis and verification logic. By utilizing a cron-based scheduler to drive REST API interactions, the system ensures consistent throughput while the orchestrator enforces strict verification rules before data persistence. This separation of concerns optimizes PostgreSQL write-operations and maintains data integrity between the source system and the analytical layer, effectively reducing processing overhead and ensuring reliable end-to-end data synchronization.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">Workflow Visualization</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-200/50 p-4 md:p-8">
              <Image 
                src="/images/LLM_Document_Extraction/LLM_Docs_Extraction.png" 
                alt="LLM Document Extraction Workflow" 
                width={1200} 
                height={675} 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">Technical Features</h2>
                <div className="h-px flex-1 bg-zinc-200"></div>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "10x Performance", desc: "Significant acceleration in document processing speeds." },
                  { title: "Microservice Design", desc: "Containerized with Docker for robust deployment." },
                  { title: "Airflow Managed", desc: "Scheduled ingestion and automated sync pipelines." },
                  { title: "Error Minimization", desc: "Strict verification rules enforced by orchestrator." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">✓</span>
                    <div>
                      <span className="block text-zinc-900 font-bold text-sm uppercase tracking-wider">{item.title}</span>
                      <span className="text-zinc-500 font-light text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">Tech Stack</h2>
                <div className="h-px flex-1 bg-zinc-200"></div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Docker", "Apache Airflow", "Gemini API", "Python", "PostgreSQL"].map((tech, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white border border-zinc-200 text-zinc-500 text-xs font-medium">{tech}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-16 flex justify-between items-center text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase border-t border-zinc-200">
        <p>© 2026 Wahyu Dwi Nugraha</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
