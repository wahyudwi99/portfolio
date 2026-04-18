import React from 'react'
import Image from 'next/image'

function AgenticRAG() {
    return (
        <div className="flex flex-col m-10 gap-2 items-center">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent text-4xl font-sans font-bold text-center max-w-200 uppercase">
                Agentic RAG for Enterprise Knowledge Base
            </h1>
            <p className="border-1 w-full lg:w-200 mb-8"></p>
            <div className="flex flex-col gap-10">
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        The Goal
                    </h2>
                    <p className="mt-2 text-justify">
                        This research aims to build an advanced Retrieval-Augmented Generation (RAG) system using an agentic approach. Unlike traditional RAG, Agentic RAG can reason about the retrieval process, decide when to search, evaluate the relevance of retrieved documents, and even perform multi-step reasoning to provide more accurate and context-aware answers.
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Architecture
                    </h2>
                    <p className="mt-2 text-justify">
                        The architecture involves an LLM-based agent that orchestrates various tools including vector databases, search engines, and document processors. The agent uses a feedback loop to refine its search queries and validate the answers against the source documents.
                    </p>
                    <div className="flex justify-center mt-8">
                        <Image 
                            src="/images/Agentic_RAG/Agentic_RAG.png" 
                            alt="Agentic RAG Architecture" 
                            width={800} 
                            height={450} 
                            className="rounded-xl shadow-2xl border border-zinc-200"
                        />
                    </div>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Key Features
                    </h2>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-600">
                        <li><strong>Self-Correction:</strong> The agent can identify if the retrieved information is insufficient and perform additional searches.</li>
                        <li><strong>Multi-Source Retrieval:</strong> Integrates data from PDFs, markdown, and external web sources.</li>
                        <li><strong>Reasoning Loops:</strong> Uses Chain-of-Thought reasoning to handle complex user queries.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AgenticRAG
