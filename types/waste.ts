export interface WasteReport {
  id: string;
  userId: string;
  imageUri: string;
  location: string;
  description?: string;
  audioUri?: string;
  status: 'pending' | 'verified' | 'resolved';
  createdAt: Date;
  updatedAt: Date;
}

export interface PickupRequest {
  id: string;
  userId: string;
  wasteTypes: string[];
  scheduledDate?: Date;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  location: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WasteType {
  id: string;
  label: string;
  color: string;
  description?: string;
}

export interface Order {
  id: string;
  userId: string;
  type: string;
  status: 'active' | 'completed' | 'cancelled';
  progress: number;
  scheduledTime?: string;
  completedAt?: Date;
  createdAt: Date;
}