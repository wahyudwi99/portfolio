import React from 'react'
import Image from 'next/image'

function LLMDocumentExtraction() {
    return (
        <div className="flex flex-col m-10 gap-2 items-center">
            <h1 className="bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-transparent text-4xl font-sans font-bold text-center max-w-200 uppercase">
                LLM-Powered Document Information Extraction
            </h1>
            <p className="border-1 w-full lg:w-200 mb-8"></p>
            <div className="flex flex-col gap-10">
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        The Goal
                    </h2>
                    <p className="mt-2 text-justify">
                        Automating the extraction of structured data from unstructured documents like invoices, receipts, and contracts. This project leverages Large Language Models (LLMs) combined with OCR technologies to achieve high accuracy in zero-shot or few-shot scenarios, reducing the need for template-based extraction.
                    </p>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Workflow
                    </h2>
                    <p className="mt-2 text-justify">
                        The process starts with OCR to convert images/PDFs into text, followed by an LLM that parses the text into a predefined JSON schema. We use prompt engineering and fine-tuning to handle various document layouts and languages.
                    </p>
                    <div className="flex justify-center mt-8">
                        <Image 
                            src="/images/LLM_Document_Extraction/LLM_Docs_Extraction.png" 
                            alt="LLM Document Extraction Workflow" 
                            width={800} 
                            height={450} 
                            className="rounded-xl shadow-2xl border border-zinc-200"
                        />
                    </div>
                </div>
                <div className="max-w-200">
                    <h2 className="bg-clip-text bg-gradient-to-r from-blue-300 to-purple-800 text-transparent text-2xl font-sans font-bold text-center">
                        Technical Stack
                    </h2>
                    <ul className="list-disc list-inside mt-4 space-y-2 text-zinc-600">
                        <li><strong>OCR:</strong> Tesseract, Azure AI Vision, or AWS Textract.</li>
                        <li><strong>LLMs:</strong> GPT-4o, Claude 3.5 Sonnet, or fine-tuned Llama 3 models.</li>
                        <li><strong>Formatting:</strong> Pydantic for schema validation and JSON output.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LLMDocumentExtraction
