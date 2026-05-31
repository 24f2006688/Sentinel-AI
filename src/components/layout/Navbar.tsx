import React from 'react';
import { Bell, Search, User } from 'lucide-react';

interface NavbarProps {
  currentViewName: string;
}

export function Navbar({ currentViewName }: NavbarProps) {
  return (
    <header className="h-20 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-50">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">{currentViewName}</h1>
        <p className="text-[10px] text-white/40 uppercase tracking-[0.3em]">Node: Central-London-A1 • v4.8.2-stable</p>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full text-[10px] font-bold">AI ENGINE ACTIVE</span>
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-[10px] font-bold">PRIVACY SHIELD ON</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 border border-white/20"></div>
      </div>
    </header>
  );
}
