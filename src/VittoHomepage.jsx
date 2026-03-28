

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function VittoHomepage() {
  // State for mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);


  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isNewsletterJoined, setIsNewsletterJoined] = useState(false);


  const handleNewsletterSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    if (newsletterEmail) {
      console.log("Newsletter Subscriber:", newsletterEmail);
      setIsNewsletterJoined(true);
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      
     
      <nav className="px-6 md:px-8 py-4 md:py-6 max-w-7xl mx-auto border-b border-gray-100 relative bg-white z-50">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-2 text-xl md:text-2xl font-bold text-red-600 tracking-tighter hover:text-red-700 transition-colors">
            <img src="/images.jpeg" alt="Vitto Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span>Vitto.</span>
          </Link>
        
          <div className="hidden md:flex space-x-6 font-medium text-gray-600">
            <Link to="/platform" className="hover:text-red-600 transition-colors">AI Platform</Link>
            <Link to="/automation" className="hover:text-red-600 transition-colors">Automation</Link>
            <Link to="/article" className="hover:text-red-600 transition-colors">Insights</Link>
            <Link to="/App" className="hover:text-red-600 transition-colors">Partner Sign Up</Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact" className="bg-red-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-700 transition-all">
              Book a Demo
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-gray-600 hover:text-red-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-b border-gray-100 md:hidden flex flex-col space-y-2 px-6 py-6 z-50 transition-all">
            <Link to="/platform" onClick={closeMenu} className="text-gray-700 hover:text-red-600 font-medium py-2 text-lg">AI Platform</Link>
            <Link to="/automation" onClick={closeMenu} className="text-gray-700 hover:text-red-600 font-medium py-2 text-lg">Automation</Link>
            <Link to="/article" onClick={closeMenu} className="text-gray-700 hover:text-red-600 font-medium py-2 text-lg">Insights</Link>
            <Link to="/App" onClick={closeMenu} className="text-gray-700 hover:text-red-600 font-medium py-2 text-lg">Partner Sign Up</Link>
            <Link to="/contact" onClick={closeMenu} className="bg-red-600 text-white px-5 py-3 rounded-md font-semibold text-center mt-4 shadow-md">
              Book a Demo
            </Link>
          </div>
        )}
      </nav>

  
      <header className="px-8 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            AI-First Infrastructure for <span className="text-red-600">Modern Financial Services</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            This is not retrofitted AI. This is not a patchwork of fragmented vendors. Vitto is a unified, intelligent layer built specifically from the ground up for Banks, NBFCs, and MFIs.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="bg-red-600 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200 text-center">
              Book a Demo
            </Link>
            <Link to="/platform" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-red-50 transition-all text-center">
              Explore Platform
            </Link>
          </div>
        </div>
        <div className="relative h-80 md:h-96 w-full rounded-xl shadow-2xl overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white"></div>
          <div className="z-10 text-center space-y-4 w-3/4">
             <div className="h-8 bg-white rounded shadow w-full"></div>
             <div className="grid grid-cols-3 gap-4">
                <div className="h-24 bg-white rounded shadow w-full"></div>
                <div className="h-24 bg-white rounded shadow w-full"></div>
                <div className="h-24 bg-white rounded shadow w-full"></div>
             </div>
             <div className="h-40 bg-white rounded shadow w-full"></div>
          </div>
        </div>
      </header>

    
      <section className="bg-gray-50 py-20 md:py-24 px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The Reality of Today's Lending Technology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Legacy infrastructure is holding back modern credit teams. Here is what we are fixing.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Fragmented Systems", desc: "Siloed LOS, LMS, CRM with no unified data layer." },
              { num: "02", title: "Non-AI Native Vendors", desc: "Basic AI bolted on top of outdated legacy systems." },
              { num: "03", title: "Reactive Collections", desc: "No predictive capability, relying on manual prioritization." },
              { num: "04", title: "Static Rule Engines", desc: "Rigid rules that don't learn or adapt to market changes." }
            ].map((prob, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="text-5xl font-black text-red-50 absolute -top-2 -right-2 group-hover:text-red-100 transition-colors">{prob.num}</div>
                <h3 className="text-xl font-bold mb-3 relative z-10 text-red-600">{prob.title}</h3>
                <p className="text-gray-600 relative z-10">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 md:py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">AI-native decisioning meets <span className="text-red-600">full stack operational automation</span></h2>
            <p className="text-lg text-gray-600 mb-6">
              Vitto bridges the gap between intelligence and execution. We don't just provide insights; we provide the engine that acts on them autonomously.
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Domain-trained Models</h4>
                <p className="text-gray-600">Our machine learning models are pre-trained on vast financial datasets, understanding credit risk natively.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Unified Architecture</h4>
                <p className="text-gray-600">One continuous data pipeline from initial assessment to final collection.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
              <div>
                <h4 className="text-xl font-bold mb-2">Explainability</h4>
                <p className="text-gray-600">Clear, auditable reasoning behind every automated decision to keep you compliant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-gray-900 text-white py-20 md:py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">The AI Layer of Vitto</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Data-Based Assessment", desc: "Alternative data underwriting." },
              { title: "ML Model", desc: "Predictive behavioral scoring." },
              { title: "Rule Engine & Decisioning", desc: "Dynamic, real-time approvals." },
              { title: "Fraud Intelligence", desc: "Proactive anomaly detection." },
              { title: "Collection Intelligence", desc: "Predictive recovery pathways." },
              { title: "Agentic AI Layer", desc: "Autonomous operational agents." }
            ].map((mod, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
                <h3 className="text-xl font-bold mb-3">{mod.title}</h3>
                <p className="text-gray-400 mb-6">{mod.desc}</p>
                <Link to="/platform" className="text-red-400 font-semibold hover:text-red-300 flex items-center gap-2">
                  Explore →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 md:py-24 px-8 max-w-7xl mx-auto border-b border-gray-100">
        <h2 className="text-3xl font-bold mb-16 text-center">Measurable from Day One</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-black text-red-600 mb-2">85%</div>
            <h4 className="font-bold mb-2">Faster Credit Decisions</h4>
            <p className="text-sm text-gray-500">From application to approval</p>
          </div>
          <div>
            <div className="text-5xl font-black text-red-600 mb-2">30%</div>
            <h4 className="font-bold mb-2">Reduced Portfolio Risk</h4>
            <p className="text-sm text-gray-500">Lower NPL ratios via ML</p>
          </div>
          <div>
            <div className="text-5xl font-black text-red-600 mb-2">2.5x</div>
            <h4 className="font-bold mb-2">Increased Recovery Rates</h4>
            <p className="text-sm text-gray-500">Optimized collection routing</p>
          </div>
          <div>
            <div className="text-5xl font-black text-red-600 mb-2">50+</div>
            <h4 className="font-bold mb-2">Seamless Integrations</h4>
            <p className="text-sm text-gray-500">Pre-built data & API connectors</p>
          </div>
        </div>
      </section>

      
      <section className="py-20 md:py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by Innovators</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale">
            <span className="text-xl md:text-2xl font-black">FinCorp</span>
            <span className="text-xl md:text-2xl font-black">NeoBank</span>
            <span className="text-xl md:text-2xl font-black">CapitalPlus</span>
            <span className="text-xl md:text-2xl font-black">LendFlow</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 p-8 md:p-10 rounded-xl relative">
            <span className="text-6xl text-red-200 absolute top-4 left-6">"</span>
            <p className="text-lg text-gray-800 mb-6 relative z-10 italic">"Vitto didn't just digitize our lending process; they made it intelligent. Our approval times dropped from days to minutes while keeping risk models intact."</p>
            <div>
              <p className="font-bold text-gray-900">Sarah Jenkins</p>
              <p className="text-sm text-gray-600">Chief Risk Officer, CapitalPlus</p>
            </div>
          </div>
          <div className="bg-red-50 p-8 md:p-10 rounded-xl relative">
            <span className="text-6xl text-red-200 absolute top-4 left-6">"</span>
            <p className="text-lg text-gray-800 mb-6 relative z-10 italic">"The collections intelligence module is a game changer. Knowing exactly which channel to use for which customer has doubled our recovery efficiency."</p>
            <div>
              <p className="font-bold text-gray-900">David Chen</p>
              <p className="text-sm text-gray-600">Head of Operations, FinCorp NBFC</p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="bg-red-600 text-white py-16 md:py-20 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Discover the key to grow your business</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/App" className="bg-white text-red-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-all text-center">
              Partner Sign Up
            </Link>
            <Link to="/platform" className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition-all text-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-16 px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-red-600 tracking-tighter mb-4">Vitto.</div>
            <p className="text-gray-500 mb-6 text-sm">AI-First Infrastructure for Modern Financial Services.</p>
            
            
            {isNewsletterJoined ? (
              <div className="flex items-center space-x-2 text-green-600 font-medium py-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Joined successfully!</span>
              </div>
            ) : (
              <form className="flex" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Join Newsletter" 
                  className="px-4 py-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:border-red-500" 
                />
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700">→</button>
              </form>
            )}
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/automation" className="hover:text-red-600">Lending Lifecycle</Link></li>
              <li><Link to="/platform" className="hover:text-red-600">Collections Intelligence</Link></li>
              <li><Link to="/platform" className="hover:text-red-600">Agentic AI</Link></li>
              <li><Link to="/platform" className="hover:text-red-600">API Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/article" className="hover:text-red-600">About Us / Insights</Link></li>
              <li><Link to="#" className="hover:text-red-600">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-red-600">Contact</Link></li>
              <li><Link to="/App" className="hover:text-red-600">Partner Sign Up</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900">Partners</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-red-600">Integration Partners</Link></li>
              <li><Link to="#" className="hover:text-red-600">Consulting Network</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vitto Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-red-600">LinkedIn</Link>
            <Link to="#" className="hover:text-red-600">Twitter</Link>
            <Link to="#" className="hover:text-red-600">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}