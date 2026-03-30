import React from 'react';
import { motion } from 'framer-motion';
import { GrowthBadgeData } from '@/constants/dashboardData';

export interface GrowthBadgeProps extends GrowthBadgeData {
  index?: number;
}

/**
 * Growth Badge component displaying growth percentage with visual indicator
 * @param props - Growth badge properties including label, value, and animation index
 */
export const GrowthBadge: React.FC<GrowthBadgeProps> = React.memo(({ label, value, index = 0 }) => {
  const isPositive = value > 0;

  return (
    <motion.div
      className="flex flex-col border border-[#eeeeee] rounded-lg p-3 min-w-[125px] bg-white hover-scale"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
      aria-label={`${label}: ${isPositive ? '+' : ''}${value}%`}
    >
      <span className="text-xs text-gray-500 tracking-tight font-mono mb-1">{label}</span>
      <span className={`text-xs font-semibold flex items-center gap-1 font-mono ${isPositive ? 'text-status-green' : 'text-status-red'}`}>
        {isPositive ? '+' : ''}{value}% {isPositive ? '↑' : '↓'}
      </span>
    </motion.div>
  );
});

GrowthBadge.displayName = 'GrowthBadge';

