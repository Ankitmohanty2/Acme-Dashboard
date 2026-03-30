import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, Line, ResponsiveContainer, Tooltip } from 'recharts';
import { VISITS_CHART_DATA } from '@/constants/chartData';
import { COLORS } from '@/utils/constants';

export const VisitsChart: React.FC = () => {
  return (
    <motion.div 
      className="h-40 w-full mt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={VISITS_CHART_DATA}>
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={COLORS.AREA_GRADIENT_START} stopOpacity={COLORS.AREA_GRADIENT_OPACITY_START}/>
              <stop offset="100%" stopColor={COLORS.AREA_GRADIENT_START} stopOpacity={COLORS.AREA_GRADIENT_OPACITY_END}/>
            </linearGradient>
          </defs>
          <Tooltip 
            contentStyle={{ backgroundColor: '#111827', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
            itemStyle={{ color: '#fff' }}
            cursor={{ stroke: '#E5E7EB', strokeWidth: 1 }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            fill="url(#areaGradient)" 
            stroke="none"
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={COLORS.AREA_GRADIENT_START} 
            strokeWidth={2} 
            dot={false}
            activeDot={{ r: 4, fill: COLORS.AREA_GRADIENT_START, stroke: '#fff', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
};