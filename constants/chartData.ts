export interface ChartDataPoint {
  name?: string;
  value: number;
  active?: boolean;
}

export const REVENUE_CHART_DATA: ChartDataPoint[] = [
  { name: 'JAN', value: 3500 },
  { name: 'FEB', value: 5000 },
  { name: 'MAR', value: 4500 },
  { name: 'APR', value: 6000 },
  { name: 'MAY', value: 9500, active: true },
  { name: 'JUN', value: 7500 },
  { name: 'JUL', value: 5500 },
  { name: 'AUG', value: 8500 },
  { name: 'SEP', value: 9000 },
  { name: 'OCT', value: 5000 },
  { name: 'NOV', value: 4000 },
  { name: 'DEC', value: 6500 },
];

export const VISITS_CHART_DATA: ChartDataPoint[] = [
  { value: 400 },
  { value: 380 },
  { value: 450 },
  { value: 410 },
  { value: 390 },
  { value: 480 },
  { value: 460 },
  { value: 520 },
  { value: 500 },
  { value: 480 },
  { value: 550 },
  { value: 600 },
  { value: 580 },
  { value: 540 },
  { value: 590 },
  { value: 650 },
  { value: 620 },
  { value: 580 },
  { value: 630 },
  { value: 680 },
  { value: 640 },
  { value: 700 },
  { value: 750 },
  { value: 720 },
  { value: 680 },
  { value: 740 },
  { value: 800 },
];

