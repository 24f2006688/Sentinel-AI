import React, { useState } from 'react';
import { LandingPage } from './views/LandingPage';
import { SafetyDashboard } from './views/SafetyDashboard';
import { PrivacyPortal } from './views/PrivacyPortal';
import { ThreatAnalysis } from './views/ThreatAnalysis';
import { GovernanceAudit } from './views/GovernanceAudit';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('landing');

  if (currentView === 'landing') {
    return <LandingPage onEnterDashboard={() => setCurrentView('dashboard')} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <SafetyDashboard />;
      case 'privacy':
        return <PrivacyPortal />;
      case 'threat':
        return <ThreatAnalysis />;
      case 'governance':
        return <GovernanceAudit />;
      default:
        return <SafetyDashboard />;
    }
  };

  const getViewName = () => {
    switch (currentView) {
      case 'dashboard': return 'Safety Hub';
      case 'privacy': return 'Privacy Transparency Portal';
      case 'threat': return 'AI Threat Analysis Center';
      case 'governance': return 'Governance & Audit Log';
      default: return 'Overview';
    }
  };

  return (
    <div className="flex h-screen bg-[#050505] text-white font-sans overflow-hidden border border-white/10 relative">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <Navbar currentViewName={getViewName()} />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 relative bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_50%)]">
           <div className="absolute inset-0 pointer-events-none opacity-20">
             <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-600 rounded-full blur-[80px]"></div>
             <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-600 rounded-full blur-[100px]"></div>
           </div>
           <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
           <div className="relative z-10">
             {renderView()}
           </div>
        </main>
      </div>
    </div>
  );
}

