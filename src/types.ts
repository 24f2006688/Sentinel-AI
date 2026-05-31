export type Role = 'Citizen' | 'Law Enforcement' | 'Government Agency' | 'Privacy Auditor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarUrl?: string;
}

export type IncidentStatus = 'Active' | 'Resolved' | 'Investigating';

export interface Incident {
  id: string;
  description: string;
  threat_score: number;
  status: IncidentStatus;
  created_at: string;
  location: string;
}

export interface PrivacyReport {
  id: string;
  user_id: string;
  privacy_score: number;
  risk_level: 'Low' | 'Medium' | 'High';
  data_points_collected: number;
  retention_days: number;
  last_accessed: string;
}

export interface AuditLog {
  id: string;
  user_id: string;
  action: string;
  timestamp: string;
  ip_address?: string;
  status: 'Approved' | 'Denied' | 'Pending';
}

export interface AIAnalysis {
  id: string;
  incident_id: string;
  threat_level: 'Low' | 'Medium' | 'High' | 'Critical';
  confidence: number;
  explanation: string;
  recommended_action: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}
