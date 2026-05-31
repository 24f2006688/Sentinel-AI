import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { incidentsData, threatTrendChartData, incidentDistributionData } from '../data/mockData';
import { AlertTriangle, Activity, Map, Fingerprint, Crosshair, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

export function SafetyDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard title="Active Incidents" value="14" subtext="+2 since last hour" icon={<AlertTriangle className="w-4 h-4 text-amber-500" />} />
        <MetricCard title="System Threat Level" value="Level 3" subtext="Elevated Risk" icon={<Activity className="w-4 h-4 text-red-500" />} />
        <MetricCard title="Scans Processed" value="1.2M" subtext="Last 24 hours" icon={<Crosshair className="w-4 h-4 text-primary-500" />} />
        <MetricCard title="Identities Protected" value="99.9%" subtext="Anonymization factor" icon={<Fingerprint className="w-4 h-4 text-emerald-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Threat Level Trends</CardTitle>
            <CardDescription>Aggregated AI threat monitoring across all sectors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={threatTrendChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorThreat" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3c2368" vertical={false} />
                  <XAxis dataKey="time" stroke="#b0a6e0" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#b0a6e0" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0514', borderColor: '#3c2368', borderRadius: '8px' }}
                    itemStyle={{ color: '#e7e5f6' }}
                  />
                  <Area type="monotone" dataKey="threatLevel" stroke="#7c3aed" strokeWidth={2} fillOpacity={1} fill="url(#colorThreat)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Regional Distribution</CardTitle>
            <CardDescription>Incidents by sector locus</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={incidentDistributionData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3c2368" horizontal={false} />
                  <XAxis type="number" stroke="#b0a6e0" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#b0a6e0" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{fill: '#2e1065'}} contentStyle={{ backgroundColor: '#0a0514', borderColor: '#3c2368' }} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {incidentDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? '#7c3aed' : '#573199'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle>Active Incident Queue</CardTitle>
            <CardDescription>Real-time threat assessments from autonomous nodes</CardDescription>
          </div>
          <Badge variant="danger" className="animate-pulse">Live Feed</Badge>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-vulcan-400 border-b border-vulcan-800">
                <tr>
                  <th className="px-4 py-3 font-medium">Incident ID</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                  <th className="px-4 py-3 font-medium text-right">Threat Score</th>
                  <th className="px-4 py-3 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {incidentsData.map((inc) => (
                  <tr key={inc.id} className="border-b border-vulcan-800/50 hover:bg-vulcan-800/20 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">{inc.id}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <Map className="w-3 h-3 text-vulcan-400" />
                        {inc.location}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-vulcan-200">{inc.description}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`font-semibold ${inc.threat_score > 80 ? 'text-red-400' : 'text-amber-400'}`}>
                        {inc.threat_score}/100
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Badge variant={inc.status === 'Active' ? 'danger' : inc.status === 'Investigating' ? 'warning' : 'success'}>
                        {inc.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MetricCard({ title, value, subtext, icon }: { title: string, value: string, subtext: string, icon: React.ReactNode }) {
  return (
    <Card className="glass-panel p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-vulcan-400 mb-1">{title}</p>
          <h4 className="text-2xl font-bold text-white mb-1">{value}</h4>
          <p className="text-xs text-vulcan-500">{subtext}</p>
        </div>
        <div className="bg-vulcan-900 border border-vulcan-800 p-2 rounded-lg">
          {icon}
        </div>
      </div>
    </Card>
  );
}
