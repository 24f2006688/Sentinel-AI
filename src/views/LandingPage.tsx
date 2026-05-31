import React from 'react';
import { Shield, Eye, Lock, BrainCircuit, ChevronRight, Activity, Database, Scale } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'motion/react';

export function LandingPage({ onEnterDashboard }: { onEnterDashboard: () => void }) {
  return (
    <div className="min-h-screen bg-vulcan-950 flex flex-col font-sans selection:bg-primary-500/30">
      <nav className="h-20 border-b border-vulcan-800/50 flex items-center justify-between px-8 max-w-7xl mx-auto w-full z-10 relative">
        <div className="flex items-center gap-3 w-1/3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-900/50">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Sentinel AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-vulcan-300 w-1/3 justify-center">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Tech</a>
          <a href="#about" className="hover:text-white transition-colors">About Us</a>
        </div>

        <div className="flex items-center justify-end gap-4 w-1/3">
          <Button variant="ghost" className="text-sm">Log in</Button>
          <Button onClick={onEnterDashboard} className="text-sm rounded-full px-6">Access Demo</Button>
        </div>
      </nav>

      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none translate-x-1/3 translate-y-1/3 mix-blend-screen" />

        <section className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pt-20 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vulcan-900 border border-vulcan-800 text-xs font-medium text-primary-300 mb-8 mt-12 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Next-Gen Public Safety Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 leading-tight">
              Protect Society Without <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Sacrificing Privacy.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-vulcan-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Modern mass surveillance improves safety but violates trust. Sentinel uses edge-AI and cryptographic governance to detect threats while keeping civilian identities strictly anonymous until multi-party authorization.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={onEnterDashboard} className="w-full sm:w-auto rounded-full group">
                Enter Command Center
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full">
                View Privacy Architecture
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="py-24 bg-vulcan-950 relative border-t border-vulcan-800/50 z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-white mb-4">The Privacy-First Safety Engine</h2>
              <p className="text-vulcan-300 max-w-2xl mx-auto">Our neural networks process visual and audio streams at the edge. Faces are blurred by default. Data is encrypted. Access requires cryptographic consensus.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<BrainCircuit className="w-6 h-6 text-primary-400" />}
                title="AI Threat Detection"
                description="Predictive anomaly detection models that identify risks without relying on continuous facial recognition."
              />
              <FeatureCard 
                icon={<Lock className="w-6 h-6 text-emerald-400" />}
                title="Multi-Party Identity Reveal"
                description="Unmasking individuals requires multi-signature approval from security, privacy, and judicial officers."
              />
              <FeatureCard 
                icon={<Scale className="w-6 h-6 text-amber-400" />}
                title="Privacy Transparency Portal"
                description="Citizens can log in to see exactly what metadata has been generated around them and audit access logs."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-vulcan-900/50 border border-vulcan-800 rounded-2xl p-6 hover:bg-vulcan-800/50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-vulcan-950 border border-vulcan-800 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-vulcan-300 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}
