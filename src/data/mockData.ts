import type { User, Incident, PrivacyReport, AuditLog, AIAnalysis, ChartDataPoint } from '../types';

export const currentUser: User = {
  id: 'usr_01',
  name: 'Alex Mercer',
  email: 'alex.mercer@sentinel.example.com',
  role: 'Privacy Auditor',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
};

export const incidentsData: Incident[] = [
  {
    id: 'inc_001',
    description: 'Unusual crowd gathering near Sector 4 Transit Hub',
    threat_score: 82,
    status: 'Investigating',
    created_at: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    location: 'Sector 4 Transit Hub',
  },
  {
    id: 'inc_002',
    description: 'Unauthorized access attempt at Facility B',
    threat_score: 95,
    status: 'Active',
    created_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
    location: 'Facility B Data Center',
  },
  {
    id: 'inc_003',
    description: 'Package abandoned in public square',
    threat_score: 60,
    status: 'Resolved',
    created_at: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
    location: 'Central Plaza',
  },
  {
    id: 'inc_004',
    description: 'Repeated perimeter breaches at restricted zone',
    threat_score: 88,
    status: 'Active',
    created_at: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
    location: 'Zone 9',
  },
];

export const privacyReportsData: PrivacyReport[] = [
  {
    id: 'pr_001',
    user_id: 'civ_892',
    privacy_score: 92,
    risk_level: 'Low',
    data_points_collected: 145,
    retention_days: 30,
    last_accessed: new Date(Date.now() - 1000 * 3600 * 2).toISOString(),
  },
  {
    id: 'pr_002',
    user_id: 'civ_321',
    privacy_score: 45,
    risk_level: 'High',
    data_points_collected: 2150,
    retention_days: 365,
    last_accessed: new Date(Date.now() - 1000 * 3600 * 24).toISOString(),
  },
];

export const auditLogsData: AuditLog[] = [
  {
    id: 'log_001',
    user_id: 'usr_off_01',
    action: 'Requested Identity Reveal for Subject A',
    timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    status: 'Pending',
  },
  {
    id: 'log_002',
    user_id: 'usr_gov_02',
    action: 'Accessed Regional Heatmap Data',
    timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
    status: 'Approved',
  },
  {
    id: 'log_003',
    user_id: 'usr_off_03',
    action: 'Attempted Root Analytics Access',
    timestamp: new Date(Date.now() - 1000 * 60 * 115).toISOString(),
    status: 'Denied',
  },
];

export const aiAnalysesData: AIAnalysis[] = [
  {
    id: 'aia_001',
    incident_id: 'inc_002',
    threat_level: 'Critical',
    confidence: 94,
    explanation: 'Facial recognition combined with gait analysis matches known threat actor profile. Behavioral anomalies detected in approach vectors. Attempted evasion of 3 primary cameras.',
    recommended_action: 'Initiate immediate lockdown of Sector 4 and dispatch response team Alpha.',
  },
  {
    id: 'aia_002',
    incident_id: 'inc_001',
    threat_level: 'Medium',
    confidence: 76,
    explanation: 'Density of individuals increasing by 45% over 10 minutes. Sentiments analyzed from public audio feeds indicate agitation, but no immediate weapon presence detected.',
    recommended_action: 'Increase digital monitoring and position crowd control units on standby.',
  }
];

export const threatTrendChartData = [
  { time: '00:00', threatLevel: 25 },
  { time: '04:00', threatLevel: 30 },
  { time: '08:00', threatLevel: 45 },
  { time: '12:00', threatLevel: 85 },
  { time: '16:00', threatLevel: 65 },
  { time: '20:00', threatLevel: 55 },
  { time: '24:00', threatLevel: 40 },
];

export const privacyScoreTrendData = [
  { month: 'Jan', avgScore: 78 },
  { month: 'Feb', avgScore: 82 },
  { month: 'Mar', avgScore: 80 },
  { month: 'Apr', avgScore: 85 },
  { month: 'May', avgScore: 89 },
  { month: 'Jun', avgScore: 94 },
];

export const incidentDistributionData = [
  { name: 'Sector 1', value: 400 },
  { name: 'Sector 2', value: 300 },
  { name: 'Sector 3', value: 300 },
  { name: 'Sector 4', value: 200 },
];
