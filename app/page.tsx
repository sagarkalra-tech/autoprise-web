"use client";

import React, { useState, useEffect } from 'react';
import { Cpu, Zap, CheckCircle, ArrowRight, Lock, Monitor, Terminal, Shield, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components for "The Tech Stack Pitch" ---

const TerminalDemo = () => {
  const [logs, setLogs] = useState<{ text: string, type: 'info' | 'error' | 'success' | 'reasoning' }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const demoSequence = [
    { text: "[OBSERVING] Scanning Windows Event Logs...", type: 'info' },
    { text: "[CRITICAL] Event ID 41: Kernel-Power unexpected shutdown.", type: 'error' },
    { text: "[REASONING] Correlated with recent driver update (v551.86).", type: 'reasoning' },
    { text: "[ACTION] Initiating SFC /scannow repair...", type: 'info' },
    { text: "[SUCCESS] System integrity restored. Logs cleared.", type: 'success' },
  ];

  const runDemo = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setLogs([]);
    
    for (const log of demoSequence) {
      await new Promise(r => setTimeout(r, 1200));
      setLogs(prev => [...prev, log as any]);
    }
    setIsProcessing(false);
  };

  return (
    <div className="w-full max-w-lg aspect-video bg-slate-900/90 rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden backdrop-blur-xl group">
      <div className="bg-slate-800/50 px-4 py-2 flex items-center justify-between border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors" />
        </div>
        <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">AutoPrise Debugger v1.0</div>
      </div>
      <div className="p-6 font-mono text-sm h-full flex flex-col">
        <div className="flex-1 space-y-3 overflow-y-auto custom-scrollbar">
          <AnimatePresence>
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  log.type === 'error' ? 'text-red-400' : 
                  log.type === 'success' ? 'text-green-400' : 
                  log.type === 'reasoning' ? 'text-cyan-400 italic' : 'text-blue-400'
                }
              >
                <span className="opacity-50 mr-2">$</span> {log.text}
              </motion.div>
            ))}
          </AnimatePresence>
          {!isProcessing && logs.length === 0 && (
            <div className="text-slate-600 animate-pulse">Ready for triage input...</div>
          )}
        </div>
        
        <button 
          onClick={runDemo}
          disabled={isProcessing}
          className="mt-4 w-fit flex items-center gap-2 px-4 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg border border-blue-500/30 transition-all text-xs font-bold disabled:opacity-50"
        >
          {isProcessing ? <Activity className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
          {isProcessing ? "PROCESSING..." : "RUN LIVE TRIAGE DEMO"}
        </button>
      </div>
    </div>
  );
};

// --- Main Page ---

const AutoPriseLandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Dynamic Background (Impossible with basic HTML/CSS JS without messy code) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/10 blur-[120px] rounded-full" style={{ animationDelay: '2s' }} />
      </div>

      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 flex items-center justify-center relative"
            >
              <Image src="/icon.svg" alt="AutoPrise Logo" width={36} height={36} className="z-10" />
              <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full group-hover:bg-blue-500/40 transition-all" />
            </motion.div>
            <span className="text-2xl font-bold tracking-tighter text-white">AutoPrise</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            {['Platform', 'Skills', 'Security', 'Pricing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <motion.a 
            href="#signup" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-900/40"
          >
            Join the Program
          </motion.a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-[0_0_20px_rgba(37,99,235,0.1)]"
          >
            <Zap className="w-3 h-3 fill-current" /> 
            Autonomous Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight text-white mb-10 leading-[0.9] text-balance"
          >
            The Workforce of <br /> 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 animate-gradient-x">
              Pure Intent.
            </span>
          </h1 >
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            AutoPrise deploys role-based, full-stack AI agents that eliminate manual operations. 
            Local-first, secure, and built for the sovereign enterprise.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto p-2 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl"
          >
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 bg-transparent px-6 py-4 rounded-xl focus:outline-none text-slate-200 placeholder:text-slate-600 font-medium"
            />
            <button className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-xl font-black hover:bg-blue-50 transition-all flex items-center justify-center gap-2 group whitespace-nowrap">
              Get Early Access <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section id="security" className="py-20 border-y border-slate-900 bg-slate-900/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold tracking-[0.3em] text-slate-600 uppercase mb-12">Certified for High-Compliance Environments</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <div className="font-black text-2xl tracking-tighter">SOC2.CERT</div>
             <div className="font-black text-2xl tracking-tighter">HIPAA.READY</div>
             <div className="font-black text-2xl tracking-tighter">FINRA.SAFE</div>
             <div className="font-black text-2xl tracking-tighter">GDPR.NATIVE</div>
          </div>
        </div>
      </section>

      {/* Feature Section with Staggered Fade-in */}
      <section id="platform" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Privacy-First", icon: Lock, color: "blue", desc: "100% local inference. Your sensitive client data never leaves your infrastructure." },
              { title: "Deep OS Access", icon: Terminal, color: "cyan", desc: "Native access to PowerShell, File Systems, and Windows APIs for true autonomy." },
              { title: "Multi-Tenant", icon: Monitor, color: "indigo", desc: "Manage 10,000 local instances from a single, secure, federated dashboard." }
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-slate-800 bg-slate-900/30 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-${f.color}-500/10 group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                  <f.icon className={`text-${f.color}-400 w-7 h-7`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Interactive Skill Demo (The Impressive Part) */}
      <section id="skills" className="py-32 px-6 bg-blue-600/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-6">
                Live Capability Simulator
              </div>
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">Meet the Event Log Diagnostician.</h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                Stop manually triaging thousands of entries. AutoPrise monitors, triages, and heals system issues in real-time.
                <span className="block mt-4 text-blue-400">Click the "Run" button to see it in action.</span>
              </p>
              <div className="space-y-4">
                {["Real-time monitoring", "Local LLM reasoning", "Auto-remediation"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-200 font-bold">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <CheckCircle className="text-cyan-400 w-4 h-4" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex-1 w-full flex justify-center lg:justify-end"
            >
              <TerminalDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Program CTA */}
      <section id="pricing" className="py-32 px-6">
        <motion.div 
          whileInView={{ scale: [0.95, 1] }}
          className="max-w-5xl mx-auto p-20 rounded-[4rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 relative overflow-hidden shadow-2xl shadow-blue-500/20 text-center"
        >
          <div className="absolute top-[-20%] right-[-10%] opacity-10">
            <Shield className="w-96 h-96" />
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">Join the Sovereignty.</h2>
            <p className="text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              We are selecting 10 Founding Partner MSPs for our inaugural cohort. 
              Get 50% lifetime discount and priority influence.
            </p>
            <button className="bg-white text-blue-900 px-12 py-6 rounded-2xl font-black hover:shadow-2xl hover:scale-105 transition-all">
              Apply for Founding Program
            </button>
          </div>
        </motion.div>
      </section>

      <footer className="py-20 px-6 border-t border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <Image src="/icon.svg" alt="AutoPrise" width={32} height={32} />
            <span className="text-2xl font-bold text-white">AutoPrise</span>
          </div>
          
          <div className="flex gap-12 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="text-sm font-medium text-slate-700">
            &copy; 2026 AutoPrise Enterprise.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AutoPriseLandingPage;
