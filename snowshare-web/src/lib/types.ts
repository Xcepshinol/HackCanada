export type UserRole = 'requester' | 'helper';

export type RequestStatus =
  | 'open'
  | 'assigned'
  | 'in_progress'
  | 'completed';

export interface SnowRequest {
  id: string;
  requesterName?: string;
  address: string;
  lat?: number;
  lng?: number;
  snowTypes: string[];
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  notes?: string;
  status: RequestStatus;
  rewardAmount?: number;
  isPaid: boolean;
  createdAt?: string;
  helperName?: string;
}
