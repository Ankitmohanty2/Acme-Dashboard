export interface KPIData {
  title: string;
  value: string;
  growth: number;
  timeframe: string;
  suffix?: string;
}

export interface GrowthBadgeData {
  label: string;
  value: number;
}

export interface ChannelData {
  name: string;
  value: string;
  growth: number;
}

export interface StatusData {
  label: string;
  count: number;
  total: number;
  color: string;
}

export interface SegmentationData {
  totalCustomers: number;
  segments: Array<{
    label: string;
    percentage: number;
    color: string;
  }>;
  channels: ChannelData[];
}

export const KPI_DATA: KPIData[] = [
  { title: 'Pipeline Value', value: '$485,000', growth: -12.5, timeframe: 'Last Months' },
  { title: 'Lead-to-Deal Rate', value: '18.5%', growth: -12.5, timeframe: 'Last Months' },
  { title: 'Contacted Leads', value: '92', growth: 25, timeframe: 'Last Months' },
  { title: 'Qualified Leads', value: '38', growth: 25, timeframe: 'Last Months' },
];

export const SALES_REVENUE_DATA = {
  value: '$1,631,241',
  growth: -12.5,
  timeframe: 'yesterday',
  growthBadges: [
    { label: '3m growth', value: 25 },
    { label: '6m growth', value: 25 },
    { label: '1y growth', value: -12.5 },
  ] as GrowthBadgeData[],
};

export const SEGMENTATION_DATA: SegmentationData = {
  totalCustomers: 2388,
  segments: [
    { label: 'Mid Market', percentage: 40, color: 'bg-sky-400' },
    { label: 'Small Business', percentage: 35, color: 'bg-orange-500' },
    { label: 'Individual', percentage: 25, color: 'bg-yellow-400' },
  ],
  channels: [
    { name: 'Facebook', value: '2341', growth: 25 },
    { name: 'Twitter', value: '1231', growth: -25 },
    { name: 'Google', value: '1123', growth: -25 },
    { name: 'Instagram', value: '125', growth: 25 },
  ],
};

export const LEADS_STATUS_DATA = {
  totalInPipeline: 213,
  statuses: [
    { label: 'New Leads', count: 134, total: 200, color: 'bg-gradient-to-b from-[#35C3F3] to-[#0494F3]' },
    { label: 'Contacted', count: 121, total: 200, color: 'bg-gradient-to-b from-[#FFA73D] to-[#FF5E00]' },
    { label: 'Qualified', count: 133, total: 200, color: 'bg-gradient-to-b from-[#FFDC4A] to-[#FFB700]' },
    { label: 'Inactive', count: 153, total: 200, color: 'bg-gradient-to-b from-[#36E8D6] to-[#00BCAE]' },
    { label: 'Nego', count: 123, total: 200, color: 'bg-gradient-to-b from-[#8C75FF] to-[#5C42FF]' },
  ] as StatusData[],
};

export const WEB_VISITS_DATA = {
  value: '701.34m',
  growth: -12.5,
  timeframe: 'last month',
  growthBadges: [
    { label: '3m growth', value: 25 },
    { label: '6m growth', value: 25 },
    { label: '1y growth', value: -12.5 },
  ] as GrowthBadgeData[],
};

export const DASHBOARD_HEADER_DATA = {
  title: 'Leads Report',
  totalLeads: '13487 Leads',
};

