// client/src/PlatformPage.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function PlatformPage() {
  const coreModules = [
    {
      title: "Data-Based Assessment",
      desc: "Ingests alternative and traditional data streams (bureau, SMS parsers, bank statements) via real-time APIs to build a comprehensive borrower profile before the underwriter opens the file.",
    },
    {
      title: "ML Predictive Modeling",
      desc: "Deploys gradient boosting algorithms to predict default probability based on historical portfolio performance, moving beyond static CIBIL score reliance.",
    },
    {
      title: "Rule Engine & Decisioning",
      desc: "A highly configurable matrix executing thousands of boolean checks per second. Enforces hard institutional credit policies while allowing ML models to score within permitted bands.",
    },
    {
      title: "Fraud Intelligence",
      desc: "Cross-references identity vectors against national negative databases and uses behavioral analytics (e.g., application velocity, device spoofing detection) to flag synthetic identity fraud.",
    },
    {
      title: "Collection Intelligence",
      desc: "Propensity-to-pay scoring models that segment delinquent accounts and dynamically allocate them to the optimal channel (AI voicebot, SMS, or human field agent) to maximize ROI.",
    },
    {
      title: "Agentic AI Layer",
      desc: "An advanced Retrieval-Augmented Generation (RAG) pipeline querying a Small Language Model (SLM) strictly fine-tuned on localized credit policy and BFSI regulatory frameworks.",
    }

  ];

  return (
    <div className="min-h-screen bg-[#1A1A2E] text-white py-20 px-6 font-sans">
                      <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8 group font-medium">
  <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
  </svg>
  Back to Home
</Link>
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Vitto Intelligence Engine</h1>
          <p className="text-xl text-gray-400">
            A unified suite of domain-trained models seamlessly integrated into your origination and management pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreModules.map((mod, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:border-red-900 transition-colors">
              <h3 className="text-xl font-bold text-red-500 mb-4">{mod.title}</h3>
              <p className="text-gray-400 leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>

     
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
          
          <h2 className="text-3xl font-bold mb-6">Module 06: The Agentic AI Layer</h2>
          <p className="text-gray-300 mb-8 max-w-4xl text-lg">
            Vitto deploys an advanced Retrieval-Augmented Generation (RAG) pipeline querying a Small Language Model (SLM) strictly fine-tuned on localized credit policy and BFSI regulatory frameworks.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-red-400 border-b border-gray-800 pb-2">Why Generic LLMs Fail in BFSI</h3>
              <p className="text-gray-400">
                Public models like ChatGPT are probabilistic text predictors, making them fundamentally unsafe for regulated lending. They lack localized context, are prone to hallucination (inventing policy), and introduce severe data privacy risks by processing PII on public servers.
              </p>
              
              <h3 className="text-xl font-semibold text-red-400 border-b border-gray-800 pb-2 pt-4">The Domain-Trained SLM Advantage</h3>
              <ul className="list-disc pl-5 text-gray-400 space-y-2">
                <li><strong>Explainability:</strong> Every agent output cites the exact node of your internal credit manual it referenced.</li>
                <li><strong>Hallucination Control:</strong> The RAG architecture restricts the SLM to generating answers <em>only</em> from ingested institutional documents.</li>
                <li><strong>Policy Compliance:</strong> Hard-coded guardrails prevent the agent from authorizing actions outside permitted risk thresholds.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Autonomous Agents in Production:</h3>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h4 className="font-bold text-red-500">1. The Borrower Agent</h4>
                <p className="text-sm text-gray-400 mt-2">Handles self-service queries natively on WhatsApp. Can autonomously fetch NOCs, explain EMI breakdowns, and negotiate minor restructuring based on pre-approved parameters.</p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h4 className="font-bold text-red-500">2. The Field Agent Copilot</h4>
                <p className="text-sm text-gray-400 mt-2">Equips field collections staff with real-time intelligence. Suggests optimal negotiation scripts based on the borrower's psychological profile and historical interactions.</p>
              </div>
              
              <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                <h4 className="font-bold text-red-500">3. The Underwriter Agent</h4>
                <p className="text-sm text-gray-400 mt-2">Acts as a policy Q&A system for human risk officers. An underwriter can ask, "Does a 60-day DPD on a consumer durable loan disqualify this SME application?" and receive an instant, cited answer.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}