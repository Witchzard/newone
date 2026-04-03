export type ViolationType = 'Illegal Parking' | 'Speeding' | 'Signal Jump' | 'Other';

export interface Report {
  id: string;
  title: string;
  type: ViolationType;
  location: string;
  timestamp: string;
  status: 'Verified' | 'In Progress' | 'Resolved' | 'Pending';
  points: number;
  image: string;
  description?: string;
  priority?: 'High' | 'Routine' | 'AI Flagged';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface Reward {
  id: string;
  title: string;
  provider: string;
  points: number;
  description: string;
  image: string;
  exclusive?: boolean;
  giveBack?: boolean;
  outOfStock?: boolean;
}

export interface User {
  id: string;
  name: string;
  handle: string;
  level: number;
  points: number;
  reports: number;
  streak: number;
  rank: number;
  avatar: string;
}
