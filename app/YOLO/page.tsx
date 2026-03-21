import React from 'react';

export default function ResearchCaseStudy() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-zinc-800 font-sans selection:bg-emerald-50">
      
      {/* Top Navigation - Minimalist */}
      <nav className="max-w-3xl mx-auto px-6 h-24 flex items-center border-b border-zinc-100">
        <a href="/" className="text-xs font-bold tracking-widest uppercase text-zinc-400 hover:text-emerald-600 transition-colors">
          ← Back to Index
        </a>
      </nav>
      <p></p>

      <article className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="mb-16">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-600 mb-4">
            Research & Development / 2024
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight mb-6">
            Optimizing Transformer Efficiency for Low-Latency Edge Inference
          </h1>
          <p className="text-xl text-zinc-500 font-light leading-relaxed italic">
            Object detection with YOLO model to detect objects in restricted area using thermal camera (low light).
          </p>
        </header>

        {/* Abstract / Summary Card */}
        <section className="p-8 bg-zinc-50 border border-zinc-100 rounded-2xl mb-16">
          <h2 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Abstract</h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            Project ini mengeksplorasi metodologi untuk mengurangi ukuran model Transformer hingga 4x lipat tanpa mengorbankan akurasi secara signifikan ( &lt; 1% drop). Fokus utama adalah implementasi Knowledge Distillation pada arsitektur BERT-based untuk dijalankan pada perangkat dengan memory terbatas seperti ARM-based IoT devices.
          </p>
        </section>

        {/* Methodology Content */}
        <div className="space-y-16">
          
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">01. Problem Statement</h3>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Model bahasa modern saat ini terlalu besar untuk dijalankan secara lokal pada perangkat *edge*. Ketergantungan pada Cloud API menyebabkan latensi tinggi dan masalah privasi data bagi pengguna akhir.
            </p>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">02. Methodology</h3>
            <p className="text-zinc-600 leading-relaxed mb-6">
              Pendekatan yang diambil melibatkan tiga fase utama dalam siklus pengembangan model:
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="font-bold text-emerald-600">A.</span>
                <div>
                  <span className="font-bold text-zinc-900 block mb-1">Task-Specific Distillation</span>
                  <p className="text-sm text-zinc-500">Menggunakan model "Teacher" (RoBERTa-Large) untuk melatih model "Student" yang lebih kecil dengan 6 layer.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-emerald-600">B.</span>
                <div>
                  <span className="font-bold text-zinc-900 block mb-1">INT8 Quantization</span>
                  <p className="text-sm text-zinc-500">Konversi bobot model dari FP32 ke INT8 untuk mempercepat komputasi pada hardware CPU.</p>
                </div>
              </li>
            </ul>
          </section>

          {/* Visualization Placeholder / Figure */}
          <section className="py-8">
            <div className="aspect-video bg-zinc-100 rounded-xl border border-zinc-200 flex flex-col items-center justify-center p-10 text-center">
               <div className="w-full h-px bg-zinc-200 mb-4 relative">
                  <div className="absolute -top-1 left-1/4 w-3 h-3 bg-emerald-500 rounded-full"></div>
                  <div className="absolute -top-1 left-1/2 w-3 h-3 bg-emerald-300 rounded-full"></div>
                  <div className="absolute -top-1 left-3/4 w-3 h-3 bg-zinc-400 rounded-full"></div>
               </div>
               <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-4">
                 Figure 1: Comparison of Latency vs. Model Parameters
               </span>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">03. Key Findings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-emerald-500 pl-6">
                <div className="text-2xl font-bold text-zinc-900 mb-1">75%</div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Reduction in Model Size</p>
              </div>
              <div className="border-l-2 border-emerald-500 pl-6">
                <div className="text-2xl font-bold text-zinc-900 mb-1">12ms</div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">Average Inference Time</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 mb-6">04. Implementation</h3>
            <div className="flex flex-wrap gap-2 mb-10">
              {["PyTorch", "ONNX Runtime", "TensorRT", "HuggingFace Optimum"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white border border-zinc-200 rounded text-[11px] font-medium text-zinc-600">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-bold text-zinc-900 underline decoration-emerald-500/30 underline-offset-4 hover:text-emerald-600 transition-colors">
                View Repository
              </a>
              <a href="#" className="text-sm font-bold text-zinc-900 underline decoration-emerald-500/30 underline-offset-4 hover:text-emerald-600 transition-colors">
                Read Whitepaper
              </a>
            </div>
          </section>

        </div>

        {/* Footer Navigation */}
        <footer className="mt-32 pt-12 border-t border-zinc-100 flex justify-between items-center">
          <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest italic">
            Case Study End — 2024
          </div>
          <a href="#" className="text-[10px] font-bold text-zinc-900 uppercase tracking-widest hover:text-emerald-600 transition-colors">
            Next Project →
          </a>
        </footer>

      </article>
    </div>
  );
}