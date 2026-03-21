import React from 'react';

export default function LightProfessionalPortfolio() {
  return (
    /* Background: Off-White/Light Gray (#f8f9fa) yang sangat lembut */
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-600 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Soft Ambient Tint - Memberikan kedalaman tanpa terlihat gelap */}
      <div className="fixed -top-24 -right-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed -bottom-24 -left-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="text-zinc-900 text-xl font-bold tracking-tighter flex items-center gap-2">
            <p>Wahyu Dwi Nugraha</p>
          </div>
          <div className="hidden md:flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400">
            <a href="#expertise" className="hover:text-emerald-600 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <button className="text-[10px] font-black uppercase tracking-widest border border-zinc-900 px-6 py-2 rounded-full text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all">
            Resume
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8">
        
        {/* Hero Section with Profile Picture */}
        <section className="py-24 md:py-36">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-20">
            
            {/* Teks Hero */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                Available for ML Research Collaboration
              </div>
              <h1 className="text-5xl md:text-[80px] font-bold text-zinc-900 tracking-tighter leading-[0.95] mb-10">
                AI / ML <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-emerald-600">
                  Engineer & Researcher
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 max-w-xl leading-relaxed font-light mb-12 mx-auto md:mx-0">
                Senior ML Engineer focused on building high-performance neural systems 
                and production-ready architectures for the modern enterprise.
              </p>
              <div className="flex justify-center md:justify-start gap-8">
                <a href="#projects" className="group flex items-center gap-3 text-zinc-900 font-bold tracking-tight text-sm hover:text-emerald-600 transition-colors">
                  Explore Case Studies 
                  <span className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Profile Picture Container */}
            <div className="relative">
              {/* Soft Ring Decoration */}
              <div className="absolute -inset-6 border border-emerald-100 rounded-full animate-[spin_15s_linear_infinite]"></div>
              
              {/* The Profile Image */}
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-6 -right-4 z-20 bg-zinc-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl uppercase tracking-widest border-2 border-white">
                ML Lead
              </div>
            </div>

          </div>
        </section>

        {/* Selected Work */}
        <section id="projects" className="py-24">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight italic">Research & Projects</h2>
            <div className="h-px flex-1 bg-zinc-200 ml-12"></div>
          </div>
          
          <div className="space-y-32">
            {/* Project Card */}
            <div className="flex flex-col md:flex-row gap-16 items-center group">
              <div className="flex-1">
                <span className="text-emerald-600 text-[15px] font-black uppercase tracking-[0.2em] mb-4 block">2026</span>
                <h3 className="text-3xl font-bold text-zinc-900 mb-6 tracking-tight group-hover:text-emerald-600 transition-colors">Mini Transformers: Deep Dive into Architectural Design</h3>
                <p className="text-zinc-500 leading-relaxed mb-8 font-light italic">
                    Build transformers block from scratch which covers the fundamental concept of Multi-Head Attention mechanism and Feed Forward Network.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-32 mt-10">
            {/* Project Card */}
            <div className="flex flex-col md:flex-row gap-16 items-center group">
              <div className="flex-1">
                <span className="text-emerald-600 text-[15px] font-black uppercase tracking-[0.2em] mb-4 block">2025</span>
                <h3 className="text-3xl font-bold text-zinc-900 mb-6 tracking-tight group-hover:text-emerald-600 transition-colors">Convolution Autoencoder: Image Compression Into Latent Space</h3>
                <p className="text-zinc-500 leading-relaxed mb-8 font-light italic">
                    Image compression mechanism that compress image to latent space (low kernel size), then convert back to original space with low reconstruction loss
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-32 mt-10">
            {/* Project Card */}
            <div className="flex flex-col md:flex-row gap-16 items-center group">
              <div className="flex-1">
                <span className="text-emerald-600 text-[15px] font-black uppercase tracking-[0.2em] mb-4 block">2023</span>
                <h3 className="text-3xl font-bold text-zinc-900 mb-6 tracking-tight group-hover:text-emerald-600 transition-colors">YOLO: Object Detection in Low Light</h3>
                <p className="text-zinc-500 leading-relaxed mb-8 font-light italic">
                    Object detection with YOLO model to detect objects in restricted area using thermal camera (low light).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Clean & Inviting */}
        <section id="contact" className="py-40">
          <div className="rounded-[48px] bg-zinc-900 py-24 px-12 flex flex-col items-center text-center text-white relative overflow-hidden">
            {/* Background pattern for CTA */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight relative z-10">Let's discuss the <br />next iteration.</h2>
            <a href="mailto:hello@dixon.ai" className="group text-2xl font-medium flex items-center gap-4 hover:text-emerald-400 transition-all border-b border-zinc-700 pb-2 relative z-10">
              hello@dixon.ai
              <span className="p-3 rounded-full bg-white text-zinc-900 group-hover:bg-emerald-500 group-hover:text-white transition-all">→</span>
            </a>
          </div>
        </section>

      </main>

      <footer className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase border-t border-zinc-200">
        <p>© 2026 Wahyu Dwi Nugraha</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-900 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}