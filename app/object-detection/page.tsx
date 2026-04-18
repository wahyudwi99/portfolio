import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ObjectDetection() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-600 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <div className="fixed -top-24 -right-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
      <div className="fixed -bottom-24 -left-24 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

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
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            Computer Vision Project 2023
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tighter leading-[1.1] mb-8">
            YOLO: Object Detection <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-emerald-600">
              in Low Light
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-light italic">
            Developing high-accuracy object detection models for restricted areas using thermal imagery and YOLOv8.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">The Objective</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <p className="text-zinc-500 leading-relaxed font-light text-lg">
                This project aims to develop an object detection model which is able to detect specific objects (cars, humans, bicycles) in restricted areas using thermal cameras. Thermal imagery allows for effective surveillance in low-light or zero-visibility conditions.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">Modeling & Training</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <p className="text-zinc-500 leading-relaxed font-light mb-12">
                We utilized YOLOv8 and trained the model using an NVIDIA RTX 3060 Ti. The model was trained for 50 epochs, achieving stable performance metrics across detection categories.
            </p>
            <div className="rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-200/50 p-4 md:p-8">
              <Image src="/images/object_detection/image_3.png" alt="YOLO Training Result" width={1200} height={600} className="w-full h-auto rounded-xl"/> 
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-zinc-900 tracking-tight italic">Inference & Validation</h2>
              <div className="h-px flex-1 bg-zinc-200"></div>
            </div>
            <p className="text-zinc-500 leading-relaxed font-light mb-12">
                Validation images show the model&apos;s ability to generate precise bounding boxes for objects in thermal frames, demonstrating robust detection even in high-contrast or noisy thermal backgrounds.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Image src="/images/object_detection/image_2.png" alt="Inference Result 1" width={500} height={400} className="rounded-2xl border border-zinc-200 shadow-sm w-full"/> 
              <Image src="/images/object_detection/image_1.png" alt="Inference Result 2" width={500} height={400} className="rounded-2xl border border-zinc-200 shadow-sm w-full"/>
            </div>
          </section>
        </div>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-16 flex justify-between items-center text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase border-t border-zinc-200">
        <p>© 2026 Wahyu Dwi Nugraha</p>
        <div className="flex gap-10">
          <a href="https://www.linkedin.com/in/wahyudwinugraha/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          <a href="https://github.com/wahyudwi99" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
