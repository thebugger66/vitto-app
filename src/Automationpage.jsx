// client/src/AutomationPage.jsx
import React from "react";
import { Link } from "react-router-dom";
export default function AutomationPage() {
  const layers = [
    {
      id: "Layer A",
      name: "Customer Acquisition",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      modules: ["Lead Management Pipeline", "Partner & DSA Onboarding", "DIY Digital Journeys", "Assisted / Employee Journeys"]
    },
    {
      id: "Layer B",
      name: "Underwriting & LOS",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      modules: ["KYC (Individual + Entity Video KYC)", "UCIC & Deduplication Engine", "Automated Document Fetch & Analyzer", "Configurable Rule Engine", "AI Underwriting", "E-Sign & Automated Disbursement"]
    },
    {
      id: "Layer C",
      name: "Collections Intelligence",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      modules: ["Dynamic Account Allotment", "Promise-to-Pay (PTP) Capture", "Integrated Payment Gateways", "Omni-channel Automation (WhatsApp, SMS, AI Calls)"]
    },
    {
      id: "Layer D",
      name: "Loan Management System (LMS)",
      icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
      modules: ["Real-time Ledger Creation", "Insurance Auto-Deduct Modules", "Automated Loan Closure", "NPA & Debt Tagging Architecture"]
    },
    {
      id: "Layer E",
      name: "CRM & Communications",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      modules: ["360° Customer View Dashboard", "Service Request Management", "Internal Communication Hub", "Marketing Campaigns", "Regulatory Reporting & Analytics"]
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
      <div className="max-w-5xl mx-auto">
    
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Stack Operational Automation</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            29+ specialized operational modules structured into 5 cohesive layers, designed to run your entire lending lifecycle from a single, unified codebase.
          </p>
        </div>

        <div className="space-y-6 relative">
          <div className="hidden md:block absolute left-[3.25rem] top-10 bottom-10 w-1 bg-gray-800 z-0"></div>

          {layers.map((layer, idx) => (
            <div key={idx} className="relative z-10 flex flex-col md:flex-row gap-6 items-start group">
              
             
              <div className="w-16 h-16 rounded-xl bg-gray-900 border-2 border-gray-700 flex items-center justify-center flex-shrink-0 group-hover:border-red-600 group-hover:bg-red-900/20 transition-all duration-300 shadow-xl">
                <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={layer.icon} />
                </svg>
              </div>

              
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl flex-1 w-full hover:shadow-[0_0_30px_rgba(211,47,47,0.1)] transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gray-800 text-gray-400 text-xs font-bold px-3 py-1 rounded tracking-widest">{layer.id}</span>
                  <h3 className="text-2xl font-bold text-white">{layer.name}</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6 mt-6">
                  {layer.modules.map((mod, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span className="text-gray-300 text-sm md:text-base">{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}