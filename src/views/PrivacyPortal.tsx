import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ProgressBar } from '../components/ui/ProgressBar';
import { currentUser, privacyReportsData, privacyScoreTrendData } from '../data/mockData';
import { Download, Shield, EyeOff, Trash2, ShieldCheck, AreaChart, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function PrivacyPortal() {
  const myReport = privacyReportsData[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-white">My Privacy Profile</h2>
          <p className="text-vulcan-300 text-sm mt-1">Total transparency into your digital footprint within Sentinel</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Download Full Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 border-primary-900/50 bg-gradient-to-b from-vulcan-900/80 to-vulcan-950">
          <CardHeader>
            <CardTitle className="text-primary-300">Privacy Rating</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-4 pb-8">
            <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-emerald-500/20 mb-4">
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle 
                  cx="60" cy="60" r="58" fill="none" stroke="#10b981" strokeWidth="4"
                  strokeDasharray="364" strokeDashoffset={364 - (364 * myReport.privacy_score) / 100}
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <span className="text-4xl font-bold text-white">{myReport.privacy_score}</span>
            </div>
            <Badge variant="success" className="mb-2">Excellent Status</Badge>
            <p className="text-xs text-center text-vulcan-400 mt-2">Your data exposure is minimal. No unmasked queries detected.</p>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
           <CardHeader>
            <CardTitle>Score History</CardTitle>
            <CardDescription>Algorithms run nightly to optimize your data minimization</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[200px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                 <LineChart data={privacyScoreTrendData} margin={{ top: 5, right: 20, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3c2368" vertical={false} />
                  <XAxis dataKey="month" stroke="#b0a6e0" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#b0a6e0" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0514', borderColor: '#3c2368', borderRadius: '8px' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Line type="stepAfter" dataKey="avgScore" stroke="#10b981" strokeWidth={3} dot={{ fill: '#0a0514', stroke: '#10b981', strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-lg font-semibold text-white mt-8 mb-4">Data Inventory & Controls</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DataControlCard 
          icon={<Activity />}
          title="Metadata Footprint"
          value={`${myReport.data_points_collected} points`}
          description="Anonymized movement vectors and public IoT interactions."
          progress={15}
          progressColor="bg-primary-500"
        />
        <DataControlCard 
          icon={<EyeOff />}
          title="Facial Recognition Hashes"
          value="0 stored"
          description="Your optical signatures are dropped immediately at the edge."
          progress={0}
          progressColor="bg-emerald-500"
        />
        <DataControlCard 
          icon={<ShieldCheck />}
          title="Access Queries"
          value="None"
          description="Times an agency requested to unmask your identity."
          progress={0}
          progressColor="bg-emerald-500"
        />
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <Button variant="danger" className="gap-2">
          <Trash2 className="w-4 h-4" />
          Request Right to be Forgotten
        </Button>
      </div>
    </div>
  );
}

function DataControlCard({ icon, title, value, description, progress, progressColor }: any) {
  return (
    <Card className="hover:border-primary-900/50 transition-colors">
      <CardContent className="p-5 flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-vulcan-800 text-vulcan-300">
              {React.cloneElement(icon, { className: 'w-5 h-5' })}
            </div>
            <div>
              <h4 className="font-medium text-white">{title}</h4>
              <p className="text-xl font-bold text-vulcan-100">{value}</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-vulcan-400 mb-4 flex-1">{description}</p>
        <div>
          <div className="flex justify-between text-xs text-vulcan-500 mb-1.5">
            <span>Utilization Risk</span>
            <span>{progress}%</span>
          </div>
          <ProgressBar value={progress} indicatorColor={progressColor} />
        </div>
      </CardContent>
    </Card>
  );
}
