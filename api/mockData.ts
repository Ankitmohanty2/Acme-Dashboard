import { useState, useEffect } from 'react';

export interface DashboardStats {
  totalRevenue: number;
  totalUsers: number;
  activeSessions: number;
  bounceRate: number;
}

export interface ChartDataPoint {
  date: string;
  revenue: number;
  users: number;
}

export interface UserRow {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
}

const MOCK_STATS: DashboardStats = {
  totalRevenue: 124500,
  totalUsers: 8432,
  activeSessions: 1120,
  bounceRate: 24.5,
};

const MOCK_CHART_DATA: ChartDataPoint[] = Array.from({ length: 14 }).map((_, i) => ({
  date: new Date(Date.now() - (13 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
  revenue: Math.floor(Math.random() * 8000) + 3000,
  users: Math.floor(Math.random() * 2000) + 800,
}));

const MOCK_USERS: UserRow[] = [
  { id: '1', name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: '2', name: 'Bob Jones', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'Editor', status: 'Active' },
  { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'User', status: 'Pending' },
  { id: '5', name: 'Evan Wright', email: 'evan@example.com', role: 'User', status: 'Active' },
  { id: '6', name: 'Frank Castle', email: 'frank@example.com', role: 'Admin', status: 'Active' },
  { id: '7', name: 'Grace Hopper', email: 'grace@example.com', role: 'Developer', status: 'Active' },
  { id: '8', name: 'Heidi Klum', email: 'heidi@example.com', role: 'Editor', status: 'Inactive' },
  { id: '9', name: 'Ivan Drago', email: 'ivan@example.com', role: 'User', status: 'Pending' },
  { id: '10', name: 'Judy Geller', email: 'judy@example.com', role: 'User', status: 'Active' },
];

export function useDashboardStats() {
  const [data, setData] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        setData(MOCK_STATS);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchStats();
  }, []);

  return { data, isLoading, error };
}

export function useChartData() {
  const [data, setData] = useState<ChartDataPoint[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setData(MOCK_CHART_DATA);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
}

export function useUsersData() {
  const [data, setData] = useState<UserRow[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setData(MOCK_USERS);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, isLoading, error };
}
