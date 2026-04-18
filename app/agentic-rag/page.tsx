import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AgenticRAG() {
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
            Research Project 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-[1.1] mb-8">
            Agentic RAG for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-emerald-600">
              Enterprise Knowledge Base
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-light italic">
            Building advanced Retrieval-Augmented Generation systems with autonomous reasoning and self-correction capabilities.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">The Objective</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <p className="text-zinc-500 leading-relaxed font-light text-lg">
              This research aims to build an advanced Retrieval-Augmented Generation (RAG) system using an agentic approach. Unlike traditional RAG, Agentic RAG can reason about the retrieval process, decide when to search, evaluate the relevance of retrieved documents, and even perform multi-step reasoning to provide more accurate and context-aware answers.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">System Architecture</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <p className="text-zinc-500 leading-relaxed font-light mb-12">
              The architecture involves an LLM-based agent that orchestrates various tools including vector databases, search engines, and document processors. The agent uses a feedback loop to refine its search queries and validate the answers against the source documents.
            </p>
            <div className="rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-200/50 p-4 md:p-8">
              <Image 
                src="/images/Agentic_RAG/Agentic_RAG.png" 
                alt="Agentic RAG Architecture" 
                width={1200} 
                height={675} 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">Key Features</h2>
                <div className="h-px flex-1 bg-zinc-200"></div>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Self-Correction", desc: "Agent can identify insufficient retrieval and re-query." },
                  { title: "Multi-Source", desc: "Integrates PDFs, markdown, and live web sources." },
                  { title: "Reasoning Loops", desc: "Uses Chain-of-Thought for complex query handling." }
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
                {["LangGraph", "LlamaIndex", "Pinecone", "GPT-4o", "Python", "FastAPI"].map((tech, i) => (
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
