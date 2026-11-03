import React from 'react';
import Image from 'next/image';

export default function LightProfessionalPortfolio() {
  const experiences = [
    {
        "company": "Artefact Consulting",
        "location": "Jakarta, Indonesia",
        "period": "Jun 2026 - present",
        "roles": [
            {
                "title": "Data Scientist",
                "period": "Jun 2026 - present",
                "description": "Developed regression-based machine learning models to forecast advertising impressions across multiple brands, turning historical campaign and business signals into forecasts for media planning. Designed and maintained dbt ingestion and transformation workflows to build analytics-ready datamarts from heterogeneous data sources. Integrated feature-ready datasets with model training and inference pipelines to ensure consistent transformations from raw data to predictions."
            }
        ]
    },
    {
        "company": "Mbiz.co.id",
        "location": "Jakarta, Indonesia",
        "period": "Oct 2023 - Jun 2026",
        "roles": [
            {
                "title": "Senior AI Engineer (Operation Excellence)",
                "period": "Mar 2025 - Jun 2026",
                "promotion": true,
                "description": "Architected a scalable, parallelized pipeline using Python and Airflow processing 2M+ daily data points, while engineering an enterprise-grade agentic RAG chatbot for L1 helpdesk automation. Spearheaded LLM-based content moderation via FastAPI to reduce QC workload by 70%, deployed automated payment extraction pipelines for weekly CS emails, and designed real-time BI dashboards using Apache Superset to accelerate sales decision-making and monitor transaction anomalies."
            },
            {
                "title": "Data Scientist",
                "period": "Oct 2023 - Mar 2025",
                "description": "Developed containerized LLM and OCR microservices using Docker and Airflow, achieving a 10x speed increase and minimizing verification errors. Designed intelligent ML scoring algorithms for 70% better task routing efficiency and integrated NLP text classification with CV-based signature detection to reduce Average Handling Time (AHT) by 20%, significantly streamlining core customer service operations."
            }
        ]
    },
    {
        "company": "Sistem Integrasi Mandiri",
        "location": "Jakarta, Indonesia",
        "period": "Nov 2022 - Oct 2023",
        "roles": [
            {
                "title": "Research & Development Engineer (Machine Learning)",
                "period": "Nov 2022 - Oct 2023",
                "description": "Trained and deployed custom YOLO-based object detection for real-time video surveillance, achieving over 70% mAP@0.5. Built multivariate LSTM-based forecasting models for proactive server maintenance and pioneered an internal knowledge base by customizing locally hosted Llama models with ChromaDB and LangChain to create a highly accurate RAG pipeline for operational guidelines."
            }
        ]
    }
];

  const projects = [
    {
      year: "2026",
      title: "See It, Say It, Pick It - A Vision-Language Pipeline for Instruction-Driven Scene Understanding in Robotics",
      description: "Built a vision-language pipeline combining Meta SAM 3 for visual segmentation with Apertus 1.5 70B for language understanding. Integrated visual and language processing to connect scene content with natural-language instructions. Delivered the project with the team for Hack Apertus Track 2a, earning 2nd Runner Up.",
      link: "https://github.com/azamafridi23/see-it-say-it-pick-it-hack-apertus/tree/main/track_2a",
      award: "2nd Runner Up · Hack Apertus",
      articleLink: "https://www.linkedin.com/feed/update/urn:li:share:7519378084668801027/"
    },
    {
      year: "2026",
      title: "DocuNative - Offline Cross-Lingual Document QA with a Small Multilingual Model",
      description: "Developed an on-device multilingual document assistant with the team through Expedition Tiny Aya. Combined Tiny Aya with multilingual retrieval and question answering to help newcomers understand sensitive documents privately. Explored how document-query language alignment affects retrieval quality. Featured in Cohere's Tiny Aya in the wild article.",
      link: "https://github.com/docunative-AI/docunative",
      participation: "Hackathon Participant · Cohere AI Hackathon",
      articleLink: "https://cohere.com/blog/tiny-aya-in-the-wild"
    },
    {
      year: "2026",
      title: "Worldstate - A generative world model for visual dynamics",
      description: "Built a generative world model using a Variational Autoencoder (VAE) to encode visual observations into a compact latent space. Implemented an MDN-RNN to model temporal dynamics and predict distributions over future latent states. Combined latent-state prediction with VAE decoding to generate visual sequences over time.",
      link: "https://github.com/wahyudwi99/Worldstate"
    },
    {
      year: "2025",
      title: "Convolutional Autoencoder - Image compression and reconstruction through latent representations",
      description: "Developed a convolutional autoencoder for image compression and reconstruction using Conv2d layers to encode images into a compact latent representation. Built a ConvTranspose2d decoder to recover spatial structure and visual detail. Trained the model with Mean Absolute Error (MAE) loss and evaluated reconstruction quality on crop images.",
      link: "https://github.com/wahyudwi99/Convolution-Autoencoder"
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
                I research and engineer AI systems across language and vision, designing
                experiments, evaluating models, and building production-ready applications.
                My work bridges rigorous experimentation and practical engineering to turn
                research ideas into reliable systems for real-world use.
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
                <Image 
                  src="/portfolio/images/Personal_Photo/Personal_Photo.jpg" 
                  alt="Wahyu Dwi Nugraha" 
                  width={288}
                  height={288}
                  priority
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
            {experiences.map((experience) => (
              <div key={experience.company}>
                <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{experience.company}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{experience.location}</p>
                  </div>
                  <span className="text-sm font-medium text-zinc-400">{experience.period}</span>
                </div>
                <div className="ml-1 border-l border-zinc-200">
                  {experience.roles.map((role) => (
                    <div key={role.title} className="group relative pb-10 pl-7 last:pb-0 sm:pl-8">
                      <span aria-hidden="true" className="absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full bg-emerald-500 ring-4 ring-[#f8f9fa]" />
                      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                        <div>
                          {'promotion' in role && role.promotion && (
                            <span className="mb-3 inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">Promoted</span>
                          )}
                          <h4 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">{role.title}</h4>
                        </div>
                        <span className="shrink-0 text-xs font-medium text-zinc-400">{role.period}</span>
                      </div>
                      <p className="max-w-3xl text-justify font-light leading-relaxed text-zinc-500">{role.description}</p>
                    </div>
                  ))}
                </div>
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
          
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <article key={project.link} className="project-card flex flex-col items-start rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_16px_48px_rgba(16,185,129,0.08)] sm:p-10">
                {project.participation && (
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                    {project.participation}
                  </span>
                )}
                {project.award && (
                  <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800">
                    <span aria-hidden="true">🏆</span>
                    {project.award}
                  </span>
                )}
                <div className="mb-4 flex w-full flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">{project.title}</h3>
                  <span className="shrink-0 text-sm font-medium text-zinc-400">{project.year}</span>
                </div>
                <p className="mb-8 max-w-3xl text-justify text-sm leading-relaxed text-zinc-500">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full bg-emerald-100 px-5 py-3 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600">
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
                {project.articleLink && (
                  <a href={project.articleLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-full border border-zinc-200 px-5 py-3 text-xs font-semibold text-zinc-700 transition-colors hover:border-emerald-300 hover:text-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600">
                    Article <span aria-hidden="true">↗</span>
                  </a>
                )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40">
          <div className="rounded-[48px] bg-zinc-900 py-24 px-12 flex flex-col items-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight relative z-10">Let&apos;s discuss the <br />next iteration.</h2>
            <a href="mailto:nugrahawd9@gmail.com" className="group text-2xl font-medium flex items-center gap-4 hover:text-emerald-400 transition-all border-b border-zinc-700 pb-2 relative z-10">
              nugrahawd9@gmail.com
              <span className="p-3 rounded-full bg-white text-zinc-900 group-hover:bg-emerald-500 group-hover:text-white transition-all">→</span>
            </a>
          </div>
        </section>

      </main>

      <footer className="max-w-6xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase border-t border-zinc-200">
        <p>© 2026 Wahyu Dwi Nugraha</p>
        <div className="flex gap-10">
          <a href="https://www.linkedin.com/in/wahyudwinugraha/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          <a href="https://github.com/wahyudwi99" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
