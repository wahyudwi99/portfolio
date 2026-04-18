import React from 'react';
import Link from 'next/link';

export default function LightProfessionalPortfolio() {
  const experiences = [
    {
      title: "Senior AI Engineer (Operation Excellence)",
      company: "Mbiz.co.id",
      location: "Jakarta, Indonesia",
      period: "Mar 2025 - present",
      description: "Architected a scalable, parallelized pipeline using Python and Airflow processing 2M+ daily data points, while engineering an enterprise-grade agentic RAG chatbot for L1 helpdesk automation. Spearheaded LLM-based content moderation via FastAPI to reduce QC workload by 70%, deployed automated payment extraction pipelines for weekly CS emails, and designed real-time BI dashboards using Apache Superset to accelerate sales decision-making and monitor transaction anomalies."
    },
    {
      title: "Data Scientist",
      company: "Mbiz.co.id",
      location: "Jakarta, Indonesia",
      period: "Oct 2023 - Mar 2025",
      description: "Developed containerized LLM and OCR microservices using Docker and Airflow, achieving a 10x speed increase and minimizing verification errors. Designed intelligent ML scoring algorithms for 70% better task routing efficiency and integrated NLP text classification with CV-based signature detection to reduce Average Handling Time (AHT) by 20%, significantly streamlining core customer service operations."
    },
    {
      title: "Research & Development Engineer (Machine Learning)",
      company: "Sistem Integrasi Mandiri",
      location: "Jakarta, Indonesia",
      period: "Nov 2022 - Oct 2023",
      description: "Trained and deployed custom YOLO-based object detection for real-time video surveillance, achieving over 70% mAP@0.5. Built multivariate LSTM-based forecasting models for proactive server maintenance and pioneered an internal knowledge base by customizing locally hosted Llama models with ChromaDB and LangChain to create a highly accurate RAG pipeline for operational guidelines."
    }
  ];

  const projects = [
    {
      year: "2026",
      title: "Agentic Chatbot RAG for Enterprise Knowledge Base",
      description: "Decoupled, event-driven RAG pipeline isolating I/O-bound retrieval from compute-bound inference to minimize latency.",
      link: "/agentic-rag",
      tag: "Engineering Project"
    },
    {
      year: "2026",
      title: "LLM-Powered Document Information Extraction",
      description: "Containerized document verification microservice using Docker and Airflow, achieving 10x processing speed improvements.",
      link: "/llm-document-extraction",
      tag: "Engineering Project"
    },
    {
      year: "2025",
      title: "Convolution Autoencoder: Image Compression Into Latent Space",
      description: "Image compression mechanism that compress image to latent space (low kernel size), then convert back to original space with low reconstruction loss.",
      link: "/convolutional-autoencoder",
      tag: "Computer Vision"
    },
    {
      year: "2024",
      title: "IEEE Credit Card Fraud Detection",
      description: "Detecting fraud in credit card transactions using various machine learning models with highly imbalanced data.",
      link: "/fraud-detection",
      tag: "Machine Learning"
    },
    {
      year: "2023",
      title: "YOLO: Object Detection in Low Light",
      description: "Object detection with YOLO model to detect objects in restricted area using thermal camera (low light).",
      link: "/object-detection",
      tag: "Computer Vision"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-600 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Soft Ambient Tint */}
      <div className="fixed -top-24 -right-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed -bottom-24 -left-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#f8f9fa]/80 backdrop-blur-md border-b border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="text-zinc-900 text-xl font-bold tracking-tighter flex items-center gap-2">
            <p>Wahyu Dwi Nugraha</p>
          </div>
          <div className="hidden md:flex gap-12 text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400">
            <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <button className="text-[10px] font-black uppercase tracking-widest border border-zinc-900 px-6 py-2 rounded-full text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all">
            Resume
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-8">
        
        {/* Hero Section */}
        <section className="py-24 md:py-36">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-20">
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

            <div className="relative">
              <div className="absolute -inset-6 border border-emerald-100 rounded-full animate-[spin_15s_linear_infinite]"></div>
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-[6px] border-white bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
                <img 
                  src="/images/Personal_Photo/Personal Photo.jpg" 
                  alt="Wahyu Dwi Nugraha" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight italic">Professional Experience</h2>
            <div className="h-px flex-1 bg-zinc-200 ml-12"></div>
          </div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l border-zinc-200 group">
                <div className="absolute w-3 h-3 bg-zinc-200 rounded-full -left-[6.5px] top-2 group-hover:bg-emerald-500 transition-colors"></div>
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">{exp.title}</h3>
                    <p className="text-emerald-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mt-2 md:mt-0">
                    {exp.period}
                  </div>
                </div>
                <p className="text-zinc-500 leading-relaxed font-light italic max-w-3xl text-justify">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight italic">Research & Projects</h2>
            <div className="h-px flex-1 bg-zinc-200 ml-12"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {projects.map((project, index) => (
              <Link href={project.link} key={index} className="group block">
                <span className="text-emerald-600 text-[12px] font-black uppercase tracking-[0.2em] mb-4 block">{project.year}</span>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">{project.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light italic text-sm">
                  {project.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40">
          <div className="rounded-[48px] bg-zinc-900 py-24 px-12 flex flex-col items-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight relative z-10">Let's discuss the <br />next iteration.</h2>
            <a href="mailto:wahyu.dwi@example.com" className="group text-2xl font-medium flex items-center gap-4 hover:text-emerald-400 transition-all border-b border-zinc-700 pb-2 relative z-10">
              wahyudwinugraha@mbiz.co.id
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
