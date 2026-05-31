import React from 'react';
import { Shield, Home, Activity, FileText, Lock, Settings, Users, Database } from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export function Sidebar({ currentView, onChangeView }: SidebarProps) {
  const mainNav = [
    { id: 'dashboard', label: 'Safety Hub', icon: Home },
    { id: 'threat', label: 'Threat Analysis', icon: Activity },
    { id: 'privacy', label: 'Privacy Portal', icon: Lock },
    { id: 'governance', label: 'Governance & Audit', icon: FileText },
  ];

  const systemNav = [
    { id: 'identities', label: 'Identity Registry', icon: Users },
    { id: 'data', label: 'Data Lake', icon: Database },
    { id: 'settings', label: 'System Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-xl flex flex-col h-full overflow-y-auto z-10">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-900/50">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <span className="font-display font-bold text-lg tracking-tight text-white whitespace-nowrap">Sentinel AI</span>
      </div>

      <div className="px-3 py-2">
        <p className="px-4 text-xs font-semibold text-vulcan-400 uppercase tracking-wider mb-2">Core Systems</p>
        <div className="space-y-1">
          {mainNav.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeView(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                currentView === item.id 
                  ? "bg-primary-900/30 text-primary-300 pointer-events-none" 
                  : "text-vulcan-300 hover:text-vulcan-50 hover:bg-vulcan-800/50"
              )}
            >
              <item.icon className={cn("w-4 h-4", currentView === item.id ? "text-primary-400" : "text-vulcan-400")} />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-3 py-4 mt-4">
        <p className="px-4 text-xs font-semibold text-vulcan-400 uppercase tracking-wider mb-2">Administration</p>
        <div className="space-y-1">
          {systemNav.map((item) => (
            <button
              key={item.id}
              onClick={() => {}}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-vulcan-400 hover:text-vulcan-200 hover:bg-vulcan-800/20 transition-colors opacity-60 cursor-not-allowed"
              title="Restricted Access"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto p-4">
        <div className="bg-vulcan-900 rounded-xl p-4 border border-vulcan-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-emerald-400">System Online</span>
          </div>
          <div className="text-[10px] text-vulcan-400 font-mono space-y-1">
            <p>NODE: SNTL-EU-WEST-1</p>
            <p>LATENCY: 12ms</p>
            <p>ENC: RSA-4096 / TLS 1.3</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
