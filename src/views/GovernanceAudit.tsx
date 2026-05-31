import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { auditLogsData } from '../data/mockData';
import { Key, GitPullRequest, FileCheck2, UserX } from 'lucide-react';

export function GovernanceAudit() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-white">Governance & Audit</h2>
          <p className="text-vulcan-300 text-sm mt-1">Cryptographic logs of all system access and de-anonymization requests.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
         <StatsCard title="Total Access Requests" value="1,204" icon={<GitPullRequest />} />
         <StatsCard title="Identities Revealed" value="42" icon={<UserX className="text-amber-500" />} />
         <StatsCard title="Unanimous Approvals" value="38" icon={<FileCheck2 className="text-emerald-500" />} />
         <StatsCard title="Active Warrants" value="4" icon={<Key className="text-red-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>System Audit Trail</CardTitle>
            <CardDescription>Immutable record of operator actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {auditLogsData.map((log) => (
                <div key={log.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border border-vulcan-800 bg-vulcan-900/50">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-vulcan-800 rounded-lg">
                       {log.status === 'Approved' ? <FileCheck2 className="w-4 h-4 text-emerald-500" /> : 
                        log.status === 'Denied' ? <UserX className="w-4 h-4 text-red-500" /> : 
                        <GitPullRequest className="w-4 h-4 text-primary-500" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-white">{log.action}</p>
                        <Badge variant={log.status === 'Approved' ? 'success' : log.status === 'Denied' ? 'danger' : 'warning'}>{log.status}</Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs text-vulcan-400 font-mono">
                        <span>Operator: {log.user_id}</span>
                        <span>•</span>
                        <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  </div>
                  {log.status === 'Pending' && (
                    <div className="mt-4 sm:mt-0 flex items-center gap-2">
                      <Button size="sm" variant="success">Approve</Button>
                      <Button size="sm" variant="danger">Deny</Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Multi-Party Authorization</CardTitle>
            <CardDescription>Workflow required to unmask identities</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="relative border-l-2 border-vulcan-800 ml-3 space-y-8 pb-4 mt-2">
                
                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-vulcan-950" />
                  <p className="font-medium text-sm text-white">System Request</p>
                  <p className="text-xs text-vulcan-400 mt-1">Automated threat identified by AI</p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-vulcan-950" />
                  <p className="font-medium text-sm text-white">Security Officer</p>
                  <p className="text-xs text-vulcan-400 mt-1">Approved rationale for de-anonymization</p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-2 top-0.5 w-4 h-4 rounded-full border-2 border-primary-500 bg-vulcan-950 ring-4 ring-vulcan-950" />
                  <p className="font-medium text-sm text-white">Privacy Officer</p>
                  <p className="text-xs text-primary-400 mt-1 animate-pulse">Awaiting independent review</p>
                </div>

                <div className="relative pl-6 text-vulcan-500">
                  <div className="absolute -left-2 top-0.5 w-4 h-4 rounded-full border-2 border-vulcan-800 bg-vulcan-950 ring-4 ring-vulcan-950" />
                  <p className="font-medium text-sm">Judicial / Admin</p>
                  <p className="text-xs mt-1">Final unlock mechanism</p>
                </div>

             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatsCard({ title, value, icon }: any) {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-vulcan-900 border border-vulcan-800 rounded-xl">
          {React.cloneElement(icon, { className: `w-5 h-5 ${icon.props.className || 'text-vulcan-300'}` })}
        </div>
        <div>
          <p className="text-sm font-medium text-vulcan-400">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </Card>
  );
}
