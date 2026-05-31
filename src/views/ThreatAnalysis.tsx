import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { aiAnalysesData } from '../data/mockData';
import { BrainCircuit, Target, ShieldAlert, Cpu } from 'lucide-react';

export function ThreatAnalysis() {
  const analysis = aiAnalysesData[0];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-white">AI Threat Analysis Center</h2>
          <p className="text-vulcan-300 text-sm mt-1">Deep neural assessment of Incident: {analysis.incident_id}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-2 border-red-900/30">
          <CardHeader className="bg-red-950/20 border-b border-red-900/30">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-red-500" />
              <CardTitle className="text-red-100">Critical Threat Assessment</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-vulcan-400 uppercase tracking-wider mb-2">AI Explanation Engine</h4>
                <p className="text-vulcan-100 leading-relaxed font-mono text-sm bg-vulcan-900 p-4 rounded-lg border border-vulcan-800">
                  <span className="text-primary-400">{'> '}</span>
                  {analysis.explanation}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-vulcan-400 uppercase tracking-wider mb-2">Recommended Course of Action</h4>
                <div className="bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-4">
                  <p className="text-emerald-300 font-medium">{analysis.recommended_action}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="danger" className="w-full">Execute Lockdown Protocol</Button>
                <Button variant="outline" className="w-full">Escalate to Human Review</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
             <CardHeader>
              <CardTitle className="text-sm">Confidence Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle 
                      cx="60" cy="60" r="58" fill="none" stroke="#3c2368" strokeWidth="4"
                    />
                    <circle 
                      cx="60" cy="60" r="58" fill="none" stroke="#ef4444" strokeWidth="4"
                      strokeDasharray="364" strokeDashoffset={364 - (364 * analysis.confidence) / 100}
                    />
                  </svg>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-white">{analysis.confidence}%</span>
                  </div>
                </div>
                <p className="text-xs text-vulcan-400 mt-4 text-center">Neural net confidence in threat classification.</p>
              </div>
            </CardContent>
          </Card>

           <Card>
             <CardHeader>
              <CardTitle className="text-sm">Model Telemetry</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex justify-between items-center text-sm">
                 <span className="text-vulcan-400 flex items-center gap-2"><Cpu className="w-4 h-4"/> Model</span>
                 <span className="text-vulcan-100 font-mono">Sentinel-V4.2</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-vulcan-400 flex items-center gap-2"><BrainCircuit className="w-4 h-4"/> Latency</span>
                 <span className="text-vulcan-100 font-mono">42ms</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-vulcan-400 flex items-center gap-2"><Target className="w-4 h-4"/> Bias Score</span>
                 <span className="text-emerald-400 font-mono">0.02 (Low)</span>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
