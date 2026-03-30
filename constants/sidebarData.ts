import { LucideIcon } from 'lucide-react';
import { 
  Search, LayoutDashboard, FileText, Calendar, Users, BarChart2, Building2 
} from '@/components/ui/Icons';

export interface NavItem {
  icon: LucideIcon | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  active?: boolean;
  shortcut?: string;
  path?: string;
}

export interface Favorite {
  name: string;
  type: string;
  img: string;
}

export interface SearchItem {
  name: string;
  color: string;
  icon: string;
}

export const NAV_ITEMS: NavItem[] = [
  { icon: Search, label: 'Search', shortcut: '/' },
  { icon: LayoutDashboard, label: 'Dashboard', active: true, path: '/dashboard' },
  { icon: FileText, label: 'Drafts' },
  { icon: Calendar, label: 'Schedule' },
  { icon: Users, label: 'Customers' },
  { icon: BarChart2, label: 'Leads Report' },
  { icon: Building2, label: 'Companies' },
];

export const FAVORITES: Favorite[] = [
  { name: 'Apple', type: 'COMPANY', img: '/apple.svg' },
  { name: 'Google', type: 'COMPANY', img: '/google.svg' },
  { name: 'ClickUp', type: 'COMPANY', img: '/clickup.svg' },
  { name: 'Rico', type: 'INVESTOR', img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=entropy' },
  { name: 'Mehdi', type: 'DESIGNER', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=entropy' },
  { name: 'Sarah', type: 'ENGINEER', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=entropy' },
];

export const SEARCHES: SearchItem[] = [
  { name: 'Customer Success', color: '#F97316', icon: '/magic.svg' },
  { name: 'Outsourcing', color: '#10B981', icon: '/slack.svg' },
  { name: 'Fundraising', color: '#EF4444', icon: '/chart.svg' },
  { name: 'Recruiting', color: '#0EA5E9', icon: '/search.svg' },
];

