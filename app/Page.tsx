import React from 'react';
import { Shield, Cpu, Activity, Zap, CheckCircle, ArrowRight, Lock, Monitor, Terminal } from 'lucide-react';

const AutoPriseLandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">AutoPrise</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#platform" className="hover:text-blue-400 transition-colors">Platform</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#security" className="hover:text-blue-400 transition-colors">Security</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          </div>

          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-900/20">
            Join the Program
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
            <Zap className="w-3 h-3" /> 
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400 leading-[1.1]">
            The Autonomous Workforce for <br /> the Sovereign Enterprise
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            AutoPrise deploys role-based, full-stack AI agents that eliminate manual operations. 
            Local-first, secure, and built to monetize human intent through autonomous digital workforces.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-slate-900 border border-slate-700 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-slate-200 placeholder:text-slate-500"
            />
            <button className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
              Get Early Access <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="mt-6 text-slate-500 text-sm">
            Join our Founding Partner Program. Only 10 slots remaining.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale contrast-125">
           <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-widest">SOC2 COMPLIANT</div>
           <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-widest">HIPAA READY</div>
           <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-widest">FINRA SECURE</div>
           <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-widest">GDPR NATIVE</div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="platform" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Beyond Chatbots. Meet Your Virtual Employees.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AutoPrise agents don't just "answer questions." They plan, reason, and execute deep system tasks locally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Privacy-First (No Cloud)</h3>
              <p className="text-slate-400 leading-relaxed">
                100% local inference. Your sensitive client data never leaves your infrastructure. Sovereignty is non-negotiable.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Terminal className="text-cyan-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Deep OS Integration</h3>
              <p className="text-slate-400 leading-relaxed">
                Native access to PowerShell, File Systems, and Windows APIs. Our agents act as local sysadmins, not just text generators.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-blue-500/50 transition-all group">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="text-indigo-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-Tenant Gateway</h3>
              <p className="text-slate-400 leading-relaxed">
                Manage 10 or 10,000 local instances from a single, secure dashboard. Scalable management for modern MSPs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                Core Capability
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Skill 01: The Event Log Diagnostician</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Stop manually triaging 10,000 Windows Event Log entries. AutoPrise monitors, triages, and heals system issues in real-time using local-only intelligence.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time background monitoring",
                  "Agentic triage with local LLMs",
                  "Actionable remediation summaries",
                  "Automated PowerShell execution"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full max-w-lg aspect-square bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20 mix-blend-overlay"></div>
              <div className="p-8 flex flex-col h-full font-mono text-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-slate-500">autoprise-agent-01 --triage</span>
                </div>
                <div className="space-y-4 text-slate-300">
                  <p className="text-blue-400 font-bold">[OBSERVING] Scanning Windows Event Logs...</p>
                  <p className="text-red-400">[ERROR] Critical Event ID 41 found in System Logs.</p>
                  <p className="text-cyan-400">[REASONING] Kernel-Power unexpected shutdown detected. Checking driver integrity...</p>
                  <div className="pl-4 border-l-2 border-slate-700 space-y-2">
                    <p className="text-slate-500">// Remediation Strategy:</p>
                    <p className="text-white">1. Update NVIDIA Display Driver (v551.86)</p>
                    <p className="text-white">2. Run SFC /scannow locally</p>
                  </div>
                  <p className="text-green-400">[EXECUTING] Automated system scan initiated. Status: 45% complete.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Call to Action */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 relative overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute top-0 right-0 p-12 text-white/10">
            <Cpu className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Lead the Sovereign AI Revolution</h2>
            <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              We are looking for 10 "Founding Partner" MSPs to join our inaugural cohort. 
              Get 50% lifetime discount, direct roadmap influence, and early access to the future of IT automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-blue-900 px-10 py-5 rounded-2xl font-bold hover:shadow-xl transition-all scale-110">
                Join the Founding Partner Program
              </button>
            </div>
            <p className="mt-8 text-blue-200/60 text-sm font-medium">
              Only for MSPs in Healthcare, Legal, Finance, or Gov sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">AutoPrise</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="text-sm text-slate-600">
            &copy; 2026 AutoPrise Enterprise. Built for a Sovereign Desktop.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AutoPriseLandingPage;
