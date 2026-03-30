import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { REVENUE_CHART_DATA } from '@/constants/chartData';
import { BAR_SIZE, CHART_RADIUS, COLORS } from '@/utils/constants';

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="font-medium">${payload[0].value.toLocaleString()}</p>
      </div>
    );
  }
  return null;
};

export const RevenueChart: React.FC = () => {
  return (
    <motion.div 
      className="h-64 w-full mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={REVENUE_CHART_DATA} barSize={BAR_SIZE}>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 10, fontWeight: 500 }}
            dy={10}
          />
          <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
          <Bar dataKey="value" radius={CHART_RADIUS}>
            {REVENUE_CHART_DATA.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.active ? 'url(#colorActive)' : COLORS.BORDER} 
              />
            ))}
          </Bar>
          <defs>
             <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.ACTIVE_GRADIENT_START} stopOpacity={1}/>
                <stop offset="100%" stopColor={COLORS.ACTIVE_GRADIENT_END} stopOpacity={1}/>
             </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};